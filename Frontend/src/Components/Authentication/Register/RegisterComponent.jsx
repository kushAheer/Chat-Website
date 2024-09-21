import React, { useState } from 'react'
import classes from './RegisterComponent.module.css'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import hoverImage from '../Login/loginImage.png'
import { Form, Link } from 'react-router-dom'
import useSignUp from '../../../Hooks/useSignUp'


function RegisterComponent() {

    const {loading ,signUp} = useSignUp();

    const [signupData , setSignUp] = useState({
        fullName : '',
        Email : '',
        userName : '',
        Password : '',
    
    })
    const submitHandler = async (e)=>{
        e.preventDefault();
        const res = await signUp(signupData);
        
        

    }



    return (
        <>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 text-black pt-2">
                            <div className={`${classes.loginForm} pt-5`}>
                                <form className='pt-3' style={{ width: "60%" }} method='POST' onSubmit={submitHandler} >
                                    <div className='formTitle'>
                                        <h1>Register</h1>
                                    </div>
                                    <div className='formItem pt-5'>
                                        <div className="form-outline mb-4">
                                            <Input label='Full Name' type={'text'} val ={signupData.fullName} onChange={(e)=>{setSignUp({ ...signupData,fullName : e.target.value })}}/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <Input label='Email' type ={'email'} val ={signupData.Email} onChange={(e)=>{setSignUp({ ...signupData,Email : e.target.value,})}}/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <Input label='Username' type={'text'} val ={signupData.userName} onChange={(e)=>setSignUp({ ...signupData,userName : e.target.value })}/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <Input label={"Password"} type={'password'} val ={signupData.Password}onChange={(e)=>{setSignUp({ ...signupData, Password : e.target.value })}}/>
                                        </div>
                                        <Button p={"pt-3"} >Sign Up</Button>
                                    </div>
                                </form>
                                <div className='pt-5'>
                                    <p>Already Have Account ?<Link to={'/login'}>Log In</Link> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 px-0 d-none d-sm-none d-md-block pt-2 ">
                            <div className="container pt-2">

                                <img src={hoverImage} alt="Login image" className={`${classes.img}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterComponent
