import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { signUpRequest } from '../utils/Post';

function useSignUp() {
  const [loading , setLoading] = useState(false);

  const signUp = async(data)=>{

    const validInput = validation(data);
    if(!validInput)return ;
    setLoading(true)
    try {
        const response = await signUpRequest(data);
        
        if(response.status === 200){
            toast.success(response.message);
        }else{
            toast.error(response.message)
        }
    } catch (error) {
        toast.error(error.message);
        
    }finally{
        setLoading(false);
    }


  }

  return {loading , signUp}

}

export default useSignUp

function validation(data){
    if(!data.fullName || !data.userName || !data.Password || !data.Email ){
        toast.error("All Fields Required")
        return false;
    }
    if(data.Password.length <= 6){
        toast.error("Password should be at least 6 characters long")
        return false;
    }
    if(!data.Email.includes("@") || !data.Email.includes(".")){
        toast.error("Invalid Email")
        return false;
    }
    if(data.userName > 30){
        toast.error("Username should be less than 30 characters")
        return false;
    }
    return true;
}