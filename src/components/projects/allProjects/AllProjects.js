import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./project-row.css";

export default class AllProjects extends Component {
  getAllProjects = () => {
    const onclickFunctions = id => {
      this.props.toggleProjectView();
      this.props.saveProjectIdToState(id);
    };

    return this.props.allProjects.map(eachProject => {
      return (
        <div key={eachProject._id} className="project-single-row">
          <button
            // to={`/details/${eachProject._id}`}
            onClick={() => onclickFunctions(eachProject._id)}
          >
            {eachProject.name}
          </button>
          <span>{eachProject.startDate}</span>
          <span>{eachProject.dueDate}</span>
          <span>{eachProject.isPublic}</span>
        </div>
      );
    });
  };
  render() {
    return <div>{this.getAllProjects()}</div>;
  }
}