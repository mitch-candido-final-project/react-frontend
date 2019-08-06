import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

//services
import AuthService from "./components/services/AuthService.js";
import ProjectService from "./components/services/ProjectService.js";

//components:
import Nav from "./components/navbar/Nav";
import Signup from "./components/signup/Signup";
import LoginModal from "./components/login/LoginModal";
import DashBoard from "./components/dashboard/Dashboard";
//projects
import NewProject from "./components/projects/NewProject";
import AllProjects from "./components/projects/allProjects/AllProjects.js";

//misc
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyLoggedIn: null,
      allProjects: [],
      accountLinkClicked: false
    };
    this.authService = new AuthService();
    this.projectService = new ProjectService();
  }

  toggleUserAccountView = () => {
    console.log("Acount toggled", this.state.accountLinkClicked);
    this.setState({ accountLinkClicked: !this.state.accountLinkClicked });
  };

  getCurrentlyLoggedInUser = () => {
    this.authService
      .currentUser()
      .then(user => {
        this.setState({ currentlyLoggedIn: user });
        console.log("current user", this.state.currentlyLoggedIn);
      })
      .catch(() => {
        this.setState({ currentlyLoggedIn: null });
      });
  };

  getAllProjects = () => {
    this.projectService
      .getAllProjects()
      .then(response => {
        console.log(response);
        this.setState({ allProjects: [...response] });
      })
      .catch(() => {
        this.setState({ allProjects: [] });
      });
  };

  componentDidMount() {
    this.getCurrentlyLoggedInUser();
    this.getAllProjects();
  }

  logoutCall = () => {
    this.authService.logout().then(() => {
      console.log("call from nav logout");
      this.setState({ currentlyLoggedIn: null });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav
            logout={this.logoutCall}
            user={this.state.currentlyLoggedIn}
            toggleAccountView={this.toggleUserAccountView}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props =>
                !this.state.currentlyLoggedIn ? (
                  <Signup {...props} getUser={this.getCurrentlyLoggedInUser} />
                ) : (
                  <DashBoard
                    allProjects={this.state.allProjects}
                    accountToggleState={this.state.accountLinkClicked}
                    currentlyLoggedIn={this.state.currentlyLoggedIn}
                  />
                )
              }
            />
          </Switch>
          <Route
            path="/"
            render={props => (
              <LoginModal {...props} getUser={this.getCurrentlyLoggedInUser} />
            )}
          />
        </header>
      </div>
    );
  }
}
