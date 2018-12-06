import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Options = ({ handleDelete, urls, state }) => {
  const editUrl = {
    pathname: urls[1],
    state,
  }

  const showUrl = {
    pathname: urls[0],
    state,
  }

  return (
    <Fragment>
      <Link className="reset--link" to={showUrl}>
        <img src={require('../images/show.png')} alt="show" className="action--image" />
      </Link>
      <Link className="reset--link" to={editUrl}>
        <img src={require('../images/edit.png')} alt="edit" className="action--image" />
      </Link>
      <button className="reset--button" onClick={handleDelete} type="button">
        <img src={require('../images/delete.png')} alt="remove" className="action--image" />
      </button>
    </Fragment>
  )
}

export default Options
