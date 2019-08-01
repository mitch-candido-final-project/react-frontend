import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Nav(props) {
  //   console.log(props.getUser());

  return (
    <div className="nav">
      {!props.user ? (
        <div className="logged-out-nav">
          <a data-target="modal1" className="btn modal-trigger">
            About
          </a>
          <a data-target="modal1" className="btn modal-trigger">
            Login
          </a>
        </div>
      ) : (
        <div className="loged-in-nav">
          <div className="left-side">
            <a className="btn" onClick={props.logout}>
              Dashboard
            </a>
            <a className="btn" onClick={props.logout}>
              News Feed
            </a>
          </div>
          <div className="right-side">
            <a className="btn" onClick={props.logout}>
              Account
            </a>
            <a className="btn" onClick={props.logout}>
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
