import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginComponent from './Components/Authentication/Login/LoginComponent'
import RegisterComponent from './Components/Authentication/Register/RegisterComponent'
import ChatArea from './Components/Chat/ChatArea'
import HomePage from './Pages/HomePage'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'


function App() {
    const auth = useSelector((state)=>state.users.token);
    console.log(auth);
    const routes = createBrowserRouter([
      {path : '/', element: auth ?  <HomePage /> : <Navigate to={'/login'}/>},
      {path : '/login', element: auth ? <Navigate to={'/'}/> : <LoginPage />},
      {path : '/signup', element: auth? <Navigate to={'/'}/> : <SignUpPage /> },
    ]);


    return (
      <>
      <RouterProvider router={routes}/>
      
      <Toaster/>
      </>
      
    )
}

export default App
