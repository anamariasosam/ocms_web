import React, { Fragment } from 'react'

const Options = ({ handleAction }) => {
  return (
		<Fragment>
			<button className="reset--button" onClick={() => handleAction('show')}>
				<img 
					src={require('../images/show.png')} 
					alt="show"
					className="action--image"
				/>
			</button>
			<button className="reset--button" onClick={() => handleAction('edit')}>
				<img 
					src={require('../images/edit.png')} 
					alt="edit"
					className="action--image"
				/>
			</button>
			<button className="reset--button" onClick={() => handleAction('delete')}>
				<img 
					src={require('../images/delete.png')} 
					alt="remove"
					className="action--image"
				/>
			</button>	
		</Fragment>
  )
}

export default Options
