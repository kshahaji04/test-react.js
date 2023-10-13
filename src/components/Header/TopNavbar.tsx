import UserProfile from './UserProfile';
import '../../Style/Navbar.css';
import logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <>
      <nav className="container navbar navbar-light bg-light p-0">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/master">
            <img src={logo} alt="" height="55px" width="auto" />
          </NavLink>
          <div className="dropdown">
            <button
              className="btn navbar-toggler dropdown-toggle"
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
