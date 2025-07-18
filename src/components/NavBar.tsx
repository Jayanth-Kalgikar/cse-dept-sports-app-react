import React from "react";
import "../NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/disall">
            CSE Dept Sports App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" 
                href="/disall">
                  Display All Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/upev">
                  Upcoming Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/srev">
                  Search Event
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
