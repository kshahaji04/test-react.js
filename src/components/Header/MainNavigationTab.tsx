import React from 'react';
import '../../Style/Navbar.css';
const MainNavigationTab = () => {
  return (
    <>
      <div className="container card-container">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <a href="" className='cards-links'>
            <div className="card w-100">
              <div className="card-body row ">
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
            </a>
          </div>
          <div className="col-md-2">
          <a href="" className='cards-links'>
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
            </a>
          </div>
          <div className="col-md-2">
          <a href="" className='cards-links'>
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
            </a>
          </div>
          <div className="col-md-2">
          <a href="" className='cards-links'>
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
            </a>
          </div>
          <div className="col-md-2">
          <a href="" className='cards-links'>
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigationTab;
