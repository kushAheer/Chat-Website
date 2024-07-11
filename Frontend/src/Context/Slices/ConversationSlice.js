import { createSlice } from '@reduxjs/toolkit';
const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        messages: [],
        selectedConversation: null,
    },
    reducers: {
        setConversations: (state, action) => {
            state.messages = action.payload;
        },
        setSelectedConversation: (state, action) => {
            state.selectedConversation = action.payload;
        },
    },
});

export default conversationSlice; 