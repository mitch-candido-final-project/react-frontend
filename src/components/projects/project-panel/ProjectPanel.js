import AllProjects from "../allProjects/AllProjects";
import NewProject from "../NewProject";
import "./project.css";

import React, { Component } from "react";

export default class ProjectPanel extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="project-header">
          <h5>All Projects</h5>
          <a data-target="add-project-modal" className="modal-trigger">
            <i className="fas fa-plus-circle fa-2x" />
          </a>
        </div>
        <NewProject />
        <AllProjects
          allProjects={this.props.allProjects}
          toggleProjectView={this.props.toggleProjectView}
          saveProjectIdToState={this.props.saveProjectIdToState}
          setCurrProj={this.props.setCurrProj}
        />
      </div>
    );
  }
}
