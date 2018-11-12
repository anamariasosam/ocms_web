import React, { Component, Fragment } from 'react'
import Success from '../../../components/Success'
import Error from '../../../components/Error'
import { calendars } from '../../../data/data'

class CalendarEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      success: false,
      message: 'Editado con éxito',
    }

    this.fechaInicio = React.createRef()
    this.fechaFin = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getCalendarValues()
  }

  getCalendarValues() {
    const calendar = calendars.filter(calendar => calendar.id === this.props.match.params.id)[0]

    this.fechaInicio.current.value = calendar.fechaInicio
    this.fechaFin.current.value = calendar.fechaFin
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.fechaInicio.current.value)
    console.log(this.fechaFin.current.value)

    this.setState({
      success: true,
    })
  }

  render() {
    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>

        <div className="form--container">
          <h3 className="form--title">Editar Calendario</h3>
          <form onSubmit={this.handleSubmit}>
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

          {this.state.error && <Error description={this.state.message} />}
          {this.state.success && <Success description={this.state.message} />}
        </div>
      </Fragment>
    )
  }
}

export default CalendarEditForm
