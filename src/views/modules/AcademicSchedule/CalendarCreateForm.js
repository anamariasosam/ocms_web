import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Success from '../../../components/Success'
import Error from '../../../components/Error'
import PACKAGE from '../../../../package.json'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]

class CalendarCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      success: false,
      message: 'Creado con éxito',
    }

    this.fechaInicio = React.createRef()
    this.fechaFin = React.createRef()
    this.nombre = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const fechaInicio = this.fechaInicio.current.value
    const fechaFin = this.fechaFin.current.value
    const nombre = this.nombre.current.value

    axios
      .post(`${API_URL}/calendarios`, {
        data: {
          nombre,
          fechaInicio,
          fechaFin,
        },
      })
      .then(res => {
        if (res.status === 200) {
          this.nombre.current.value = ''
          this.fechaInicio.current.value = ''
          this.fechaFin.current.value = ''
          this.toggleAlert()
        }
      })
  }

  toggleAlert() {
    this.setState(
      {
        success: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            success: false,
          })
          this.props.history.goBack()
        }, 1000)
      },
    )
  }

  render() {
    const { error, success, message } = this.state
    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>

        <div className="form--container">
          <h3 className="form--title">Crear Calendario</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="nombre" className="required label">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              className="input"
              ref={this.nombre}
              required
              placeholder="Ejemplo: 2019-1"
            />

            <label htmlFor="fechaInicio" className="required label">
              Fecha Inicio:
            </label>
            <input type="date" id="fechaInicio" className="input" ref={this.fechaInicio} required />

            <label htmlFor="fechaFin" className="required label">
              Fecha Fin:
            </label>
            <input type="date" id="fechaFin" className="input" ref={this.fechaFin} required />

            <div className="form--controls">
              <input type="submit" value="Guardar" className="reset--button button" />
            </div>
          </form>

          {error && <Error description={message} />}
          {success && <Success description={message} />}
        </div>
      </Fragment>
    )
  }
}

export default CalendarCreateForm
