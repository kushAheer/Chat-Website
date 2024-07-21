
import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem('userData')) || {},
        token : localStorage.getItem('token') || undefined,
        status: 'invalid',
    },
    reducers: {
        logedIn: (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            state.status = 'valid';
        },
        logedOut: (state) => {
            state.user = {};
            state.token = undefined;
            state.status = 'invalid';
        },
    },
});

export default userSlice;