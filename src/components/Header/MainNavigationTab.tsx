import React from 'react';
import '../../Style/Navbar.css';
import { NavLink } from 'react-router-dom';
const MainNavigationTab = () => {

  // const navList: any = ["Master", "Chitti", "Emerald Chitti", "Report", "Data Upload"]
  const navList: any = [
    {
      icon: "fa-regular fa-file icons-color",
      name: "Master"
    },
    {
      icon: "fa-solid fa-file-invoice icons-color",
      name: "Chitti"
    },
    {
      icon: "fa-regular fa-gem icons-color",
      name: "Emerald Chitti"
    },
    {
      icon: "fa-regular fa-file icons-color",
      name: "Report"
    },
    {
      icon: "fa-solid fa-upload icons-color",
      name: "Data Upload"
    },
  ]
  return (
    <>
      <div className="container-fluid card-container-mrgin">
        <hr className="hr_line" />
        <div className="container d-flex align-items-center justify-content-evenly flex-wrap mt-1">
          {navList.map((pageName: any, index: any) => {

            const processedStr: any = pageName?.name?.replace(/\s+/g, '').toLowerCase();

            const linkTo: any = `/${processedStr}`;
            const isActive: any = window?.location?.pathname?.includes(linkTo)

            return (
              <div className={`header-card-container px-1  ${isActive ? "activePage" : ""}`}>
                <NavLink to={`/${processedStr}`} className={`text-decoration-none navlink-class ${isActive ? "activeNavLink" : ""}`}>
                  <div className="d-flex align-items-center header-card">
                    <span className={`${isActive ? "text-white" : "master-icon-color"}`}>
                      <i className={pageName.icon}></i>
                    </span>
                    <p className=" text-body-secondary my-auto px-1">{pageName.name}</p>
                  </div>
                </NavLink>
              </div>

            )
          })}
        </div>



      </div>


      {/* <div className="container-fluid card-container-mrgin">
        <hr className="hr_line" />
        <div className="container d-flex align-items-center justify-content-evenly flex-wrap mt-1">
          <div className="header-card-container px-1">
            <NavLink to="/master" className="text-decoration-none text-dark">
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


      </div> */}
    </>
  );
};

export default MainNavigationTab;
