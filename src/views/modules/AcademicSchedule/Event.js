import React, { Fragment, Component } from 'react'
import Options from '../../../components/Options'
import AditionalInfo from '../../../components/AditionalInfo'
import { schedules, events } from '../../../data/data'
import { Link } from 'react-router-dom'

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events,
      schedule: schedules[0],
      titles: ['Periodo', 'Fecha Inicio', 'Fecha Fin', 'Nombre'],
      urls: [
        '/calendarioAcademico/programarEvento/edit',
        '/calendarioAcademico/programarEvento/edit'
      ]
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    var confirmDelete = window.confirm("Estas seguro que deseas eliminar?")
    if (confirmDelete) {
      const events = this.state.events.filter(e => e.id !== id)
      
      this.setState({
        events,
      })
    } 
  }

  renderEvents() {
    return(
      this.state.events.map( event => (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.name}</td>
          <td>{event.attendant}</td>
          <td>{event.date}</td>
          <td>{event.hour}</td>
          <td>{event.aforo}</td>
          <td>
            <Options handleDelete={() => this.handleDelete(event.id)} urls={this.state.urls}/>
          </td>
        </tr>
      ))
    )
  }
  
  render() {
    return (
      <Fragment>
        <h2>Programar Evento</h2>

        <AditionalInfo data={this.state.schedule} titles={this.state.titles}/>
  
        <div className="module--container">
          <h3>Eventos</h3>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>ENCARGADO</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>AFORO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              { this.renderEvents() }
            </tbody>
          </table>

          <Link 
            to="/calendarioAcademico/programarEvento/edit"
            className="reset--link button"
          >
            + Evento
          </Link>
        </div>
      </Fragment>
    )
  }
}

export default Event
