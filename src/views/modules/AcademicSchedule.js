import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class AcademicSchedule extends Component {
  constructor(props) {
		super(props)

		this.state = {
			events: [
				{
					start: new Date(),
					end: new Date(moment().add(1, "days")),
					title: "Some title"
				}
			]
		}
	}

  render() {
    return (
			<div>
				<h1>Calendario Académico</h1>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default AcademicSchedule;
