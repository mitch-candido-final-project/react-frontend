import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Nav(props) {
  //   console.log(props.getUser());

  return (
    <div className="nav">
      <ul>
        <button data-target="modal1" className="btn modal-trigger">
          Login
        </button>

        <button className="btn" onClick={props.logout}>
          Logout
        </button>
      </ul>
    </div>
  );
}
