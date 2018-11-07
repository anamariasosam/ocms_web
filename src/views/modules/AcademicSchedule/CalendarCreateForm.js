import React, { Component, Fragment } from "react";
import Success from "../../../components/Success";
import Error from "../../../components/Error";

class CalendarCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      success: false,
      message: "Creado con éxito"
    };

    this.startDate = React.createRef();
    this.endDate = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.startDate.current.value);
    console.log(this.endDate.current.value);

    this.startDate.current.value = "";
    this.endDate.current.value = "";
    this.setState({
      success: true
    });
  }

  render() {
    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>

        <div className="form--container">
          <h3 className="form--title">Crear Calendario</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="startDate" className="required label">
              Fecha Inicio:
            </label>
            <input
              type="date"
              id="startDate"
              className="input"
              ref={this.startDate}
              required
            />

            <label htmlFor="endDate" className="required label">
              Fecha Fin:
            </label>
            <input
              type="date"
              id="endDate"
              className="input"
              ref={this.endDate}
              required
            />

            <div className="form--controls">
              <input
                type="submit"
                value="Guardar"
                className="reset--button button"
              />
            </div>
          </form>

          {this.state.error && <Error description={this.state.message} />}
          {this.state.success && <Success description={this.state.message} />}
        </div>
      </Fragment>
    );
  }
}

export default CalendarCreateForm;
