import { useState } from 'react';
import '../../Style/Login.css';
import { useDispatch } from 'react-redux';
import { getAccessToken } from '../../store/slices/auth/token-login-slice';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../ToastNotification';
import logo from '../../assets/Logo.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<any>({
    username: '',
    password: '',
  });

  const HandleInputChange: any = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const HandleFormSubmit: any = async (e: any) => {
    e.preventDefault();
    const AccessTokenApiRes = await dispatch(getAccessToken(userData));

    if (AccessTokenApiRes?.payload?.msg === 'success') {
      showToast('login successfully', 'success');
      navigate('/master');
    } else {
      showToast('Invalid Credentials', 'error');
    }
  };
  return (
    <>
      <div className="container mt-4">
        <a className="navbar-brand">
          <img src={logo} alt="" height="55px" width="auto" />
        </a>
        <div className="container d-flex justify-content-center login-page-container">
          <div className="row">
            <div className="col-lg-12 card login-card">
              <div className="  p-lg-5 p-0">
                <p className="text-uppercase fs-3 text-center">login </p>
                <div className="card-body p-0">
                  <form
                    onSubmit={HandleFormSubmit}
                    className="login-form p-2 mx-auto text-center"
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={HandleInputChange}
                        className="form-control login-input-field px-2"
                        placeholder="Username"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="my-4">
                      <div className="d-flex justify-content-center">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={HandleInputChange}
                          className="form-control login-input-field px-2 "
                          placeholder="Password"
                          required
                        />
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
