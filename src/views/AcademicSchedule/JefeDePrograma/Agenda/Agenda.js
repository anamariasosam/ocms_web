import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import Options from '../../../../components/Options'
import AditionalInfo from '../../../../components/AditionalInfo'
import { deleteAgenda, fetchAgenda } from '../../../../actions/agenda'
import { fetchCalendars } from '../../../../actions/calendar'

class Agenda extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titles: ['semestre', 'fecha Inicio', 'fecha Fin'],
      urls: [
        '/calendarioAcademico/programarEvento/show/',
        '/calendarioAcademico/realizarProgramacion/edit/',
      ],
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    const { match, fetchCalendars, fetchAgenda } = this.props
    const { semestre } = match.params
    fetchCalendars({ semestre })
    fetchAgenda({ semestre })
  }

  handleUrls(id) {
    return this.state.urls.map(url => url.concat(id))
  }

  handleDelete(id) {
    const confirmDelete = window.confirm('Estas seguro que deseas eliminar?')
    if (confirmDelete) {
      const { calendars, deleteAgenda } = this.props
      const calendarioId = calendars._id
      const programacionId = id

      const params = {
        calendarioId,
        programacionId,
      }

      deleteAgenda(params)
    }
  }

  render() {
    const { titles } = this.state
    const { schedules, calendars } = this.props
    return (
      <Fragment>
        <h2>Realizar programación</h2>

        <AditionalInfo data={calendars} titles={titles} />

        <div className="module--container">
          <h3>Programaciones</h3>
          {schedules.length > 0 ? (
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>NOMBRE</th>
                  <th>TIPO</th>
                  <th>FECHA INICIO</th>
                  <th>FECHA FIN</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>{this.renderEvents()}</tbody>
            </table>
          ) : (
            <div>
              <p>No hay programaciones todavía...</p>
              <br />
            </div>
          )}

          <Link
            to={{
              pathname: '/calendarioAcademico/realizarProgramacion/create',
              state: { calendar: calendars },
            }}
            className="reset--link button"
          >
            + Programación
          </Link>
        </div>
      </Fragment>
    )
  }

  renderEvents() {
    const { schedules, calendars } = this.props
    return schedules.map(schedule => (
      <tr key={schedule._id}>
        <td>{schedule.nombre}</td>
        <td>{schedule.tipo}</td>
        <td>
          {moment(schedule.fechaInicio)
            .utc()
            .format('l')}
        </td>
        <td>
          {moment(schedule.fechaFin)
            .utc()
            .format('l')}
        </td>
        <td>
          <Options
            handleDelete={() => this.handleDelete(schedule._id)}
            urls={this.handleUrls(schedule.nombre)}
            state={{ calendar: calendars }}
          />
        </td>
      </tr>
    ))
  }
}

Agenda.propTypes = {
  match: PropTypes.object.isRequired,
  calendars: PropTypes.any.isRequired,
  fetchCalendars: PropTypes.func.isRequired,
  fetchAgenda: PropTypes.func.isRequired,
  deleteAgenda: PropTypes.func.isRequired,
  schedules: PropTypes.any.isRequired,
}

function mapStateToProps(state) {
  const { errorMessage, schedules } = state.agenda
  const { calendars } = state.calendar

  return {
    errorMessage,
    schedules,
    calendars,
  }
}

export default connect(
  mapStateToProps,
  { deleteAgenda, fetchAgenda, fetchCalendars },
)(Agenda)
