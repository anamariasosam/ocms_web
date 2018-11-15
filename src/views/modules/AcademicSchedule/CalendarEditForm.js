import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Success from '../../../components/Success'
import Error from '../../../components/Error'
import PACKAGE from '../../../../package.json'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]
class CalendarEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      success: false,
      message: 'Editado con éxito',
      saved: false,
    }

    this.fechaInicio = React.createRef()
    this.fechaFin = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getCalendarValues()
  }

  getCalendarValues() {
    const calendarioId = this.props.match.params.id
    axios
      .get(`${API_URL}/calendarios`, {
        params: {
          calendarioId,
        },
      })
      .then(res => {
        const { data } = res
        this.fechaInicio.current.value = data.fechaInicio.split('T')[0]
        this.fechaFin.current.value = data.fechaFin.split('T')[0]
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    const calendarioId = this.props.match.params.id
    const fechaInicio = this.fechaInicio.current.value
    const fechaFin = this.fechaFin.current.value

    this.setState({
      success: true,
    })

    axios
      .put(`${API_URL}/calendarios`, {
        params: {
          calendarioId,
        },
        data: {
          fechaInicio,
          fechaFin,
        },
      })
      .then(res => {
        if (res.status === 200) {
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
            saved: true,
          })
        }, 1000)
      },
    )
  }

  render() {
    const { error, success, message, saved } = this.state

    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>

        <div className="form--container">
          <h3 className="form--title">Editar Calendario</h3>
          <form onSubmit={this.handleSubmit}>
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
          {saved && <Redirect to="/calendarioAcademico/gestionarCalendario" />}
        </div>
      </Fragment>
    )
  }
}

export default CalendarEditForm
