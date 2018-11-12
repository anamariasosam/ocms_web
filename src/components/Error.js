import React from 'react'

const Error = ({ description }) => (
  <div className="alert--container alert--danger">
    <div>
      <img src={require('../images/error.png')} alt="error icon" className="alert--icon" />
    </div>
    <p>{description}</p>
  </div>
)

export default Error
