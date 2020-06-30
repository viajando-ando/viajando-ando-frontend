import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";

const Header = ({ userName }) => (
  <nav className="menu">
    <label htmlFor="toggle">&#9776;</label>
    <input id="toggle" type="checkbox" />
    <div className="menu--items">
      {/* <Link to="/">
        <p>Home</p>
      </Link> */}
      {/* <Link to="/login">
        <p>Login</p>
      </Link> */}
      <Link to="/dashboard">
        <p>Dashboard</p>
      </Link>
      {/* <Link to="/profile">
        <p>Profile</p>
      </Link> */}
      <a
        href="https://viajando-ando-ykmiteeaiq-uc.a.run.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Backend</p>
      </a>
    </div>
    <div className="menu--userName">
      {/* {userName ? <p>{userName}</p> : <p>Registrate</p>} */}
      <p><a href="https://dflores.dev"
        target="_blank"
        rel="noopener noreferrer">Sitio web: dflores.dev</a></p>
    </div>
  </nav>
);

const mapStateToProps = (state) => {
  return { userName: state.user.name };
};

export default connect(mapStateToProps)(Header);
