import React from 'react'
import PasswordForm from '../components/PasswordForm'

const RecoverPassword = () => {
  return (
    <div className="password--container">
      <div className="password--image">
        <img 
          src={require("../images/password.png")} 
          alt="user card"
        />
      </div>
      <PasswordForm />
    </div>
  )
}

export default RecoverPassword
