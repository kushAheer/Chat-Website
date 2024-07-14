import React from 'react'
import classes from './ChatList.module.css'
import useGetConversationsList from '../../Hooks/useGetConversationsList';
import { useDispatch, useSelector } from 'react-redux';
import conversationSlice from '../../Context/Slices/ConversationSlice';
import ConversationUser from './ConversationUser';

function ChatList() {

    const disptach  = useDispatch();
    const { loading, data } = useGetConversationsList();

    

    if(loading){
        return <div>Loading...</div>
    }
    
    return (
        <>
            <div className={`col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 ${classes.rightBorder}`}>
                <div className='row'>
                    <div className='col-md-8 pt-3'>
                        <input type='search' className='form-control' placeholder='Search' />
                    </div>
                    <div className="col-md-4 pt-3">
                        <ul class="navbar-nav">
                            <li className="dropdown">
                                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hi , User
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`col-md-12 pt-3 mb-0 ${classes.chatList}`}>
                    {data.map((item) => (
                        <div key={item._id}>
                            <ConversationUser 
                         
                             _id={item._id}
                             userName={item.userName}
                                item={item}
                             />
                         </div>

                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default ChatList
