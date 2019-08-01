import React from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import "./nav.css";
export default function Nav(props) {
  const logoutCall = () => {
    props.logout().then(() => {
      //   props.getUser();
    });
  };

  return (
    <div className="nav">
      <ul>
        <button data-target="modal1" className="btn modal-trigger">
          Login
        </button>
        <button className="btn" onClick={logoutCall}>
          Logout
        </button>
      </ul>
    </div>
  );
}
