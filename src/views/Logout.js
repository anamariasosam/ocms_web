import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser()
  }

  render() {
    return <div>Cerrando Sesión...</div>
  }
}

export default connect(
  null,
  actions,
)(Logout)
