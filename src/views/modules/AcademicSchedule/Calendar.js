import React, { Fragment, Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Options from '../../../components/Options'
import PACKAGE from '../../../../package.json'

import { connect } from 'react-redux'
import { deleteCalendar } from '../../../actions/calendar'

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
      const params = {
        calendarioId,
      }

      this.props.deleteCalendar(params)
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
                <th>SEMESTRE</th>
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
        <td>{calendar.semestre}</td>
        <td>
          {moment(calendar.fechaInicio)
            .utc()
            .format('l')}
        </td>
        <td>
          {moment(calendar.fechaFin)
            .utc()
            .format('l')}
        </td>
        <td>
          <Options
            handleDelete={() => this.handleDelete(calendar._id)}
            urls={this.handleUrls(calendar.semestre)}
          />
        </td>
      </tr>
    ))
  }
}
function mapStateToProps(state) {
  const { errorMessage, calendars } = state.calendar

  return {
    errorMessage,
    calendars,
  }
}

export default connect(
  mapStateToProps,
  { deleteCalendar },
)(Calendar)
