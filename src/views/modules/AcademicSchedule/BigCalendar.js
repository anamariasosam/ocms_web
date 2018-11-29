import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import PACKAGE from '../../../../package.json'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]
const localizer = Calendar.momentLocalizer(moment)

class BigCalendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      currentDate: '',
    }
  }

  componentDidMount() {
    this.getCurrentDate()
    this.getEvents()
  }

  getCurrentDate() {
    const { eventoNombre } = this.props.match.params

    axios
      .get(`${API_URL}/eventosAcademicos`, {
        params: {
          nombre: eventoNombre,
        },
      })
      .then(res => {
        const { data } = res

        this.setState({
          currentDate: new Date(data.fecha),
        })
      })
  }

  getEvents() {
    const { programacionNombre } = this.props.match.params

    axios
      .get(`${API_URL}/programaciones`, {
        params: {
          nombre: programacionNombre,
        },
      })
      .then(res => {
        const { data } = res
        const programacionId = data._id

        axios
          .get(`${API_URL}/eventosAcademicos`, {
            params: {
              programacionId,
            },
          })
          .then(res => {
            const { data } = res

            const bigCalendarEvents = data.map(event => ({
              start: new Date(event.fecha.split('.')[0]),
              end: moment(event.fecha.split('.')[0]).add(2, 'hours'),
              title: event.asignatura,
            }))

            this.setState({
              events: bigCalendarEvents,
            })
          })
      })
  }

  render() {
    return (
      <Fragment>
        <h2>Calendario</h2>

        <div className="module--container">
          {this.state.currentDate && (
            <Calendar
              localizer={localizer}
              defaultDate={this.state.currentDate}
              defaultView="month"
              events={this.state.events}
              style={{ height: '100vh' }}
              startAccessor="start"
              endAccessor="end"
            />
          )}
        </div>
      </Fragment>
    )
  }
}

export default BigCalendar
