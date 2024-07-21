import React, { useState, useEffect } from 'react';
import ChatArea from '../Components/Chat/ChatArea.jsx';
import ChatList from '../Components/ChatList/ChatList.jsx';
import { useSelector } from 'react-redux';

function HomePage() {
  const isSelected = useSelector((state) => state.conversations.selectedConversation);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define a breakpoint for "small screen"
  const isSmallScreen = windowWidth < 768; // Example breakpoint for small screens

  return (
    <>
      <div className="container-fluid" style={{ position: "fixed" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {isSmallScreen ? ( 
                isSelected ? <ChatArea /> : <ChatList /> ) :
                (
                  <>
                    <ChatList />
                    <ChatArea />
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;