import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Context/store.js'
import { SocketContextProvider } from './Context/useContext/SocketContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
    </Provider>
  </React.StrictMode>,
)
