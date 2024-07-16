import React from 'react'
import classes from './ChatArea.module.css'
import { useState } from 'react'
import useSendMessage from '../../Hooks/useSendMessage';
import useGetMessage from '../../Hooks/useGetMessage';
import { useSelector } from 'react-redux';

import Messages from './Messages';


function MessageBox() {


    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();
    const { loading: messageLoading, data: messageData } = useGetMessage();


    const reciverId = useSelector((state) => state.conversations.selectedConversation);
    const senderId = useSelector((state) => state.users.user._id);

    console.log(messageData);

    const sendMessageHandler = async (e) => {
        e.preventDefault();
        console.log("Message Sent");
        const data = { message: message };
        await sendMessage(data);
        setMessage("");
    }

    return (
        <>
            <div className={`col-md-6 col-lg-7 col-xl-8 `}>
                <div className={`pt-3 pe-3 ${classes.chatArea}`}>
                    <div className={`${classes.chatItem} d-flex`}>
                        {messageData == undefined ? <p>No Message Yet</p> : messageData.map((item) => (
                            <div key={item._id} style={{ width: "100%" }} >
                                <Messages chat={item.message} senderId={item.senderId} receiverId={item.receiverId} />
                            </div>
                        ))}
                    </div>
                </div>
                <form className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2" onSubmit={sendMessageHandler}>
                    
                    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                        placeholder="Type message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className="btn btn-primary ms-1">Send</button>
                </form>
            </div>

        </>
    )
}

export default MessageBox
