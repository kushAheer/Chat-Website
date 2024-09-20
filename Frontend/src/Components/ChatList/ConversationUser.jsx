import React from 'react'
import classes from './ChatList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import conversationSlice from '../../Context/Slices/ConversationSlice';
import { useSocketContext } from '../../Context/useContext/SocketContext';

function ConversationUser(props) {

    const disptach = useDispatch();
    const isActive = useSelector((state)=>state.conversations.selectedConversation) === props._id || false;
    // const conversationsId = useSelector((state)=>state.conversations.selectedConversation);
    const {onlineUser} = useSocketContext();
    
    
    const isOnline = onlineUser.includes(props._id);

    const selectedHandler = (_id)=>{

        disptach(conversationSlice.actions.setSelectedConversation(_id));
        
    }

    return (
        <>

            <div className={`p-2 border-bottom ${classes.activeChat}  ${isActive ? classes.bg : ""}`} key={props._id} onClick={()=>selectedHandler(props._id)} >
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar" className="d-flex align-self-center me-3" width="60" />
                            {/* <span className="badge bg-success badge-dot"></span> */}
                        </div>
                        <div className="pt-1">
                            <p className="fw-bold mb-0">{props.userName}</p>
                            {/* <p className="small text-muted">Hello, Are you there?</p> */}
                        </div>
                    </div>
                    <div className="pt-1">
                        <p className="small text-muted mb-1">{isOnline ? "Online" : "Not Online"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConversationUser
