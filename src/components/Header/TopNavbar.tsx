import UserProfile from './UserProfile';
import '../../Style/Navbar.css';

const TopNavbar = () => {
  return (
    <>
      <div className="bg-light">
        <nav className="container navbar navbar-light p-0">
          <div className="container-fluid my-1">
            {/* <NavLink className="navbar-brand" to="/master">
            <img src={logo} alt="" height="55px" width="auto" />
          </NavLink> */}
            <div></div>
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
      </div>
    </>
  );
};

export default TopNavbar;
