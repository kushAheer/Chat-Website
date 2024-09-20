import React from 'react'
import { useState } from 'react'
import useSendMessage from '../../Hooks/useSendMessage';

function MessageInput(props) {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const sendMessageHandler = async (e) => {
        e.preventDefault();
        
        const data = { message: message };
        await sendMessage(data);
        setMessage("");
        props.setRefreshTrigger();
    }
    return (
        <>
            <form className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2 mb-3" onSubmit={sendMessageHandler}>
                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                    placeholder="Type message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className="btn btn-primary ms-1">Send</button>
            </form>
        </>
    )
}

export default MessageInput;
