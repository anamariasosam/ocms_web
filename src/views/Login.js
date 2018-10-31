import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className="login--container">
      <div className="login--image">
        <img 
          src={require("../images/userCard.png")} 
          alt="user card"
        />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
