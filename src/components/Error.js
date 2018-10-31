import React from 'react'

const Error = ({ description }) => {
  return (
		<div className="error--container">
			<div>
				<img src={require("../images/error.png")} alt="error icon" className="error--icon"/>
			</div>
			<p className="error--description"><b>Error:</b> { description }</p>
    </div>
  )
}

export default Error
