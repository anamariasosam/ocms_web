import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/auth'
import Error from '../Error'

const form = reduxForm({
  form: 'login',
})

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(formProps) {
    this.props.loginUser(formProps)
  }

  render() {
    const { errorMessage, handleSubmit } = this.props
    return (
      <div className="form--container">
        <h2 className="form--title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <label htmlFor="correo" className="required label">
            Correo Electrónico:
          </label>
          <Field name="correo" className="form-control" component="input" type="email" />

          <label htmlFor="password" className="required label">
            Clave:
          </label>
          <Field name="password" className="form-control" component="input" type="password" />

          <div className="form--controls">
            <Link to="/recuperarClave" className="form--link reset--link">
              Olvidaste tu clave?
            </Link>
            <input type="submit" value="Continuar" className="button" />
          </div>
        </form>

        {errorMessage && <Error description={errorMessage} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
  }
}

export default connect(
  mapStateToProps,
  { loginUser },
)(form(LoginForm))
