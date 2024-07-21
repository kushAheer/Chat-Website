import React, { useEffect } from 'react'
import classes from './ChatArea.module.css'
import { useState } from 'react'

import useGetMessage from '../../Hooks/useGetMessage';
import { useDispatch, useSelector } from 'react-redux';

import Messages from './Messages';
import useListenMessage from '../../Hooks/useListenMessage';
import MessageInput from './MessageInput';
import conversationSlice from '../../Context/Slices/ConversationSlice';
import { setTrigger } from '../../Context/Slices/ConversationSlice';

function MessageBox() {

    
    
    useListenMessage();
    // const [refreshTrigger, setRefreshTrigger] = useState(false);
    const { loading: messageLoading, data: messageData } = useGetMessage();

    // const messageData = useSelector((state)=>state.conversations.messages);
    const dispatch = useDispatch();
    
    
    const changeRefreshTrigger = () => {
        dispatch(setTrigger());
    }


    return (
        <>
            <div className={`col-md-6 col-lg-7 col-xl-8 `}>
                <div className={`pt-3 pe-3 ${classes.chatArea}`} id='sctp'>
                    <div className={`${classes.chatItem} d-flex`}>
                        { messageData == undefined ? <p>No Message Yet</p> : messageData.map((item) => (
                            <div key={item._id} style={{ width: "100%" }} >
                                <Messages chat={item.message} senderId={item.senderId} receiverId={item.receiverId} />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <MessageInput setRefreshTrigger={changeRefreshTrigger} />
                    
                </div>
                
            </div>

        </>
    )
}

export default MessageBox
