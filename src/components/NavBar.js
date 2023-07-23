import React, { Component } from "react";
import { Link} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid bg-dark p-4" >
            <Link className=" text-white navbar-brand fs-4" to="/">
             NewsDolphin
            </Link>
            <button
              className="navbar-toggler bg-white"
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
              className="collapse navbar-collapse bg-dark"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-unstyled">
                <li className="nav-item">
                  <Link className="nav-Link active text-white list-inline-item mx-2 fs-4" aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link text-white mx-2 fs-4" to="/Business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link text-white mx-2 fs-4" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link text-white mx-2 fs-4" to="/Health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link text-white mx-2 fs-4" to="/Science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link text-white mx-2 fs-4" to="/Sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link text-white mx-2 fs-4" to="/Technology">
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
