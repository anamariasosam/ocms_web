import React, { Component, Fragment } from 'react'
import Success from '../../../components/Success'
import Error from '../../../components/Error'

class CalendarCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      success: false,
      message: 'Creado con éxito',
    }

    this.fechaInicio = React.createRef()
    this.fechaFin = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.fechaInicio.current.value)
    console.log(this.fechaFin.current.value)

    this.fechaInicio.current.value = ''
    this.fechaFin.current.value = ''

    this.temporalyShowAlert()
  }

  temporalyShowAlert() {
    this.setState(
      {
        success: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            success: false,
          })
        }, 2000)
      },
    )
  }

  render() {
    const { error, success, message } = this.state
    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>

        <div className="form--container">
          <h3 className="form--title">Crear Calendario</h3>
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

          {error && <Error description={message} />}
          {success && <Success description={message} />}
        </div>
      </Fragment>
    )
  }
}

export default CalendarCreateForm
