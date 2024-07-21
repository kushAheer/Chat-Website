
import conversationSlice from "./Slices/ConversationSlice";

import UserSlice from "./Slices/UserSlice";
import { configureStore } from "@reduxjs/toolkit";
const store  = configureStore({
    reducer : {
        
        users : UserSlice.reducer,
        conversations : conversationSlice.reducer,
        
    }
});


export default store;