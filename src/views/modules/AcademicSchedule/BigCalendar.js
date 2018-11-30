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

        const currentDate = moment(data.fecha).format()
        this.setState({
          currentDate,
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
              start: moment(event.fecha).format('YYYY-MM-DD[T]hh:mm'),
              end: moment(event.fecha).add(2, 'hours'),
              title: event.asignatura,
            }))

            this.setState({
              events: bigCalendarEvents,
            })
          })
      })
  }

  render() {
    const { currentDate, events } = this.state
    const defaultDate = new Date(currentDate)

    return (
      <Fragment>
        <h2>Calendario</h2>

        <div className="module--container">
          {currentDate && (
            <Calendar
              localizer={localizer}
              defaultView="month"
              events={events}
              style={{ height: '100vh' }}
              startAccessor="start"
              endAccessor="end"
              popup={true}
              defaultDate={defaultDate}
              views={['month', 'agenda']}
            />
          )}
        </div>
      </Fragment>
    )
  }
}

export default BigCalendar
