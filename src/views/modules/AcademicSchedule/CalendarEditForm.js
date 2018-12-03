import React, { Component, Fragment } from 'react'
import axios from 'axios'
import moment from 'moment'
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
    }

    this.fechaInicio = React.createRef()
    this.fechaFin = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getCalendarValues()
  }

  getCalendarValues() {
    const semestre = this.props.match.params.semestre
    axios
      .get(`${API_URL}/calendarios`, {
        params: {
          semestre,
        },
      })
      .then(res => {
        const { data } = res
        this.fechaInicio.current.value = moment(data.fechaInicio)
          .utc()
          .format(moment.HTML5_FMT.DATE)
        this.fechaFin.current.value = moment(data.fechaFin)
          .utc()
          .format(moment.HTML5_FMT.DATE)
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    const semestre = this.props.match.params.semestre
    const fechaInicio = this.fechaInicio.current.value
    const fechaFin = this.fechaFin.current.value

    axios
      .put(`${API_URL}/calendarios`, {
        params: {
          semestre,
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
      .catch(error => {
        const message = error.response.statusText
        this.setState({
          error: true,
          message,
        })
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
        </div>
      </Fragment>
    )
  }
}

export default CalendarEditForm
