import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Options from '../../../components/Options'
import AditionalInfo from '../../../components/AditionalInfo'
import PACKAGE from '../../../../package.json'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]

class Agenda extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calendar: {},
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
    const calendarioId = this.props.match.params.id

    axios
      .get(`${API_URL}/calendarios`, {
        params: {
          calendarioId,
        },
      })
      .then(res => {
        const { data } = res
        const calendar = data
        const calendarioId = calendar._id
        axios
          .get(`${API_URL}/programaciones`, {
            params: {
              calendarioId,
            },
          })
          .then(res => {
            const { data } = res
            this.setState({
              calendar,
              schedules: data,
            })
          })
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

  render() {
    return (
      <Fragment>
        <h2>Realizar programación</h2>

        <AditionalInfo data={this.state.calendar} titles={this.state.titles} />

        <div className="module--container">
          <h3>Programaciones</h3>
          {this.state.schedules.length > 0 ? (
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
          ) : (
            <div>
              <p>No hay programaciones todavía...</p>
              <br />
            </div>
          )}

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

  renderEvents() {
    return this.state.schedules.map(event => (
      <tr key={event._id}>
        <td>{event.nombre}</td>
        <td>{event.tipo}</td>
        <td>{event.fechaInicio.split('T')[0]}</td>
        <td>{event.fechaFin.split('T')[0]}</td>
        <td>
          <Options
            handleDelete={() => this.handleDelete(event.id)}
            urls={this.handleUrls(event.id)}
          />
        </td>
      </tr>
    ))
  }
}

export default Agenda
