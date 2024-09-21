import React from 'react'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import classes from './LoginComponent.module.css'
import hoverImage from './loginImage.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import useLogin from '../../../Hooks/useLogin'

function LoginComponent() {
  const {loading , login} = useLogin();
  const [loginData, setLoginData] = useState({
    userName: '',
    Password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
   
    const res = await login(loginData);
    
  }


  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-black pt-2">
              <div className={`${classes.loginForm} pt-5`}>
                <form className='pt-5' style={{ width: "60%" }} onSubmit={submitHandler} >
                  <div className='formTitle'>
                    <h1>Hello,<br></br>Welcome Back</h1>
                  </div>
                  <div className='formItem pt-5'>
                    <div className="form-outline mb-4">
                      <Input label='Username' type={'text'} val={loginData.userName} onChange={(e) => setLoginData({ ...loginData, userName: e.target.value })} />
                    </div>
                    <div className="form-outline mb-4">
                      <Input label={"Password"} type={'password'} val={loginData.Password} onChange={(e) => setLoginData({ ...loginData, Password: e.target.value })} />
                    </div>
                    <Button p={"pt-3"} >{loading ? <>Submiting....</> : <>Login</>}</Button>
                  </div>
                </form>
                <div className='pt-5'>
                  <p>Do Not Have Account ? <Link to={'/signup'}>Sign Up</Link></p>
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

export default LoginComponent