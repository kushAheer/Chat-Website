import { set } from 'mongoose';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import conversationSlice from '../Context/Slices/ConversationSlice';


function useSendMessage() {

    const [loading, setLoading] = useState(false);
    const id = useSelector((state) => state.conversations.selectedConversation);
    const dispatch = useDispatch();

    const sendMessage = async (data) => {
    // Implement your logic here
        setLoading(true);
        try{
            const response = await sendMessageRequest(data,id);
            if(response.status === 200){
                dispatch(conversationSlice.actions.setConversations(response.message));
            }else{
                toast.error(response.message);
            }
        }catch{
            toast.error(response.message);

        }finally{
            setLoading(false);
        }


    }
    return { loading, sendMessage };
}

export default useSendMessage