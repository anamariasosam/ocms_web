import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AditionalInfo from '../../../components/AditionalInfo'
import { attendants } from '../../../data/data'
import Success from '../../../components/Success'
import Error from '../../../components/Error'
import { fetchAsignaturas, fetchGrupos, createEvent } from '../../../actions/event'

class EventCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      schedule: this.props.location.state.schedule,
      titles: ['tipo', 'fecha Inicio', 'fecha Fin'],
      selectedGroups: [],
    }

    this.nombre = React.createRef()
    this.asignatura = React.createRef()
    this.encargado = React.createRef()
    this.fecha = React.createRef()
    this.aforo = React.createRef()

    this.addGroup = this.addGroup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchAsignaturas()
    this.props.fetchGrupos()
  }

  handleSubmit(e) {
    e.preventDefault()

    const nombre = this.nombre.current.value
    const fecha = this.fecha.current.value
    const aforo = this.aforo.current.value
    const asignatura = this.asignatura.current.value
    const grupos = this.state.selectedGroups
    const encargado = this.encargado.current.value
    const programacionId = this.state.schedule._id
    const programacionNombre = this.state.schedule.nombre

    const data = {
      nombre,
      fecha,
      aforo,
      asignatura,
      grupos,
      encargado,
      programacionId,
      programacionNombre,
    }

    this.props.createEvent(data)
  }

  addGroup(e) {
    const name = e.target.name
    let selectedGroups = this.state.selectedGroups

    if (e.target.checked) {
      selectedGroups = selectedGroups.concat(name)
    } else {
      selectedGroups = selectedGroups.filter(i => i !== name)
    }

    this.setState({
      selectedGroups,
    })
  }

  grupoExist(grupo) {
    return this.state.selectedGroups.includes(grupo)
  }

  render() {
    return (
      <Fragment>
        <h2>Programar Evento</h2>

        <AditionalInfo data={this.state.schedule} titles={this.state.titles} />

        <div className="form--container">
          <h3 className="form--title">Crear Evento</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="nombre" className="required label">
              Nombre:
            </label>
            <input type="text" id="nombre" className="input" ref={this.nombre} required />

            <label htmlFor="asignatura" className="required label">
              Asignatura:
            </label>
            <select id="asignatura" ref={this.asignatura} className="input select--input">
              {this.props.asignaturas.map(asignatura => (
                <option key={asignatura.nombre}>{asignatura.nombre}</option>
              ))}
            </select>

            <label htmlFor="encargado" className="required label">
              Encargado:
            </label>
            <select id="encargado" className="input select--input" ref={this.encargado}>
              {attendants.map(encargado => (
                <option key={encargado}>{encargado}</option>
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
            {this.props.grupos.map(grupo => (
              <label key={grupo.nombre} className="checkbox">
                <input
                  type="checkbox"
                  name={grupo.nombre}
                  onChange={this.addGroup}
                  checked={this.grupoExist(grupo.nombre)}
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
    } else if (successMessage) {
      return <Success description={successMessage} />
    }
  }
}

function mapStateToProps(state) {
  const { errorMessage, successMessage, asignaturas, grupos } = state.event

  return {
    errorMessage,
    successMessage,
    asignaturas,
    grupos,
  }
}

export default connect(
  mapStateToProps,
  { fetchAsignaturas, fetchGrupos, createEvent },
)(EventCreateForm)
