import React, { Fragment, Component } from 'react'
import Options from '../../../components/Options'
import AditionalInfo from '../../../components/AditionalInfo'
import { calendars, schedules } from '../../../data/data'
import { Link } from 'react-router-dom'

class Agenda extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calendar: calendars[0],
      schedules,
      titles: ['Periodo', 'Fecha Inicio', 'Fecha Fin'],
      urls: [
        '/calendarioAcademico/programarEvento',
        '/calendarioAcademico/realizarProgramacion/edit'
      ]
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    console.log(e)
  }

  renderEvents() {
    return(
      this.state.schedules.map( event => (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.name}</td>
          <td>{event.startDate}</td>
          <td>{event.endDate}</td>
          <td>
            <Options handleDelete={this.handleDelete} urls={this.state.urls}/>
          </td>
        </tr>
      ))
    )
  }
  
  render() {
    return (
      <Fragment>
        <h2>Realizar programación</h2>

        <AditionalInfo data={this.state.calendar} titles={this.state.titles}/>
  
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

          <Link 
            to="/calendarioAcademico/realizarProgramacion/edit"
            className="reset--link button"
          >
            + Programación
          </Link>
        </div>
      </Fragment>
    )
  }
}

export default Agenda
