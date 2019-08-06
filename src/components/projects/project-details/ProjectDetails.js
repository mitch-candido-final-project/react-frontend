import React, { Component } from "react";
import EditProjectModal from "../EditProject/EditProjectModal";
import "./project-details.css";

export default class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    window.modalInit();
  };

  getProjectInfo = () => {
    const allProjects = this.props.allProjects;
    const projectId = this.props.projectDetailID;
    const singleProject = allProjects.filter(project => {
      return project._id === projectId;
    });
    console.log("this is t prove to candido that its an array", singleProject);
    return singleProject.map(singleProject => {
      return (
        <div key={singleProject._id} className="project-details-content">
          <div className="project-details-info">
            <h3>{singleProject.name}</h3>
            <p>{singleProject.description}</p>
            <p>{singleProject.startDate}</p>
            <p>{singleProject.dueDate}</p>
            <p>{singleProject.timeSpent}</p>
            <p>{singleProject.complete}</p>
            <p>{singleProject.isPublic}</p>
            {/* still have to do the images */}
          </div>
          <div className="exit-details">
            <a data-target="edit-project-modal" className="modal-trigger">
              <i className="fas fa-edit" />
            </a>
            <button onClick={this.props.toggleProjectView}>
              <i className="fas fa-times-circle" />
            </button>
          </div>
          <EditProjectModal singleProject={singleProject} />
        </div>
      );
    });
  };

  render() {
    return <div className="project-details">{this.getProjectInfo()}</div>;
  }
}
