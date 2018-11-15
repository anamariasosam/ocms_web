import React, { Fragment, Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Options from '../../../components/Options'
import PACKAGE from '../../../../package.json'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]

class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calendars: [],
      urls: [
        '/calendarioAcademico/realizarProgramacion/show/',
        '/calendarioAcademico/gestionarCalendario/edit/',
      ],
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getCalendars()
  }

  getCalendars() {
    axios.get(`${API_URL}/calendarios/`).then(res => {
      const { data } = res

      this.setState({
        calendars: data,
      })
    })
  }

  handleUrls(id) {
    return this.state.urls.map(url => url.concat(id))
  }

  handleDelete(calendarioId) {
    const confirmDelete = window.confirm('Estas seguro que deseas eliminar?')
    if (confirmDelete) {
      axios({
        method: 'delete',
        url: `${API_URL}/calendarios`,
        params: {
          calendarioId,
        },
      }).then(res => {
        const { data } = res
        this.setState({
          calendars: data,
        })
      })
    }
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
            <tbody>{this.renderCalendars()}</tbody>
          </table>

          <Link to="/calendarioAcademico/gestionarCalendario/create" className="reset--link button">
            + Calendario
          </Link>
        </div>
      </Fragment>
    )
  }

  renderCalendars() {
    return this.state.calendars.map(calendar => (
      <tr key={calendar._id}>
        <td>{calendar.nombre}</td>
        <td>{calendar.fechaInicio.split('T')[0]}</td>
        <td>{calendar.fechaFin.split('T')[0]}</td>
        <td>
          <Options
            handleDelete={() => this.handleDelete(calendar._id)}
            urls={this.handleUrls(calendar.nombre)}
          />
        </td>
      </tr>
    ))
  }
}

export default Calendar
