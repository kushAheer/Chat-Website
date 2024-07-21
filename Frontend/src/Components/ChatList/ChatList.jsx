import React from 'react'
import classes from './ChatList.module.css'
import useGetConversationsList from '../../Hooks/useGetConversationsList';
import { useDispatch, useSelector } from 'react-redux';
import conversationSlice from '../../Context/Slices/ConversationSlice';
import ConversationUser from './ConversationUser';
import { Link, redirect } from 'react-router-dom';
import toast from 'react-hot-toast';
import userSlice from '../../Context/Slices/UserSlice';

function ChatList() {


    const disptach = useDispatch();

    const [search, setSearch] = React.useState('');
    const { loading, data } = useGetConversationsList();

    const searchHandler = (e) => {
        e.preventDefault();

        const s = data.find((item) => item.userName.toLowerCase().includes(search.toLowerCase()));
        console.log(s);
        if (!s) {
            toast.error("No User Found");
            return;
        }

        disptach(conversationSlice.actions.setSelectedConversation(s._id));
        setSearch("");
    }
    
    if (loading) {
        return <div>Loading...</div>
    }
    const logOutHandler = async () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        const res = await fetch('http://localhost:5000/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
        console.log(res);
        disptach(userSlice.actions.logedOut());
        
    }
    return (
        <>
            <div className={`col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 ${classes.rightBorder}`}>
                <div className='row'>
                    <div className='col-md-8 pt-3'>
                        <div className="row">

                        <div className='col-md-8'>

                            <input type='search' className='form-control' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className='col-md-4'>

                            <button onClick={searchHandler}>Search</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 pt-3">
                        <ul className="navbar-nav">
                            <li className="dropdown">
                                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hi , User
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><Link className="dropdown-item" onClick={logOutHandler}>Log Out</Link></li>

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
