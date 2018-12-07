import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import Success from '../../../../components/Success'
import Error from '../../../../components/Error'
import AditionalInfo from '../../../../components/AditionalInfo'
import {
  fetchAsignaturas,
  fetchGrupos,
  fetchEvent,
  updateEvent,
  fetchAttendats,
} from '../../../../actions/event'

class EventEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedGroups: [],
    }

    this.asignatura = React.createRef()
    this.encargado = React.createRef()
    this.fecha = React.createRef()
    this.aforo = React.createRef()

    this.addGroup = this.addGroup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { fetchAsignaturas, fetchGrupos, fetchAttendats } = this.props
    fetchAsignaturas()
    fetchGrupos()
    fetchAttendats()
    this.getEventValues()
  }

  getEventValues() {
    const { match, fetchEvent } = this.props
    const { nombre } = match.params

    fetchEvent({ nombre })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { match, location, updateEvent } = this.props
    const { selectedGroups: grupos } = this.state
    const fecha = this.fecha.current.value
    const aforo = this.aforo.current.value
    const asignatura = this.asignatura.current.value
    const encargado = this.encargado.current.value

    const { nombre } = match.params

    const { schedule } = location.state
    const { nombre: programacionNombre } = schedule

    const data = {
      params: {
        nombre,
      },
      data: {
        fecha,
        aforo,
        asignatura,
        grupos,
        encargado,
        programacionNombre,
      },
    }

    updateEvent(data)
  }

  addGroup(e) {
    const { name } = e.target
    let { selectedGroups } = this.state

    if (e.target.checked) {
      selectedGroups = selectedGroups.concat(name)
    } else {
      selectedGroups = selectedGroups.filter(i => i !== name)
    }

    this.setState({
      selectedGroups,
    })
  }

  groupExist(group) {
    const { events } = this.props
    const { grupos } = events
    if (grupos) {
      return grupos.includes(group)
    }
    return false
  }

  render() {
    const { asignaturas, grupos, profesores, location } = this.props
    const titles = ['tipo', 'fecha Inicio', 'fecha Fin']
    const { schedule } = location.state

    this.renderEventValues()
    return (
      <Fragment>
        <h2>Gestionar Evento</h2>

        <AditionalInfo data={schedule} titles={titles} />

        <div className="form--container">
          <h3 className="form--title">Crear Evento</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="asignatura" className="required label">
              Asignatura:
            </label>
            <select id="asignatura" ref={this.asignatura} className="input select--input">
              {asignaturas.map(asignatura => (
                <option key={asignatura.nombre}>{asignatura.nombre}</option>
              ))}
            </select>

            <label htmlFor="encargado" className="required label">
              Encargado:
            </label>
            <select id="encargado" className="input select--input" ref={this.encargado}>
              {profesores.map(encargado => (
                <option key={encargado._id}>{encargado.nombreCompleto}</option>
              ))}
            </select>

            <label htmlFor="aforo" className="required label">
              Aforo:
            </label>
            <input type="number" id="aforo" className="input" ref={this.aforo} required />

            <label htmlFor="fecha" className="required label">
              Fecha / Hora:
            </label>
            <input type="datetime-local" id="fecha" className="input" ref={this.fecha} required />

            <label htmlFor="grupos" className="required label">
              Grupos:
            </label>
            {grupos.map(grupo => (
              <label key={grupo.nombre} className="checkbox">
                <input
                  type="checkbox"
                  name={grupo.nombre}
                  onChange={this.addGroup}
                  checked={this.groupExist(grupo.nombre)}
                />
                {grupo.nombre}
              </label>
            ))}

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
    }
    if (successMessage) {
      return <Success description={successMessage} />
    }
  }

  renderEventValues() {
    const { events } = this.props
    const { fecha, aforo, asignatura, encargado } = events

    if (fecha) {
      this.fecha.current.value = moment(fecha).format('YYYY-MM-DD[T]hh:mm')
    }

    if (aforo) {
      this.aforo.current.value = aforo
    }

    if (asignatura) {
      this.asignatura.current.value = asignatura
    }

    if (encargado) {
      this.encargado.current.value = encargado
    }
  }
}

EventEditForm.propTypes = {
  fetchAsignaturas: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  fetchGrupos: PropTypes.func.isRequired,
  fetchAttendats: PropTypes.func.isRequired,
  asignaturas: PropTypes.array.isRequired,
  profesores: PropTypes.array.isRequired,
  events: PropTypes.any.isRequired,
  grupos: PropTypes.any.isRequired,
  errorMessage: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
  fetchEvent: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const { errorMessage, successMessage, asignaturas, grupos, events, profesores } = state.event

  return {
    errorMessage,
    successMessage,
    asignaturas,
    grupos,
    events,
    profesores,
  }
}

export default connect(
  mapStateToProps,
  { fetchAsignaturas, fetchGrupos, fetchEvent, updateEvent, fetchAttendats },
)(EventEditForm)
