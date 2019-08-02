import React, { Component } from "react";
import Status from "../status/Status";
import "./sidebar.css";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Status />
        <div className="social-content">
          <div className="group-container">
            <p>Groups</p>
          </div>
          <div className="message-container">
            <p>Messages</p>
          </div>
        </div>
      </div>
    );
  }
}
