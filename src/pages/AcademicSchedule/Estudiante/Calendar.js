import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { fetchEvent } from '../../../actions/event'
import { fetchAgenda } from '../../../actions/agenda'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {
  componentDidMount() {
    this.props.fetchEvent()
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

      const { fecha } = bigCalendarEvents[0].start
      const currentDate = new Date(moment(fecha).format())

      return (
        <BigCalendar
          localizer={localizer}
          defaultView="month"
          events={bigCalendarEvents}
          style={{ height: '100vh' }}
          startAccessor="start"
          endAccessor="end"
          popup
          defaultDate={currentDate}
          views={['month', 'agenda']}
        />
      )
    }
  }
}

Calendar.propTypes = {
  location: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  fetchEvent: PropTypes.func.isRequired,
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
)(Calendar)
