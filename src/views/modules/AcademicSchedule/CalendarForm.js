import React, { Component, Fragment } from 'react'

class CalendarForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e)
  }
  
  render() {
    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>

        <div className="form--container">
          <h3 className="form--title">Crear Calendario</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="startDate" className="required label">Fecha Inicio:</label>
            <input type="date" id="startDate" className="input"/>
            <label htmlFor="endDate" className="required label">Fecha Fin:</label>
            <input type="date" id="endDate" className="input"/>

            <div className="form--controls">
              <input type="submit" value="Guardar" className="reset--button button"/>
            </div>
          </form>
        </div>
      </Fragment>
      
    )
  }
}

export default CalendarForm
