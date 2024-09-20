import React, { useEffect } from 'react'
import { useSocketContext } from '../Context/useContext/SocketContext'
import { useDispatch } from 'react-redux';
import conversationSlice from '../Context/Slices/ConversationSlice';
import { useSelector } from 'react-redux';
import useGetMessage from './useGetMessage';
import { setTrigger } from '../Context/Slices/ConversationSlice';

function useListenMessage() {

    const [refreshTrigger, setRefreshTrigger] = React.useState(false);   

    const {socket}  = useSocketContext();
    // const {loading , data : messageData} = useGetMessage(refreshTrigger);

    
    const dispatch = useDispatch();
    const message = useSelector((state)=>state.conversations.messages);

    useEffect(()=>{
        socket?.on("newMessage",(data)=>{
            dispatch(conversationSlice.actions.setConversations(data));
            
            dispatch(setTrigger());
            // setRefreshTrigger((prev) => !prev);
        });

        return ()=>{
            socket?.off("newMessage");
        }
    },[socket,conversationSlice.actions.addMessage,message , dispatch]);
}

export default useListenMessage
