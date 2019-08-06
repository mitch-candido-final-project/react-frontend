//React imports
import React, { Component } from "react";
//css
import "./dashboard.css";
//components
import Sidebar from "../sidebar/Sidebar";
import TaskPanel from "../taskPanel/TaskPanel";
import ProjectPanel from "../projects/project-panel/ProjectPanel";
import ProjectDetails from "../projects/project-details/ProjectDetails";
import UserAccount from "../user-account/UserAccount";
import Calendar from "../calendar/Calendar.js";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectLinkClicked: false,
      projectDetailID: "",
      projects: [],
      currentProject: this.props.allProjects[0],
      currenttasks: []
    };
  }

  toggleProjectDetailView = () => {
    console.log("test");
    this.setState({ projectLinkClicked: !this.state.projectLinkClicked });
  };

  getTheProjectDetail = id => {
    this.setState({ projectDetailID: id });
  };

  setCurrentProject = id => {
    let newCurrPrj = this.props.allProjects.find(eachPrj => eachPrj._id === id);
    this.setState({ currentProject: newCurrPrj });
  };

  handleDateClick = arg => {
    console.log("this is the testb yo", arg);
    let newCurrTasks = this.state.currentProject.tasks.find(
      eachTask => eachTask.date === arg.dateStr
    );
    console.log(newCurrTasks);
    this.setState({ currenttasks: newCurrTasks });
  };
  componentDidMount() {
    window.modalInit();
  }

  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        {!this.state.projectLinkClicked && !this.props.accountToggleState && (
          <div className="dashboard-components">
            <TaskPanel />
            <ProjectPanel
              allProjects={this.props.allProjects}
              toggleProjectView={this.toggleProjectDetailView}
              saveProjectIdToState={this.getTheProjectDetail}
              setCurrProj={this.setCurrentProject}
            />
          </div>
        )}
        {this.state.projectLinkClicked && (
          <div className="project-details-view">
            <ProjectDetails
              projectDetailID={this.state.projectDetailID}
              allProjects={this.props.allProjects}
              toggleProjectView={this.toggleProjectDetailView}
            />
          </div>
        )}
        {this.props.accountToggleState && (
          <div className="user-account-container">
            <UserAccount currentlyLoggedIn={this.props.currentlyLoggedIn} />
          </div>
        )}
        <div className="calendar">
          <Calendar
            events={
              this.state.currentProject && this.state.currentProject.tasks
            }
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }
}
