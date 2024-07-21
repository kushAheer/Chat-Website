import React from 'react'
import classes from './DefaultChatArea.module.css'

function DefaultChatArea() {
  return (
    <>
        <div className={`col-md-6 col-lg-7 col-xl-8 `}>
            <div className={`pt-3 ${classes.chatArea}`}>
                <div className={`d-flex ${classes.centerStyle}`}>
                    <h1>Welcome {JSON.parse(localStorage.getItem('userData')).userName}</h1>
                    <h2>Select a Chat To Start Talking</h2>
                </div>
            </div>
        </div>

    </>
  )
}

export default DefaultChatArea
