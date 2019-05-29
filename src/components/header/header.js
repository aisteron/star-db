import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = ({onServiceChange}) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">


          <Link to="/" className="navbar-brand">
              StarDB
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <Link className="nav-link" to="/people/">People</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/planets/">Planets</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/starships/">Starships</Link>
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