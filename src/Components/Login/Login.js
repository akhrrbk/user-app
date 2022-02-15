import React from 'react'
import './styles.css'

const Login = () => {
  return (
    <div className='app__login'>
        <div className='app__login-left'>
            <div className='logo'>LOGO</div>
            <div className='signin'>SIGN IN</div>
        </div>
        <div className='app__login-right'>
            <div className='container'>
                <div className="container__logo">LOGO</div>
                <form action="POST" className='container__form'>
                    <div className="container__form-login">Login</div>
                    <div className="container__form-password">Login</div>
                    <button className="container__form-button">Click Me!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login