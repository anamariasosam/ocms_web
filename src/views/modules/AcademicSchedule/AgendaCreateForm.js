import React, { Component, Fragment } from 'react'
import Success from '../../../components/Success'
import Error from '../../../components/Error'

class AgendaCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      success: false,
      message: 'Creado con éxito',
    }

    this.name = React.createRef()
    this.fechaInicio = React.createRef()
    this.fechaFin = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.name.current.value)
    console.log(this.fechaInicio.current.value)
    console.log(this.fechaFin.current.value)

    this.name.current.value = ''
    this.fechaInicio.current.value = ''
    this.fechaFin.current.value = ''

    this.showSuccessMessage()
  }

  showSuccessMessage() {
    this.setState({
      success: true,
    })
  }

  render() {
    return (
      <Fragment>
        <h2>Gestionar Programación</h2>

        <div className="form--container">
          <h3 className="form--title">Crear Programación</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name" className="required label">
              Nombre:
            </label>
            <input type="text" id="name" className="input" ref={this.name} required />

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

export default AgendaCreateForm
