import { createContext, useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";



const SocketContext = createContext();

export const useSocketContext = () => {

    return useContext(SocketContext);
}


export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);


    const auth = useSelector((state) => state.users.user);



    useEffect(() => {
        if (auth) {
            try {

                const socket = io("http://localhost:5000", {
                    query: {
                        userId: auth._id,
                    }
                });
                setSocket(socket);

                socket.on('onlineUser', (data) => { //getiiing online user from server
                    setOnlineUser(data);
                });
                
                return () => socket.close();

            } catch (err) {
                console.log(err);
            }


        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [auth]);

    return (
        <SocketContext.Provider value={{ socket, onlineUser }}>
            {children}
        </SocketContext.Provider>
    )
}