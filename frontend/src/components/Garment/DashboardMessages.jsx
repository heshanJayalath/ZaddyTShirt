import React, { useEffect, useState } from 'react'
import { server } from '../../server'
import axios from 'axios'
import socketIO from 'socket.io-client'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineSend } from 'react-icons/ai'
import { TfiGallery } from 'react-icons/tfi'
import styles from '../../Styles/Customer/styles'
import { format } from 'timeago.js'
import { backend_url } from '../../server'

const ENDPOINT = "http://localhost:4000/"
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });


const DashboardMessages = () => {
    const { garment } = useSelector((state) => state.garment);
    const [conversations, setConversations] = useState([]);
    const [open, setOpen] = useState(false);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [userData, setUserData] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [activeStatus, setActiveStatus] = useState(false);

    // connect socket
    useEffect(() => {
        socketId.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        });
    }, []);

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        axios.get(`${server}/conversation/get-all-conversation-garment/${garment?._id}`, { withCredentials: true }).then((res) => {
            setConversations(res.data.conversations);
        }).catch((error) => {
            console.log(error);
        });

    }, [garment]);

    useEffect(() => {
        if (garment) {
            const garmentId = garment?._id;
            socketId.emit("addUser", garmentId);
            socketId.on("getUsers", (data) => {
                setOnlineUsers(data);
            })
        }
    }, [garment]);

    const onlineCheck = (chat) => {
        const chatMembers = chat.members.find((member) => member !== garment._id)
        const online = onlineUsers.find((user) => user.userId === chatMembers);
        // setActiveStatus(online ? true : false);

        return online ? true : false;

    }

    // get messages
    useEffect(() => {
        const getMessage = async () => {
            try {
                const response = await axios.get(`${server}/message/get-all-messages/${currentChat?._id}`)
                setMessages(response.data.messages);
            } catch (error) {
                console.log(error)
            }
        }
        getMessage();
    }, [currentChat])

    // create message
    const sendMessageHandler = async (e) => {
        e.preventDefault();

        const message = {
            sender: garment._id,
            text: newMessage,
            conversationId: currentChat._id,
        }
        const receiverId = currentChat.members.find((member) => member.id !== garment._id);

        socketId.emit("sendMessage", {
            senderId: garment._id,
            receiverId,
            text: newMessage,
        });
        try {
            if (newMessage !== "") {
                await axios.post(`${server}/message/create-new-message`, message).then((res) => {
                    setMessages([...messages, res.data.message])
                    updateLastMessage();
                }).catch((error) => {
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
            lastMessageId: garment._id,
        });
        await axios.put(`${server}/conversation/update-last-message/${currentChat._id}`, {
            lastMessage: newMessage,
            lastMessageId: garment._id,
        })
            .then((res) => {
                console.log(res.data.conversation);
                setNewMessage("");
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='w-[83%] bg-[#efefef] m-5 h-[85vh] overflow-y-scroll rounded'>
            {
                !open && (
                    <>
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
                                    me={garment._id}
                                    setUserData={setUserData}
                                    userData={userData}
                                    online={onlineCheck(item)}
                                    setActiveStatus={setActiveStatus}
                                />
                            ))
                        }

                    </>
                )
            }

            {
                open && (
                    <GarmentInbox
                        setOpen={setOpen}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        sendMessageHandler={sendMessageHandler}
                        messages={messages}
                        garmentId={garment._id}
                        userData={userData}
                        activeStatus={activeStatus}
                    />
                )
            }
        </div>
    )
}

const MessageList = ({ data, index, setOpen, setCurrentChat, me, setUserData, userData, online, setActiveStatus, isLoading }) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`?${id}`);
        setOpen(true);
    }
    const [active, setActive] = useState(0);


    useEffect(() => {
        setActiveStatus(online);
        const userId = data.members.find((user) => user != me);
        const getUser = async () => {
            try {
                const res = await axios.get(`${server}/user/user-info/${userId}`);
                setUserData(res.data.user);
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, [me, data]);

    return (
        <div className={`w-full flex p-4 px-3 ${active === index ? 'bg-[#e8d9d9]' : 'bg-transparent'} cursor-pointer`}
            onClick={(e) => setActive(index) || handleClick(data._id) || setCurrentChat(data)}>
            <div className='relative'>
                <img src={`${backend_url}/${userData?.avatar}`} alt=''
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
                <h1 className='text-[18px]'>{userData?.name}</h1>
                <p className='text-[16px] text-[#000]'>{
                    data.lastMessageId !== userData?._id ? "You:" : userData?.name.split(" ")[0] + ": "
                } {data?.lastMessage}</p>
            </div>
        </div>
    )
}

const GarmentInbox = ({ setOpen, newMessage, setNewMessage, sendMessageHandler, messages, garmentId, userData, activeStatus, hadleImageUpload, }) => {
    return (
        <div className='w-full min-h-full flex flex-col justify-between'>
            {/* message header */}
            <div className='w-full flex p-3  items-center justify-between bg-slate-200'>
                <div className='flex'>
                    <img src={`${backend_url}/${userData?.avatar}`} alt=''
                        className='w-[60px] h-[60px] rounded-full'
                    />
                    <div className='pl-3'>
                        <h1 className='text-[18px] font-[600]'>{userData?.name}</h1>
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
                            {
                                item.sender !== garmentId && (
                                    <img src='https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg'
                                        className='w-[48px] h-[48px] mr-3 rounded-full'
                                    />
                                )
                            }
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
export default DashboardMessages