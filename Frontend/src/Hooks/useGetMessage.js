import React, { useEffect } from 'react'
import { useState } from 'react'
import { getMessageRequests } from '../utils/Get'
import { useDispatch ,useSelector } from 'react-redux';
import conversationSlice from '../Context/Slices/ConversationSlice';
import toast from 'react-hot-toast';
import { set } from 'mongoose';

function useGetMessage() {

    const [loading, setLoading] = useState(false);
    const [data , setData] = useState();
    
    const id = useSelector((state) => state.conversations.selectedConversation);

    const refetchTrigger = useSelector((state)=>state.conversations.getMessageTrigger);
    
    const dispatch = useDispatch();
    useEffect(()=>{
        const getMessage = async () => {
            
            setLoading(true);
            try {
                
                const response = await getMessageRequests(id);
                if (response.status === 200) {
                
                    dispatch(conversationSlice.actions.setConversations(response.data.messages));
                    setData(response.data.messages);
                    
                } else {
                    toast.error(response.message);
                }
    
            } catch (error) {
                
                toast.error(error.message);

            } finally {

                setLoading(false);
            }
        }
        if(id){

            getMessage();
        }
        
    },[id ,dispatch ,refetchTrigger ]);
    
    return { loading, data };
}

export default useGetMessage
