import { useSelector } from 'react-redux';
import '../../Style/Navbar.css';
import NotificationToggle from './NotificationToggle';
import {
  ClearToken,
  get_access_token,
} from '../../store/slices/auth/token-login-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { btnLoadingStop } from '../../store/slices/btn-loading-slice';

const TopNavbar = () => {
  const userData: any = useSelector(get_access_token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(ClearToken());
    dispatch(btnLoadingStop());
    navigate('/');
  };
  return (
    <>
      <div className="d-flex align-items-center">
        {((userData?.userRoles?.length > 0 &&
          userData?.userRoles.some((roles: any) =>
            roles.includes('Save Access')
          )) ||
          (userData?.userRoles?.length > 0 &&
            userData?.userRoles?.some((roles: any) =>
              roles.includes('Save Submit Access')
            ))) && <NotificationToggle />}

        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle px-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {userData?.username || (
              <i className="fa fa-user-circle fs-3 px-2"></i>
            )}
          </button>
          <ul className="dropdown-menu px-0 py-1">
            <li>
              <a className="dropdown-item" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>

        {/* <nav className="container navbar navbar-light p-0">
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
        </nav> */}
      </div>
    </>
  );
};

export default TopNavbar;
