import React, { Component } from "react";
import Nav from "./components/navbar/Nav";
import Signup from "./components/signup/Signup";
import AuthService from "./components/services/AuthService.js";
import DashBoard from "./components/dashboard/Dashboard";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyLoggedIn: null
    };
    this.service = new AuthService();
  }

  // getCurrentlyLoggedInUser = () => {
  //   this.service
  //     .currentUser()
  //     .then(user => {
  //       this.setState({ currentlyLoggedIn: user });
  //     })
  //     .catch(() => {
  //       this.setState({ currentlyLoggedIn: null });
  //     });
  // };

  // componentDidMount() {
  //   this.getCurrentlyLoggedInUser();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav
            logout={() => this.service.logout()}
            getUser={this.getCurrentlyLoggedInUser}
          />
          <div className="sign-up">
            <Route exact path="/" component={Signup} />
          </div>
          <Route exact path="/" component={Login} />
          <Switch>
            <Route exact path="/home" component={DashBoard} />
          </Switch>
        </header>
      </div>
    );
  }
}
