
import React, { useEffect } from 'react'
import { useState } from 'react';
import { getUserConversations } from '../utils/Get';
import { useDispatch } from 'react-redux';
import userSlice from '../Context/Slices/UserSlice';
import toast from 'react-hot-toast';
import { get } from 'mongoose';
function useGetConversationsList() {

  const [loading , setLoading] = useState(false);
  const [data , setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        // Fetching Conversations
        const response = await getUserConversations();
        if(response.message == "Unauthorized"){
          // Unauthorized
          toast.error("Unauthorized");
          dispatch(userSlice.actions.logedOut())
          localStorage.removeItem('userData');
          localStorage.removeItem('token');
  
        }
        if(response.status === 200){
          setData(response.userList);
          
        }
        else{
          // Error Handling
          toast.error(response.message);
        }
  
      } catch (error) {
        // Error Handling
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  
  return { loading, data };
}

export default useGetConversationsList;
