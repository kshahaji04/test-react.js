import React from 'react';
import '../../Style/Navbar.css';
import { NavLink } from 'react-router-dom';
const MainNavigationTab = () => {
  return (
    <>
      <div className="container-fluid card-container-margin">
        <hr className=" hr_line" />
        <div className="row justify-content-center mt-2">
          <div className="col-md-2 col-3">
            <NavLink
              to="/"
              className="text-decoration-none text-dark"
              // style={({ isActive }) => ({
              //   color: isActive ? 'greenyellow' : 'white',
              // })}
            >
              <div className="card w-100">
                <div className="card-body row p-1">
                  <div className="col-md-3">
                    <i className="fa-regular fa-file icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Master
                    </h6>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-2 col-3">
            <NavLink
              to="/chitti"
              className="text-decoration-none text-dark"
              // style={({ isActive }) => ({
              //   color: isActive ? 'greenyellow' : 'white',
              // })}
            >
              <div className="card w-100">
                <div className="card-body row">
                  <div className="col-md-3">
                    <i className="fa-solid fa-file-invoice icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Chitti
                    </h6>
                  </div>
                </div>
              </div>
            </NavLink>
            {/* <a href="/chitti" className="cards-links"></a> */}
          </div>
          <div className="col-md-2 col-3">
            <NavLink
              to="/emerald"
              className="text-decoration-none text-dark"
              // style={({ isActive }) => ({
              //   color: isActive ? 'greenyellow' : 'white',
              // })}
            >
              <div className="card w-100">
                <div className="card-body row">
                  <div className="col-md-3">
                    <i className="fa-regular fa-gem icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Emerald Chitti
                    </h6>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-2 col-3">
            <NavLink
              to="/report"
              className="text-decoration-none text-dark"
              // style={({ isActive }) => ({
              //   color: isActive ? 'greenyellow' : 'white',
              // })}
            >
              <div className="card w-100">
                <div className="card-body row">
                  <div className="col-md-3 ">
                    <i className="fa-regular fa-file icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Report
                    </h6>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-2 col-3">
            <NavLink
              to="/data-upload"
              className="text-decoration-none text-dark"
              // style={({ isActive }) => ({
              //   color: isActive ? 'greenyellow' : 'white',
              // })}
            >
              <div className="card w-100">
                <div className="card-body row">
                  <div className="col-md-3">
                    <i className="fa-solid fa-upload icons-color"></i>
                  </div>
                  <div className="col-md-9 mt-3">
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Data Upload
                    </h6>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigationTab;
