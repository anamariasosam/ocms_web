import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Success from '../../../components/Success'
import Error from '../../../components/Error'
import { updateAgenda, fetchAgenda, fetchEventTypes } from '../../../actions/agenda'

class AgendaEditForm extends Component {
  constructor(props) {
    super(props)

    this.fechaInicio = React.createRef()
    this.fechaFin = React.createRef()
    this.tipo = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { nombre } = this.props.match.params

    this.props.fetchEventTypes()
    this.props.fetchAgenda({ nombre })
  }

  handleSubmit(e) {
    e.preventDefault()
    const fechaInicio = this.fechaInicio.current.value
    const fechaFin = this.fechaFin.current.value
    const tipo = this.tipo.current.value
    const { nombre } = this.props.match.params
    const calendarioSemestre = this.props.location.state.calendar.semestre

    const data = {
      params: {
        nombre,
      },
      data: {
        tipo,
        fechaInicio,
        fechaFin,
        calendarioSemestre,
      },
    }

    this.props.updateAgenda(data)
  }

  render() {
    this.renderAgendaValues()
    return (
      <Fragment>
        <h2>Gestionar Programación</h2>

        <div className="form--container">
          <h3 className="form--title">Editar Programación</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="tipo" className="required label">
              Tipo de Evento:
            </label>
            <select id="tipo" ref={this.tipo} className="input select--input">
              {this.props.tipoProgramacion.map(tipo => (
                <option key={tipo._id}>{tipo.nombre}</option>
              ))}
            </select>
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

          {this.renderAlert()}
        </div>
      </Fragment>
    )
  }

  renderAlert() {
    const { errorMessage, successMessage } = this.props

    if (errorMessage) {
      return <Error description={errorMessage} />
    } else if (successMessage) {
      return <Success description={successMessage} />
    }
  }

  renderAgendaValues() {
    const { schedules } = this.props
    const { fechaInicio, fechaFin, tipo } = schedules

    if (fechaInicio) {
      this.fechaInicio.current.value = moment(fechaInicio)
        .utc()
        .format(moment.HTML5_FMT.DATE)
    }

    if (fechaFin) {
      this.fechaFin.current.value = moment(fechaFin)
        .utc()
        .format(moment.HTML5_FMT.DATE)
    }

    if (tipo) {
      this.tipo.current.value = tipo
    }
  }
}

function mapStateToProps(state) {
  const { errorMessage, successMessage, schedules, tipoProgramacion } = state.agenda

  return {
    errorMessage,
    successMessage,
    schedules,
    tipoProgramacion,
  }
}

export default connect(
  mapStateToProps,
  {
    updateAgenda,
    fetchAgenda,
    fetchEventTypes,
  },
)(AgendaEditForm)
