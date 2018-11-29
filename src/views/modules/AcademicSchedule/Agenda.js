import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
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
      titles: ['nombre', 'fecha Inicio', 'fecha Fin'],
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
      const calendarioId = this.state.calendar._id
      const programacionId = id

      axios
        .delete(`${API_URL}/programaciones`, {
          params: {
            calendarioId,
            programacionId,
          },
        })
        .then(res => {
          const { data } = res
          this.setState({
            schedules: data,
          })
        })
    }
  }

  render() {
    const { calendar, titles, schedules } = this.state
    return (
      <Fragment>
        <h2>Realizar programación</h2>

        <AditionalInfo data={calendar} titles={titles} />

        <div className="module--container">
          <h3>Programaciones</h3>
          {schedules.length > 0 ? (
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>NOMBRE</th>
                  <th>TIPO</th>
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
            to={{
              pathname: '/calendarioAcademico/realizarProgramacion/create',
              state: { calendar },
            }}
            className="reset--link button"
          >
            + Programación
          </Link>
        </div>
      </Fragment>
    )
  }

  renderEvents() {
    return this.state.schedules.map(schedule => (
      <tr key={schedule._id}>
        <td>{schedule.nombre}</td>
        <td>{schedule.tipo}</td>
        <td>
          {moment(schedule.fechaInicio)
            .utc()
            .format('l')}
        </td>
        <td>
          {moment(schedule.fechaFin)
            .utc()
            .format('l')}
        </td>
        <td>
          <Options
            handleDelete={() => this.handleDelete(schedule._id)}
            urls={this.handleUrls(schedule.nombre)}
          />
        </td>
      </tr>
    ))
  }
}

export default Agenda
