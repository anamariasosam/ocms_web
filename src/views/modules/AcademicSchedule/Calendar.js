import React, { Fragment, Component } from 'react'
import Options from '../../../components/Options'
import { calendars } from '../../../data/data'

class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calendars,
    }

    this.handleAction = this.handleAction.bind(this)
  }

  handleAction(e) {
    console.log(e)
  }

  renderCalendars() {
    return(
      this.state.calendars.map( calendar => (
        <tr key={calendar.id}>
          <td>{calendar.id}</td>
          <td>{calendar.startDate}</td>
          <td>{calendar.endDate}</td>
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
        <h2>Gestionar Calendario</h2>
  
        <div className="module--container">
          <h3>Programa Ingeniería de Sistemas</h3>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>ID</th>
                <th>FECHA INICIO</th>
                <th>FECHA FIN</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              { this.renderCalendars() }
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default Calendar
