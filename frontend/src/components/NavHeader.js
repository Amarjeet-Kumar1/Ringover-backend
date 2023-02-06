import React from 'react';
import './NavHeader.css';
import { Link, NavLink } from 'react-router-dom';

export default function NavHeader() {
  return (
    <div id="header">
      <div className="small-container">
        <div id="logo-container">
          <Link to="/">
            <div id="logo-image">
              <img src="/images/websitelogo.png" alt="websitelogo" />
            </div>
          </Link>
        </div>
        <div id="nav-container">
          <div>
            <NavLink
              to="/"
              className={(isActive) =>
                'nav-link-hover' +
                (!isActive.isActive ? ' nav-link' : ' selected')
              }
            >
              <p>HOME</p>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/journey"
              className={(isActive) =>
                'nav-link-hover' +
                (!isActive.isActive ? ' nav-link' : ' selected')
              }
            >
              <p>THE JOURNEY</p>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/team"
              className={(isActive) =>
                'nav-link-hover' +
                (!isActive.isActive ? ' nav-link' : ' selected')
              }
            >
              <p>TEAM</p>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/store"
              className={(isActive) =>
                'nav-link-hover' +
                (!isActive.isActive ? ' nav-link' : ' selected')
              }
            >
              <p>STORE</p>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={(isActive) =>
                'nav-link-hover' +
                (!isActive.isActive ? ' nav-link' : ' selected')
              }
            >
              <p>CONTACT</p>
            </NavLink>
          </div>
        </div>
        <div id="profile-container">
          <div id="user">
            <p>
              <i className="fa fa-user-o"></i>
            </p>
            <p>GAGAN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
