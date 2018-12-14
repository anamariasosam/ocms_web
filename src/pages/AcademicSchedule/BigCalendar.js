import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import cookie from 'react-cookies'
import { fetchEvents } from '../../actions/student'
import { fetchEvent } from '../../actions/event'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = Calendar.momentLocalizer(moment)

class BigCalendar extends Component {
  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    const { fetchEvents, fetchEvent, programacionNombre } = this.props

    const { rol, _id: usuario } = cookie.load('user') || ''
    const params = { semestre: '2018-2', usuario }

    switch (rol) {
      case 'Jefe de Programa':
        fetchEvent({ programacionNombre })
        break
      case 'Estudiante':
        fetchEvents(params)
        break
      default:
        return '/login'
    }
  }

  render() {
    return (
      <Fragment>
        <div className="module--container">{this.renderCalendar()}</div>
      </Fragment>
    )
  }

  renderCalendar() {
    const { events } = this.props

    if (events.length > 0) {
      const bigCalendarEvents = events.map(event => ({
        start: moment(event.fecha).toDate(),
        end: moment(event.fecha)
          .add(2, 'hours')
          .toDate(),
        title: event.grupos.map(g => g.asignatura.nombre).join(', '),
        category: event.programacion.tipo,
      }))

      return (
        <Calendar
          localizer={localizer}
          defaultView="month"
          views={['month', 'agenda', 'day']}
          events={bigCalendarEvents}
          style={{ height: '100vh' }}
          startAccessor="start"
          endAccessor="end"
          popup
          onSelectEvent={e => alert(`${e.category}: ${e.title}`)}
          eventPropGetter={event => ({
            className: 'event-block event--' + event.category.replace(/\s+/g, '-').toLowerCase(),
          })}
        />
      )
    }

    return (
      <div className="module--container center">
        <img src={require('../../images/loading.svg')} alt="loading" />
      </div>
    )
  }
}

BigCalendar.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
}

function getState(state) {
  const { rol } = cookie.load('user') || ''

  switch (rol) {
    case 'Jefe de Programa':
      return state.event
    case 'Estudiante':
      return state.student
    default:
      return {}
  }
}

function mapStateToProps(state) {
  const { events } = getState(state)

  return {
    events,
  }
}

export default connect(
  mapStateToProps,
  { fetchEvents, fetchEvent },
)(BigCalendar)
