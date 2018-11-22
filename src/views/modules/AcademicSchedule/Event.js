import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Options from '../../../components/Options'
import AditionalInfo from '../../../components/AditionalInfo'
import PACKAGE from '../../../../package.json'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      schedule: {},
      titles: ['tipo', 'fecha Inicio', 'fecha Fin'],
      urls: ['/calendarioAcademico/ver/', '/calendarioAcademico/programarEvento/edit/'],
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    const programacionId = this.props.match.params.id

    axios
      .get(`${API_URL}/programaciones`, {
        params: {
          programacionId,
        },
      })
      .then(res => {
        const { data } = res
        const programacion = data
        const programacionId = programacion._id

        axios
          .get(`${API_URL}/eventosAcademicos`, {
            params: {
              programacionId,
            },
          })
          .then(res => {
            const { data } = res
            this.setState({
              events: data,
              schedule: programacion,
            })
          })
      })
  }

  handleUrls(id) {
    return this.state.urls.map((url, index) => {
      if (index === 0) {
        return url.concat(`${this.state.schedule.nombre}/${id}`)
      }
      return url.concat(id)
    })
  }

  handleDelete(id) {
    const confirmDelete = window.confirm('Estas seguro que deseas eliminar?')
    if (confirmDelete) {
      const programacionId = this.state.schedule._id
      const eventoAcademicoId = id

      axios
        .delete(`${API_URL}/eventosAcademicos`, {
          params: {
            programacionId,
            eventoAcademicoId,
          },
        })
        .then(res => {
          const { data } = res
          this.setState({
            events: data,
          })
        })
    }
  }

  renderEvents() {
    return this.state.events.map(event => (
      <tr key={event._id}>
        <td>{event.nombre}</td>
        <td>{event.asignatura}</td>
        <td>{event.encargado}</td>
        <td>{event.fecha.split('T')[0]}</td>
        <td>{event.fecha.split('T')[1].split('.')[0]}</td>
        <td>{event.aforo}</td>
        <td>
          <Options
            handleDelete={() => this.handleDelete(event._id)}
            urls={this.handleUrls(event.nombre)}
          />
        </td>
      </tr>
    ))
  }

  render() {
    const { schedule } = this.state
    return (
      <Fragment>
        <h2>Programar Evento</h2>

        <AditionalInfo data={schedule} titles={this.state.titles} />

        <div className="module--container">
          <h3>Eventos</h3>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>NOMBRE</th>
                <th>ASIGNATURA</th>
                <th>ENCARGADO</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>AFORO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>{this.renderEvents()}</tbody>
          </table>

          <Link
            to={{
              pathname: '/calendarioAcademico/programarEvento/create',
              state: { schedule },
            }}
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
