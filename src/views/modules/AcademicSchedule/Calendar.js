import React, { Fragment, Component } from 'react'
import Options from '../../../components/Options'
import { calendars } from '../../../data/data'
import { Link } from 'react-router-dom'

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
          <h3>Calendarios</h3>
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

          <Link 
            to="/calendarioAcademico/gestionarCalendario/edit"
            className="reset--link button"
          >
            + Calendario
          </Link>
        </div>   
      </Fragment>
    )
  }
}

export default Calendar
