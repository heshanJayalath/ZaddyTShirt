import React, { useEffect, useState } from 'react'
import Header from '../../components/Customer/Header'
import { useSelector } from 'react-redux';
import socketIO from 'socket.io-client'
import { format } from 'timeago.js'
import axios from 'axios';
import { server } from '../../server';
import { backend_url } from '../../server';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineSend } from 'react-icons/ai';
import { TfiGallery } from 'react-icons/tfi';
import styles from '../../Styles/Customer/styles';

const ENDPOINT = "http://localhost:4000/"
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });


const UserInbox = () => {
    const { user, loading } = useSelector((state) => state.user);
    const [conversations, setConversations] = useState([]);
    const [open, setOpen] = useState(false);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentChat, setCurrentChat] = useState();
    const [newMessage, setNewMessage] = useState("");
    const [userData, setUserData] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [activeStatus, setActiveStatus] = useState(false);


    useEffect(() => {
        socketId.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        const getConversation = async () => {
            try {
                const resonse = await axios.get(
                    `${server}/conversation/get-all-conversation-user/${user?._id}`,
                    {
                        withCredentials: true,
                    }
                );

                setConversations(resonse.data.conversations);
            } catch (error) {
                // console.log(error);
            }
        };
        getConversation();
    }, [user, messages]);

    useEffect(() => {
        if (user) {
            const sellerId = user?._id;
            socketId.emit("addUser", sellerId);
            socketId.on("getUsers", (data) => {
                setOnlineUsers(data);
            });
        }
    }, [user]);

    const onlineCheck = (chat) => {
        const chatMembers = chat.members.find((member) => member !== user?._id);
        const online = onlineUsers.find((user) => user.userId === chatMembers);

        return online ? true : false;
    };

    // get messages
    useEffect(() => {
        const getMessage = async () => {
            try {
                const response = await axios.get(
                    `${server}/message/get-all-messages/${currentChat?._id}`
                );
                setMessages(response.data.messages);
            } catch (error) {
                console.log(error);
            }
        };
        getMessage();
    }, [currentChat]);

    // create new message
    const sendMessageHandler = async (e) => {
        e.preventDefault();

        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };
        const receiverId = currentChat.members.find(
            (member) => member !== user?._id
        );

        socketId.emit("sendMessage", {
            senderId: user?._id,
            receiverId,
            text: newMessage,
        });

        try {
            if (newMessage !== "") {
                await axios
                    .post(`${server}/message/create-new-message`, message)
                    .then((res) => {
                        setMessages([...messages, res.data.message]);
                        updateLastMessage();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateLastMessage = async () => {
        socketId.emit("updateLastMessage", {
            lastMessage: newMessage,
            lastMessageId: user._id,
        });

        await axios
            .put(`${server}/conversation/update-last-message/${currentChat._id}`, {
                lastMessage: newMessage,
                lastMessageId: user._id,
            })
            .then((res) => {
                setNewMessage("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='w-full'>

            {
                !open && (
                    <>
                        <Header />
                        <h1 className='text-center text-[30px] py-3'>All Messages</h1>

                        {/* All messages List */}
                        {
                            conversations && conversations.map((item, index) => (
                                <MessageList
                                    data={item}
                                    key={index}
                                    index={index}
                                    setOpen={setOpen}
                                    setCurrentChat={setCurrentChat}
                                    me={user?._id}
                                    setUserData={setUserData}
                                    userData={userData}
                                    online={onlineCheck(item)}
                                    setActiveStatus={setActiveStatus}
                                    loading={loading}
                                />
                            ))
                        }

                    </>
                )
            }
            {open && (
                <GarmentInbox
                    setOpen={setOpen}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    sendMessageHandler={sendMessageHandler}
                    messages={messages}
                    garmentId={user._id}
                    userData={userData}
                    activeStatus={activeStatus}
                />
            )}
        </div>
    )
}

const MessageList = ({ data, index, setOpen, setCurrentChat, me, setUserData, userData, online, setActiveStatus, isLoading, loading }) => {
    const [active, setActive] = useState(0);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/inbox?${id}`);
        setOpen(true);
    }

    useEffect(() => {
        setActiveStatus(online);
        const userId = data.members.find((user) => user !== me);
        const getUser = async () => {
            try {
                const res = await axios.get(`${server}/garment/get-garment-info/${userId}`);
                setUser(res.data.garment);
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, [me, data]);

    return (
        <div className={`w-full flex p-4 px-3 ${active === index ? 'bg-[#00000010]' : 'bg-transparent'} cursor-pointer`}
            onClick={(e) =>
                setActive(index) ||
                handleClick(data._id) ||
                setCurrentChat(data) ||
                setUserData(user) ||
                setActiveStatus(online)
            }
        >
            <div className='relative'>
                {console.log("user", user)}
                <img
                    src={`${backend_url}/${user?.avatar}`}
                    alt=''
                    className='w-[50px] h-[50px] rounded-full'
                />
                {
                    online ? (
                        <div className='w-[15px] h-[15px] bg-green-400 rounded-full absolute top-0 right-0' />
                    ) : (
                        <div className='w-[15px] h-[15px] bg-[#898686] rounded-full absolute top-0 right-0' />
                    )
                }
            </div>

            <div className='pl-3'>
                <h1 className='text-[18px]'>{user?.companyName}</h1>
                {/* <p className='text-[16px] text-[#000]'>
                    {
                        data?.lastMessageId !== userData?._id ?
                            "You:"
                            : userData?.name?.split(" ")[0] + ": "}
                    {data?.lastMessage}
                </p> */}
                <p className="text-[16px] text-[#000c]">
                    {!loading && data?.lastMessageId !== userData?._id
                        ? "You:"
                        : userData?.name.split(" ")[0] + ": "}{" "}
                    {data?.lastMessage}
                </p>
            </div>
        </div>
    )
}


const GarmentInbox = ({
    setOpen,
    newMessage,
    setNewMessage,
    sendMessageHandler,
    messages,
    garmentId,
    userData,
    activeStatus,
    hadleImageUpload,
}) => {
    return (
        <div className='w-full min-h-full flex flex-col justify-between'>
            {/* message header */}
            <div className='w-full flex p-3  items-center justify-between bg-slate-200'>
                <div className='flex'>
                    <img src={`${backend_url}/${userData?.avatar}`} alt=''
                        className='w-[60px] h-[60px] rounded-full'
                    />
                    {console.log("active:", activeStatus)}
                    <div className='pl-3'>
                        <h1 className='text-[18px] font-[600]'>{userData?.companyName}</h1>
                        <h1>{activeStatus ? "Active Now" : ""}</h1>
                    </div>
                </div>
                <AiOutlineArrowRight size={20} className='cursor-pointer' onClick={() => setOpen(false)} />
            </div>

            {/* messages */}
            <div className='px-3 h-[65vh] py-3 overflow-y-scroll '>
                {
                    messages && messages.map((item, index) => (

                        <div className={`flex w-full my-2 ${item.sender === garmentId ? 'justify-end' : 'justify-start'}`}>
                            {item.sender !== garmentId && (
                                <img
                                    src={`${backend_url}/${userData?.avatar}`}
                                    className="w-[40px] h-[40px] rounded-full mr-3"
                                    alt=""
                                />
                            )}
                            <div>
                                <div className='w-max p-2 rounded bg-[#3292dc] h-min text-[#fff]'>
                                    <p>{item.text}</p>
                                </div>
                                <div>
                                    <p className='text-[12px] text-[#000] pt-3'>{format(item.createdAt)}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

            {/* send message input */}
            <form aria-required={true} className='p-3 relative w-full flex justify-between'
                onSubmit={sendMessageHandler}>
                <div className='w-[3%]'>
                    <TfiGallery className='cursor-pointer mt-1 ml-2' size={20} />
                </div>
                <div className='w-[97%]'>
                    <input
                        type='text'
                        required
                        placeholder='Enter your message...'
                        className={`${styles.input}`}
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <input
                        type='submit'
                        value="Send"
                        className='hidden'
                        id='send'
                    />
                    <label htmlFor='send'>
                        <AiOutlineSend size={20} className='absolute right-4 top-4 cursor-pointer' />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default UserInbox