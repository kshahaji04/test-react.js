import { useSelector } from 'react-redux';
import '../../Style/Navbar.css';
import NotificationToggle from './NotificationToggle';
import UserProfile from './UserProfile';
import { get_access_token } from '../../store/slices/auth/token-login-slice';

const TopNavbar = () => {
  const getUserRoles: any = useSelector(get_access_token);

  return (
    <>
      <div className="bg-light d-flex align-items-center">
        {((getUserRoles?.userRoles?.length > 0 &&
          getUserRoles?.userRoles.some((roles: any) =>
            roles.includes('Save Access')
          )) ||
          (getUserRoles?.userRoles?.length > 0 &&
            getUserRoles?.userRoles?.some((roles: any) =>
              roles.includes('Save Submit Access')
            ))) && <NotificationToggle />}

        <nav className="container navbar navbar-light p-0">
          <div className="container-fluid my-1">
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
