import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClearToken } from '../../store/slices/auth/token-login-slice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogout = () => {
    dispatch(ClearToken());
    navigate('/');
  };
  return (
    <>
      <div
        className="dropdown-menu profile-card shadow border-0"
        aria-labelledby="dropdownMenuButton"
      >
        <div className="row card_imf">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="card-text text-center profile-fontSize">
              {' '}
              <h6>Welcome Guest !!</h6>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={HandleLogout}
            className="dropdown-item addrow_btn btn btn-link text-center"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
