import React, { Component } from "react";
import "./dashboard.css";
import Sidebar from "../sidebar/Sidebar";
import TaskPannel from "../taskPannel/TaskPannel";
import Calendar from "../calendar/Calendar.js";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-components">
          <TaskPannel />
        </div>
        <div className="calendar">
          <Calendar
            events={[
              { title: "event 1", date: "2019-08-04" },
              {
                title: "event 2",
                date: "2019-08-05",
                backgroundColor: "#378006"
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
