import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FullCalendar
        defaultView="dayGridWeek"
        plugins={[dayGridPlugin, interactionPlugin]}
        events={this.props.events}
        dateClick={this.props.dateClick}
      />
    );
  }
}

export default Calendar;
