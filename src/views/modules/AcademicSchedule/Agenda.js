import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import Options from '../../../components/Options'
import AditionalInfo from '../../../components/AditionalInfo'
import { calendars, schedules } from '../../../data/data'

class Agenda extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calendar: calendars[0],
      schedules: [],
      titles: ['Periodo', 'Fecha Inicio', 'Fecha Fin'],
      urls: [
        '/calendarioAcademico/programarEvento/show/',
        '/calendarioAcademico/realizarProgramacion/edit/',
      ],
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getSchedules()
  }

  getSchedules() {
    console.log(this.props.match.params.id)

    this.setState({
      schedules,
    })
  }

  handleUrls(id) {
    return this.state.urls.map(url => url.concat(id))
  }

  handleDelete(id) {
    const confirmDelete = window.confirm('Estas seguro que deseas eliminar?')
    if (confirmDelete) {
      const schedules = this.state.schedules.filter(s => s.id !== id)

      this.setState({
        schedules,
      })
    }
  }

  renderEvents() {
    return this.state.schedules.map(event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.name}</td>
        <td>{event.fechaInicio}</td>
        <td>{event.fechaFin}</td>
        <td>
          <Options
            handleDelete={() => this.handleDelete(event.id)}
            urls={this.handleUrls(event.id)}
          />
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <Fragment>
        <h2>Realizar programación</h2>

        <AditionalInfo data={this.state.calendar} titles={this.state.titles} />

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
            <tbody>{this.renderEvents()}</tbody>
          </table>

          <Link
            to="/calendarioAcademico/realizarProgramacion/create"
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
