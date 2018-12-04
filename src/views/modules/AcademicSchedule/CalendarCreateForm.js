import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Success from '../../../components/Success'
import Error from '../../../components/Error'
import { createCalendar } from '../../../actions/calendar'

class CalendarCreateForm extends Component {
  constructor(props) {
    super(props)

    this.fechaInicio = React.createRef()
    this.fechaFin = React.createRef()
    this.semestre = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const fechaInicio = this.fechaInicio.current.value
    const fechaFin = this.fechaFin.current.value
    const semestre = this.semestre.current.value

    const data = {
      fechaInicio,
      fechaFin,
      semestre,
    }

    this.props.createCalendar(data)
  }

  render() {
    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>

        <div className="form--container">
          <h3 className="form--title">Crear Calendario</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="semestre" className="required label">
              Semestre:
            </label>
            <input
              type="text"
              id="semestre"
              className="input"
              ref={this.semestre}
              required
              placeholder="Ejemplo: 2019-1"
            />

            <label htmlFor="fechaInicio" className="required label">
              Fecha Inicio:
            </label>
            <input type="date" id="fechaInicio" className="input" ref={this.fechaInicio} required />

            <label htmlFor="fechaFin" className="required label">
              Fecha Fin:
            </label>
            <input type="date" id="fechaFin" className="input" ref={this.fechaFin} required />

            <div className="form--controls">
              <input type="submit" value="Guardar" className="reset--button button" />
            </div>
          </form>

          {this.renderAlert()}
        </div>
      </Fragment>
    )
  }

  renderAlert() {
    const { errorMessage, successMessage } = this.props

    if (errorMessage) {
      return <Error description={errorMessage} />
    } else if (successMessage) {
      return <Success description={successMessage} />
    }
  }
}

function mapStateToProps(state) {
  const { errorMessage, successMessage } = state.calendar

  return {
    errorMessage,
    successMessage,
  }
}

export default connect(
  mapStateToProps,
  { createCalendar },
)(CalendarCreateForm)
