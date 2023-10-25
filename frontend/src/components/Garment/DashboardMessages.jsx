import React, { useEffect, useState } from 'react'
import { server } from '../../server'
import axios from 'axios'
import { useSelector } from 'react-redux'

const DashboardMessages = () => {
    const { garment } = useSelector((state) => state.garment);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        axios.get(`${server}/conversation/get-all-conversation-garment/${garment._id}`, { withCredentials: true }).then((res) => {
            setConversations(res.data.conversations);
        }).catch((error) => {
            console.log(error);
        });

    }, [garment])

    return (
        <div className='w-[80%] bg-[#efefef] m-5 h-[85vh] overflow-y-scroll rounded'>
            <h1 className='text-center text-[30px] py-3'>All Messages</h1>
            {/* All messages List */}
            {
                conversations && conversations.map((item, index) => (
                    <MessageList data={item} key={index} index={index} />
                ))
            }


        </div>
    )
}

const MessageList = ({ data, index }) => {
    const [active, setActive] = useState(0);
    return (
        <div className={`w-full flex p-4 px-3 ${active === index ? 'bg-[#00000010]' : 'bg-transparent'} cursor-pointer`}
            onClick={(e) => setActive(index)}>
            <div className='relative'>
                <img src='https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg' alt=''
                    className='w-[50px] h-[50px] rounded-full'
                />
                <div className='w-[15px] h-[15px] bg-green-400 rounded-full absolute top-0 right-0'></div>
            </div>

            <div className='pl-3'>
                <h1 className='text-[18px]'>Malinga Heshan</h1>
                <p className='text-[16px] text-[#000]'>You: hello I am good...</p>
            </div>
        </div>
    )
}
export default DashboardMessages