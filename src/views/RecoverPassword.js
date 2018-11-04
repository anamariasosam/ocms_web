import React from 'react'
import PasswordForm from '../components/PasswordForm'
import MainLayout from '../layouts/MainLayout.js'

const RecoverPassword = () => {
  return (
    <MainLayout>
      <div className="password--container">
        <div className="password--image">
          <img 
          src={require("../images/password.png")} 
          alt="user card"
          />
        </div>
        <PasswordForm />
      </div>
    </MainLayout>
  )
}

export default RecoverPassword
