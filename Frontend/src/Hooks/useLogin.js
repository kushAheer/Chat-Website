
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { loginRequest } from '../utils/Post'
import store from '../Context/store'
import UserSlice from '../Context/Slices/UserSlice'

function useLogin() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const login = async (data) => {

        setLoading(true)
        try {
            const response = await loginRequest(data);

            if (response.status === 200) {
                
                localStorage.setItem('userData', JSON.stringify(response.userData));
                localStorage.setItem('token', response.userData.token)
                dispatch(UserSlice.actions.logedIn(response.userData));
                toast.success(response.message);

            } else {
                toast.error(response.message);
            }

        } catch (error) {
            // Error Handling
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }
    return { loading, login };
}

export default useLogin
