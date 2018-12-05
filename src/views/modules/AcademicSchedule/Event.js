import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import Options from '../../../components/Options'
import AditionalInfo from '../../../components/AditionalInfo'
import { deleteEvent, fetchEvent } from '../../../actions/event'
import { fetchAgenda } from '../../../actions/agenda'

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titles: ['tipo', 'fecha Inicio', 'fecha Fin'],
      urls: ['/calendarioAcademico/ver/', '/calendarioAcademico/programarEvento/edit/'],
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    const { nombre } = this.props.match.params

    this.props.fetchAgenda({ nombre })
    this.props.fetchEvent({ programacionNombre: nombre })
  }

  handleUrls(id) {
    return this.state.urls.map((url, index) => {
      if (index === 0) {
        return url.concat(`${this.props.schedules.nombre}/${id}`)
      }
      return url.concat(id)
    })
  }

  handleDelete(id) {
    const confirmDelete = window.confirm('Estas seguro que deseas eliminar?')
    if (confirmDelete) {
      const programacionId = this.props.schedules._id
      const eventoAcademicoId = id

      this.props.deleteEvent({
        programacionId,
        eventoAcademicoId,
      })
    }
  }

  render() {
    const { schedules } = this.props

    return (
      <Fragment>
        <h2>Programar Evento</h2>

        <AditionalInfo data={schedules} titles={this.state.titles} />

        <div className="module--container">
          <h3>Eventos</h3>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>NOMBRE</th>
                <th>ASIGNATURA</th>
                <th>ENCARGADO</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>AFORO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>{this.renderEvents()}</tbody>
          </table>

          <Link
            to={{
              pathname: '/calendarioAcademico/programarEvento/create',
              state: { schedule: schedules },
            }}
            className="reset--link button"
          >
            + Evento
          </Link>
        </div>
      </Fragment>
    )
  }

  renderEvents() {
    const { events } = this.props
    if (events.length > 0) {
      return events.map(event => (
        <tr key={event._id}>
          <td>{event.nombre}</td>
          <td>{event.asignatura}</td>
          <td>{event.encargado}</td>
          <td>
            {moment(event.fecha)
              .utc()
              .format('l')}
          </td>
          <td>{moment(event.fecha).format('h:mm a')}</td>
          <td>{event.aforo}</td>
          <td>
            <Options
              handleDelete={() => this.handleDelete(event._id)}
              urls={this.handleUrls(event.nombre)}
              state={{ schedule: this.props.schedules, event }}
            />
          </td>
        </tr>
      ))
    }
  }
}

function mapStateToProps(state) {
  const { errorMessage, events } = state.event
  const { schedules } = state.agenda

  return {
    errorMessage,
    schedules,
    events,
  }
}

export default connect(
  mapStateToProps,
  { deleteEvent, fetchEvent, fetchAgenda },
)(Event)
