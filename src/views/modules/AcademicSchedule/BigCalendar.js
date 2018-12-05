import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import { fetchEvent } from '../../../actions/event'
import { fetchAgenda } from '../../../actions/agenda'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = Calendar.momentLocalizer(moment)

class BigCalendar extends Component {
  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    const { programacionNombre } = this.props.match.params

    this.props.fetchEvent({ programacionNombre })
  }

  render() {
    return (
      <Fragment>
        <h2>Calendario</h2>

        <div className="module--container">{this.renderCalendar()}</div>
      </Fragment>
    )
  }

  renderCalendar() {
    const { events } = this.props
    if (events.length > 0) {
      const bigCalendarEvents = events.map(event => ({
        start: moment(event.fecha).format('YYYY-MM-DD[T]hh:mm'),
        end: moment(event.fecha).add(2, 'hours'),
        title: event.asignatura,
      }))

      const { fecha } = this.props.location.state.event
      const currentDate = new Date(moment(fecha).format())

      return (
        <Calendar
          localizer={localizer}
          defaultView="month"
          events={bigCalendarEvents}
          style={{ height: '100vh' }}
          startAccessor="start"
          endAccessor="end"
          popup={true}
          defaultDate={currentDate}
          views={['month', 'agenda']}
        />
      )
    }
  }
}

function mapStateToProps(state) {
  const { events } = state.event
  const { schedules } = state.agenda

  return {
    schedules,
    events,
  }
}

export default connect(
  mapStateToProps,
  { fetchEvent, fetchAgenda },
)(BigCalendar)
