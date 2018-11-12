import React, { Component, Fragment } from 'react'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import { events } from '../../../data/data'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = Calendar.momentLocalizer(moment)

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    this.getEvents()
  }

  getCurrentDate() {
    const event = events.filter(event => event.id === this.props.match.params.id)[0]

    return new Date(event.date)
  }

  getEvents() {
    const bigCalendarEvents = events.map(event => ({
      start: new Date(event.date),
      end: new Date(event.date),
      title: event.subject,
    }))

    this.setState({
      events: bigCalendarEvents,
    })
  }

  render() {
    return (
      <Fragment>
        <h2>Calendario</h2>

        <div className="module--container">
          <Calendar
            localizer={localizer}
            defaultDate={this.getCurrentDate()}
            defaultView="month"
            events={this.state.events}
            style={{ height: '100vh' }}
          />
        </div>
      </Fragment>
    )
  }
}

export default App
