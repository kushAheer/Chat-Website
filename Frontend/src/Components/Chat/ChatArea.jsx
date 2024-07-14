import React from 'react'
import useSendMessage from '../../Hooks/useSendMessage.js';
import classes from './ChatArea.module.css'
import { useState } from 'react';
import DefaultChatArea from '../UI/Default/DefaultChatArea.jsx';
import { useSelector } from 'react-redux';
import MessageBox from './messageBox.jsx';

function ChatArea() {
    const [message , setMessage] = useState("");
    const selected = useSelector((state) => state.conversations.selectedConversation);
    const { loading, sendMessage } = useSendMessage();

    const sendMessageHandler = async(e) => {
        e.preventDefault();
        console.log("Message Sent");
        await sendMessage(message);

    }


    return (
        <>

            {/* {!selected && <DefaultChatArea />}         */}
            {!selected &&
                <div className={`col-md-6 col-lg-7 col-xl-8 `}><div className={`pt-3 pe-3 ${classes.chatArea}`}>
                    <div className={`${classes.chatItem} d-flex`}>
                        <div className="d-flex flex-row justify-content-start">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 1" />
                            <div>
                                <p className="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">Lorem ipsum
                                    dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua.</p>
                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                            <div>
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minim veniam,
                                    quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar 1" />
                        </div>
                    </div>
                </div>
                    <form className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2" onSubmit={sendMessageHandler}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 3" />
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                            placeholder="Type message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                            <button className="btn btn-primary ms-1">Send</button>
                    </form>
                </div>}


            {/* <div className={`col-md-6 col-lg-7 col-xl-8 `}>
                <div className={`pt-3 pe-3 ${classes.chatArea}`}>
                    <div className="d-flex flex-row justify-content-start">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 1" />
                        <div>
                            <p className="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">Lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore
                                magna aliqua.</p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                        <div>
                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minim veniam,
                                quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar 1" />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 1" />
                        <div>
                            <p className="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">Duis aute
                                irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                        <div>
                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar 1" />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 1" />
                        <div>
                            <p className="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">Sed ut
                                perspiciatis
                                unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                rem
                                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta
                                sunt explicabo.</p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                        <div>
                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Nemo enim ipsam
                                voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                qui
                                ratione voluptatem sequi nesciunt.</p>
                            <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar 1" />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 1" />
                        <div>
                            <p className="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">Neque porro
                                quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                numquam
                                eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                        <div>
                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minima veniam,
                                quis
                                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                commodi
                                consequatur?</p>
                            <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar 1" />
                    </div>

                </div>

                <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 3" />
                    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                        placeholder="Type message" />

                </div>

            </div> */}
        </>
    )
}

export default ChatArea;
