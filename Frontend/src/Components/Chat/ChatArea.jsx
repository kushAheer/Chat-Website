import React, { useEffect } from 'react'
import useSendMessage from '../../Hooks/useSendMessage.js';
import classes from './ChatArea.module.css'
import { useState } from 'react';
import DefaultChatArea from '../UI/Default/DefaultChatArea.jsx';
import { useSelector } from 'react-redux';

import MessageBox from './MessageBox.jsx';

function ChatArea(props) {
    
    
    const selected = useSelector((state) => state.conversations.selectedConversation);

    return (
        <>
            {!selected && <DefaultChatArea />}
            {selected && <MessageBox isSmallScreen = {props.isSmallScreen}/>}
                
        </>
    )
}

export default ChatArea;
