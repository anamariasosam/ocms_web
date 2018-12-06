import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import Options from '../../../components/Options'
import AditionalInfo from '../../../components/AditionalInfo'
import { deleteAgenda, fetchAgenda } from '../../../actions/agenda'
import { fetchCalendars } from '../../../actions/calendar'

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
    const { semestre } = this.props.match.params
    this.props.fetchCalendars({ semestre })
    this.props.fetchAgenda({ semestre })
  }

  handleUrls(id) {
    return this.state.urls.map(url => url.concat(id))
  }

  handleDelete(id) {
    const confirmDelete = window.confirm('Estas seguro que deseas eliminar?')
    if (confirmDelete) {
      const calendarioId = this.props.calendars._id
      const programacionId = id

      const params = {
        calendarioId,
        programacionId,
      }

      this.props.deleteAgenda(params)
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
