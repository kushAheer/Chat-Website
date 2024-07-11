import React from 'react'
import classes from './ChatList.module.css'
import useGetConversationsList from '../../Hooks/useGetConversationsList';
function ChatList() {

    const { loading, data } = useGetConversationsList();
    console.log(data);
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
                            <li class="dropdown">
                                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hi , User
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li><a class="dropdown-item" href="#">Log Out</a></li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`col-md-12 pt-3 mb-0 ${classes.chatList}`}>
                    <div className="p-2 border-bottom">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Marie Horwitz</p>
                                    <p className="small text-muted">Hello, Are you there?</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">3</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                    <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Ben Smith</p>
                                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatList
