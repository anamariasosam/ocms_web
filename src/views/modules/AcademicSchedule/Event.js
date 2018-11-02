import React, { Fragment, Component } from 'react'
import Options from '../../../components/Options'
import CalendarInfo from '../../../components/CalendarInfo'
import { calendars, events } from '../../../data/data'

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calendar: calendars[0],
      events,
    }

    this.handleAction = this.handleAction.bind(this)
  }

  handleAction(e) {
    console.log(e)
  }

  renderEvents() {
    return(
      this.state.events.map( event => (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.name}</td>
          <td>{event.startDate}</td>
          <td>{event.endDate}</td>
          <td>
            <Options handleAction={this.handleAction}/>
          </td>
        </tr>
      ))
    )
  }
  
  render() {
    return (
      <Fragment>
        <h2>Realizar programación</h2>

        <CalendarInfo calendar={this.state.calendar}/>
  
        <div className="module--container">
          <h3>Programaciones</h3>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>FECHA INICIO</th>
                <th>FECHA FIN</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              { this.renderEvents() }
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default Event
