import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./nav.css";

export default class Nav extends Component {
  componentDidMount() {
    var elemsRight = document.querySelectorAll(".sidenav.sidenavRight");
    var elemsLeft = document.querySelectorAll(".sidenav.sidenavLeft");
    var instances1 = M.Sidenav.init(elemsRight, { edge: "right" });
    var instances2 = M.Sidenav.init(elemsLeft, { edge: "left" });
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              PROLO
            </a>
            <a
              href="#"
              data-target="slide-out"
              className="left sidenav-trigger"
            >
              <i className="material-icons">details</i>
            </a>
            <a
              href="#"
              data-target="mobile-demo"
              className="right sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
            {this.props.user ? (
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/" className="btn">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a className="btn" onClick={this.props.logout}>
                    News Feed
                  </a>
                </li>
                <li>
                  <Link to="/account" className="btn">
                    Account
                  </Link>
                </li>
                <li>
                  <a className="btn" onClick={this.props.logout}>
                    Logout
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="right hide-on-med-and-down">
                <li>
                  <a data-target="modal1" className="btn modal-trigger">
                    About
                  </a>
                </li>
                <li>
                  <a data-target="modal1" className="btn modal-trigger">
                    Login
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
        <ul className="sidenav sidenavRight" id="mobile-demo">
          <li>
            <Link to="/" className="btn">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/account" className="btn">
              Account
            </Link>
          </li>
          <li>
            <a className="btn" onClick={this.props.logout}>
              Logout
            </a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}
