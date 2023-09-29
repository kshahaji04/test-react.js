import React from 'react';
import '../../Style/Navbar.css';
import { NavLink } from 'react-router-dom';
const MainNavigationTab = () => {
  return (
    <>
      <div className="container-fluid card-container-mrgin">
        <hr className="hr_line" />
        <div className="container d-flex align-items-center justify-content-evenly flex-wrap mt-1">
          <div className="header-card-container px-1">
            <NavLink to="/" className="text-decoration-none text-dark">
              <div className="d-flex align-items-center header-card">
                <i className="fa-regular fa-file icons-color "></i>

                <p className=" text-body-secondary my-auto px-1">Master</p>
              </div>
            </NavLink>
          </div>
          <div className="header-card-container px-1">
            <NavLink to="/chitti" className="text-decoration-none text-dark">
              <div className="d-flex align-items-center header-card">
                <i className="fa-solid fa-file-invoice icons-color"></i>

                <p className=" text-body-secondary my-auto px-1">Chitti</p>
              </div>
            </NavLink>
          </div>
          <div className="header-card-container px-1">
            <NavLink to="/emerald" className="text-decoration-none text-dark">
              <div className="d-flex align-items-center header-card">
                <i className="fa-regular fa-gem icons-color"></i>

                <p className=" text-body-secondary my-auto px-1">
                  Emerald Chitti
                </p>
              </div>
            </NavLink>
          </div>
          <div className="header-card-container px-1">
            <NavLink to="/report" className="text-decoration-none text-dark">
              <div className="d-flex align-items-center header-card">
                <i className="fa-regular fa-file icons-color"></i>

                <p className=" text-body-secondary my-auto px-1">Report</p>
              </div>
            </NavLink>
          </div>
          <div className="header-card-container px-1">
            <NavLink
              to="/data-upload"
              className="text-decoration-none text-dark"
            >
              <div className="d-flex align-items-center header-card">
                <i className="fa-solid fa-upload icons-color"></i>

                <p className=" text-body-secondary my-auto px-1">Data Upload</p>
              </div>
            </NavLink>
          </div>
        </div>

        {/* <div className="row justify-content-center mt-2">
          <div className="col-md-2 col-3">
            <NavLink to="/" className="text-decoration-none text-dark">
              <div className="card w-100">
                <div className="card-body row header-card">
                  <div className="col-md-3">
                    <i className="fa-regular fa-file icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <p className="card-subtitle mb-2 text-body-secondary">
                      Master
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-2 col-3">
            <NavLink to="/chitti" className="text-decoration-none text-dark">
              <div className="card w-100">
                <div className="card-body row">
                  <div className="col-md-3">
                    <i className="fa-solid fa-file-invoice icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <p className="card-subtitle mb-2 text-body-secondary">
                      Chitti
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-2 col-3">
            <NavLink to="/emerald" className="text-decoration-none text-dark">
              <div className="card w-100">
                <div className="card-body row">
                  <div className="col-md-3">
                    <i className="fa-regular fa-gem icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <p className="card-subtitle mb-2 text-body-secondary">
                      Emerald Chitti
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-2 col-3">
            <NavLink to="/report" className="text-decoration-none text-dark">
              <div className="card w-100">
                <div className="card-body row">
                  <div className="col-md-3 ">
                    <i className="fa-regular fa-file icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <p className="card-subtitle mb-2 text-body-secondary">
                      Report
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-2 col-3">
            <NavLink
              to="/data-upload"
              className="text-decoration-none text-dark"
            >
              <div className="card w-100">
                <div className="card-body row">
                  <div className="col-md-3">
                    <i className="fa-solid fa-upload icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <p className="card-subtitle mb-2 text-body-secondary">
                      Data Upload
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MainNavigationTab;
