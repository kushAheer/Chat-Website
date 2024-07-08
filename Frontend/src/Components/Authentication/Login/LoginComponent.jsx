import React from 'react'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import Spline from '../../UI/Spline/Spline'
import SplineUi from '../../UI/Spline/Spline'
import classes from './LoginComponent.module.css'
import hoverImage from './loginImage.png'

function LoginComponent() {
  return (
    <>
      <section class="vh-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 text-black pt-2">
              <div class={`${classes.loginForm} pt-5`}>
                <form className='pt-5' style={{ width: "60%" }}>
                  <div className='formTitle'>
                    <h1>Hello,<br></br>Welcome Back</h1>
                  </div>
                  <div className='formItem pt-5'>
                    <div class="form-outline mb-4">
                      <Input label='Username' />
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                      <Input label={"Password"} />
                    </div>
                    <Button p={"pt-3"} >Login</Button>
                  </div>
                </form>
                <div className='pt-5'>
                  <p>Do Not Have Account ? Sign Up</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 px-0 d-none d-sm-none d-md-block pt-2 ">
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