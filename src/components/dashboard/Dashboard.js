import React, { Component } from "react";
import "./dashboard.css";
import Sidebar from "../sidebar/Sidebar";
import TaskPannel from "../taskPannel/TaskPannel";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-components">
          <TaskPannel />
        </div>
      </div>
    );
  }
}
