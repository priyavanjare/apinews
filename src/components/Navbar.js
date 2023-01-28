import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand nav-link" to="/">
              MonkeyNews
            </Link>
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/General"
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Technology"
                  >
                    Technology
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
