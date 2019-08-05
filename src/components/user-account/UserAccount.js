import React, { Component } from "react";

export default class UserAccount extends Component {
  render() {
    return (
      <div className="user-account-content">
        <h2>{this.props.currentlyLoggedIn.username}</h2>
      </div>
    );
  }
}
