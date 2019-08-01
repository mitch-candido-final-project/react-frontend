import React, { Component } from "react";
import AuthService from "../services/AuthService";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.service = new AuthService();
  }

  login = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password).then(() => {
      this.props.history.push("/home");
      //TODO: get the current user need to change the login component to render
      console.log("worked");
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id="modal1" className="modal">
        <form onSubmit={this.login}>
          <div className="modal-content">
            <legend>Username:</legend>
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
            />
            <legend>Password:</legend>
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            <button className="btn modal-close waves-effect waves-green">
              login
            </button>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green">
              close
            </a>
          </div>
        </form>
      </div>
    );
  }
}
