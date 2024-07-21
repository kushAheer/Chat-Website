import React from 'react'
import { useSelector } from 'react-redux';
import classes from './ChatArea.module.css'
import useListenMessage from '../../Hooks/useListenMessage';
function Messages(props) {



    const reciverId = useSelector((state) => state.conversations.selectedConversation);
    
    const userId = JSON.parse(localStorage.getItem('userData'))._id;
    
    const left = reciverId === props.receiverId;
    const right = userId === props.senderId;
    
    const fromMe = right ? classes.right : classes.left;
    
    const color = right ? classes.bgColor : "bg-body-tertiary";

    const date = new Date(props.createdAt);
    const readableDate = new Intl.DateTimeFormat('en-US', {
        
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(date).replace(',', ' |');
    return (
        <>
            <div className={`${fromMe} `}>
                <div>
                    <p className={`small p-2 ms-3 mb-1 rounded-3 ${color} `}>{props.chat}</p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted float-end">{readableDate}</p>
                </div>
            </div>

        </>
    )
}

export default Messages
