import React from 'react'
import ChatArea from '../Components/Chat/ChatArea.jsx'
import ChatList from '../Components/ChatList/ChatList.jsx'

function HomePage() {
  return (
    <>
      <div className="container-fluid" style={{ position: "fixed" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
            <ChatList />
            <ChatArea />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
