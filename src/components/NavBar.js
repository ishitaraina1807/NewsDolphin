import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid bg-dark">
            <a className=" text-white navbar-brand" href="/">
              NewsDolphin
            </a>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    general
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
