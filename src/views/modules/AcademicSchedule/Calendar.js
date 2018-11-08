import React, { Fragment, Component } from "react";
import Options from "../../../components/Options";
import { calendars } from "../../../data/data";
import { Link } from "react-router-dom";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendars,
      urls: [
        "/calendarioAcademico/realizarProgramacion/show/",
        "/calendarioAcademico/gestionarCalendario/edit/"
      ]
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUrls(id) {
    return this.state.urls.map(url => url.concat(id));
  }

  handleDelete(id) {
    var confirmDelete = window.confirm("Estas seguro que deseas eliminar?");
    if (confirmDelete) {
      const calendars = this.state.calendars.filter(c => c.id !== id);

      this.setState({
        calendars
      });
    }
  }

  renderCalendars() {
    return this.state.calendars.map(calendar => (
      <tr key={calendar.id}>
        <td>{calendar.id}</td>
        <td>{calendar.startDate}</td>
        <td>{calendar.endDate}</td>
        <td>
          <Options
            handleDelete={() => this.handleDelete(calendar.id)}
            urls={this.handleUrls(calendar.id)}
          />
        </td>
      </tr>
    ));
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
                <th>ID</th>
                <th>FECHA INICIO</th>
                <th>FECHA FIN</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>{this.renderCalendars()}</tbody>
          </table>

          <Link
            to="/calendarioAcademico/gestionarCalendario/create"
            className="reset--link button"
          >
            + Calendario
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Calendar;
