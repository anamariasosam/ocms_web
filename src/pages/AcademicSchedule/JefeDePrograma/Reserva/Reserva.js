import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import Options from '../../../../components/Options'
import AditionalInfo from '../../../../components/AditionalInfo'
import { deleteReserva, fetchReserva } from '../../../../actions/booking'
import { fetchAgenda } from '../../../../actions/agenda'
import { fetchEvent } from '../../../../actions/event'

class Reserva extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getReservas()
  }

  getReservas() {
    const { match } = this.props
    const { nombre } = match.params

    this.handleReserva(nombre)
  }

  handleReserva(nombre) {
    const { fetchReserva } = this.props
    fetchReserva({ nombre })
  }

  handleUrls(id) {
    const urls = ['/calendarioAcademico/reserva/', '/calendarioAcademico/evento/edit/']
    return urls.map(url => url.concat(id))
  }

  handleDelete(id) {
    const confirmDelete = window.confirm('Estas seguro que deseas eliminar?')
    if (confirmDelete) {
      const { location, deleteReserva } = this.props
      const { nombre } = location.event
      const reservaId = id

      deleteReserva({
        reservaId,
        nombre,
      })
    }
  }

  render() {
    const { schedules } = this.props
    const titles = ['nombre', 'fecha', 'aforo']
    return (
      <Fragment>
        <h2>Programar Reserva</h2>

        {/* <AditionalInfo data={event} titles={titles} /> */}

        <div className="module--container">
          <h3>Reservas</h3>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>FECHA INICIO</th>
                <th>FECHA FIN</th>
                <th>LUGAR</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>{this.renderReservas()}</tbody>
          </table>

          <Link
            to={{
              pathname: '/calendarioAcademico/reserva/create',
              // state: { event },
            }}
            className="reset--link button"
          >
            + Reserva
          </Link>
        </div>
      </Fragment>
    )
  }

  renderReservas() {
    const { reservas } = this.props

    if (reservas.length > 0) {
      return reservas.map(reserva => (
        <tr key={reserva._id}>
          <td>
            {moment(reserva.fechaInicio)
              .utc()
              .format('l')}
          </td>
          <td>
            {moment(reserva.fechaFin)
              .utc()
              .format('l')}
          </td>
          <td>{reserva.lugar.nombreCompleto}</td>
          <td>
            <Options
              handleDelete={() => this.handleDelete(reserva._id)}
              urls={this.handleUrls(reserva._id)}
              state={{ reserva }}
              showTitle={'Ver Calendario'}
            />
          </td>
        </tr>
      ))
    }
  }
}

Reserva.propTypes = {
  fetchReserva: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  deleteReserva: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { errorMessage, reservas } = state.booking
  return {
    errorMessage,
    reservas,
  }
}

export default connect(
  mapStateToProps,
  { deleteReserva, fetchReserva },
)(Reserva)
