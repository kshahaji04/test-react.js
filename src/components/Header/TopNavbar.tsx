import React from 'react';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';
import '../../Style/Navbar.css';
import logo from '../../assets/Logo.png';

const TopNavbar = () => {
  return (
    <>
      <nav className=" Container-fluid navbar fixed-top navbar-light bg-light navbar_topbar mb-5">
        <div className="container flexstart_mobile">
          <i className="fa fa-bars toggle_bar" aria-hidden="true"></i>
          <a className="navbar-brand logo_color">
            <img src={logo} alt="logo" height="70px" />
          </a>
          <div className="dropdown">
            <button
              className="btn  navbar-toggler dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a href="" className="text-right">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </a>
            </button>
            <UserProfile />
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
