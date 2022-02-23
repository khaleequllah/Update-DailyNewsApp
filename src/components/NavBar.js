import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

export class navbar extends Component {
  //static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container justify-content-center">
            <a className="navbar-brand" href="/Update-DailyNewsApp/">
              <h2>Update</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>{" "}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/business">
                    <h5>Business</h5>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/entertainment"
                  >
                    <h5>Entertainment</h5>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/health">
                    <h5>Health</h5>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/science">
                    <h5>Science</h5>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    <h5>Sports</h5>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/technology"
                  >
                    <h5>Technology</h5>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/about">
                    <h5>About</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
