import React from 'react';

import './header.css';

const Header = ({onServiceChange}) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">


          <a href="#/" className="navbar-brand">
              StarDB
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="#/people">People</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#/planets">Planets</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#/starships">Starships</a>
                  </li>
              </ul>
              <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={onServiceChange}>
                  Change Service
              </button>

          </div>
      </nav>
  );
};

export default Header;