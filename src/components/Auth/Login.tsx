import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../Style/Login.css';
import {
  getAccessToken,
  getUserRolesPermission,
} from '../../store/slices/auth/token-login-slice';
import { showToast } from '../ToastNotification';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<any>({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState<any>(false);

  const handleInputChange: any = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit: any = async (e: any) => {
    e.preventDefault();
    const accessTokenApiRes = await dispatch(getAccessToken(userData));

    if (accessTokenApiRes?.payload?.msg === 'success') {
      showToast('Login Successfully', 'success');
      navigate('/master');

      dispatch(
        getUserRolesPermission(
          accessTokenApiRes?.payload?.data?.access_token
        ) as any
      );
    } else {
      showToast('Invalid Credentials', 'error');
    }
  };

  const handleShowPassword: any = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="container  d-flex justify-content-center login-page-container">
          <div className="row">
            <div className="col-lg-12 card login-card">
              <div className="  p-lg-5 p-0">
                <p className="text-uppercase fs-3 text-center">login </p>
                <div className="card-body p-0">
                  <form
                    onSubmit={handleFormSubmit}
                    className="login-form p-2 mx-auto text-center"
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleInputChange}
                        className="form-control login-input-field px-2 shadow-none login-username-input"
                        placeholder="Username"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="my-4">
                      <div className="d-flex justify-content-center input-pswd-field">
                        <input
                          type={`${showPassword ? 'text' : 'password'}`}
                          id="password"
                          name="password"
                          onChange={handleInputChange}
                          className="form-control login-input-field px-2 border-0 shadow-none"
                          placeholder="Password"
                          required
                        />
                        <div onClick={handleShowPassword}>
                          <i
                            className={`fa fa-eye p-1 fs-6 pswd-eye-icon ${showPassword ? 'text-primary' : ''
                              }`}
                          ></i>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary mt-3 py-1 px-4"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
