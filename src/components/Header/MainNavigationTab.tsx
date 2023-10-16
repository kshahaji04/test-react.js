import React from 'react';
import '../../Style/Navbar.css';
import { NavLink } from 'react-router-dom';
const MainNavigationTab = () => {
  // const navList: any = ["Master", "Chitti", "Emerald Chitti", "Report", "Data Upload"]
  const navList: any = [
    {
      icon: 'fa-regular fa-file icons-color',
      name: 'Master',
    },
    {
      icon: 'fa-solid fa-file-invoice icons-color',
      name: 'Chitti',
    },
    {
      icon: 'fa-regular fa-gem icons-color',
      name: 'Emerald Chitti',
    },
    {
      icon: 'fa-regular fa-file icons-color',
      name: 'Report',
    },
    {
      icon: 'fa-solid fa-upload icons-color',
      name: 'Data Upload',
    },
  ];
  return (
    <>
      <div className="container-fluid card-container-mrgin">
        <hr className="hr_line" />
        <div className="container d-flex align-items-center justify-content-evenly flex-wrap mt-1">
          {navList.map((pageName: any, index: any) => {
            const processedStr: any = pageName?.name
              ?.replace(/\s+/g, '')
              .toLowerCase();

            const linkTo: any = `/${processedStr}`;
            const isActive: any = window?.location?.pathname?.includes(linkTo);

            return (
              <div
                className={`header-card-container px-1  ${
                  isActive ? 'activePage' : ''
                }`}
                key={index}
              >
                <NavLink
                  to={`/${processedStr}`}
                  className={`text-decoration-none navlink-class ${
                    isActive ? 'activeNavLink' : ''
                  }`}
                >
                  <div className="d-flex align-items-center header-card">
                    <span
                      className={`${
                        isActive
                          ? 'text-white master-heading-icon'
                          : 'master-icon-color'
                      }`}
                    >
                      <i className={pageName.icon}></i>
                    </span>
                    <p
                      className={`text-body-secondary my-auto px-1 ${
                        isActive ? ' border-0 text-white' : ''
                      } `}
                    >
                      {pageName.name}
                    </p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainNavigationTab;
