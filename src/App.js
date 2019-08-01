import React, { Component } from "react";
import Nav from "./components/navbar/Nav";
import Signup from "./components/signup/Signup";
import AuthService from "./components/services/AuthService.js";
import DashBoard from "./components/dashboard/Dashboard";
import { Route, Link, Switch } from "react-router-dom";
import LoginModal from "./components/login/LoginModal";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyLoggedIn: null
    };
    this.service = new AuthService();
  }

  getCurrentlyLoggedInUser = () => {
    this.service
      .currentUser()
      .then(user => {
        this.setState({ currentlyLoggedIn: user });
        console.log("current user", this.state.currentlyLoggedIn);
      })
      .catch(() => {
        this.setState({ currentlyLoggedIn: null });
      });
  };

  componentDidMount() {
    this.getCurrentlyLoggedInUser();
  }

  logoutCall = () => {
    this.service.logout().then(() => {
      console.log("call from nav logout");
      this.setState({ currentlyLoggedIn: null });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav logout={this.logoutCall} user={this.state.currentlyLoggedIn} />
          <Switch>
            <Route
              exact
              path="/"
              render={props =>
                !this.state.currentlyLoggedIn ? (
                  <Signup {...props} getUser={this.getCurrentlyLoggedInUser} />
                ) : (
                  <DashBoard />
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
