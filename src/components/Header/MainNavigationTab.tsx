import '../../Style/Navbar.css';
import { NavLink } from 'react-router-dom';
const MainNavigationTab = () => {
  const navList: any = [
    {
      icon: 'fa-regular fa-file icons-color',
      name: 'Master',
      url: 'master',
    },
    {
      icon: 'fa-solid fa-file icons-color',
      name: 'Purchase Receipt',
      url: 'purchase-receipt',
    },
    {
      icon: 'fa-solid fa-file-invoice icons-color',
      name: 'Chitti',
      url: 'chitti',
    },
    {
      icon: 'fa-regular fa-file icons-color',
      name: 'Sales Return',
      url: 'sales-return',
    },
    {
      icon: 'fa-regular fa-gem icons-color',
      name: 'Emerald Chitti',
      url: 'emeraldchitti',
    },
    {
      icon: 'fa-regular fa-file icons-color',
      name: 'Report',
      url: 'report',
    },
    // {
    //   icon: 'fa-solid fa-upload icons-color',
    //   name: 'Data Upload',
    // },
  ];
  return (
    <>
      <div className="container-fluid card-container-mrgin">
        <hr className="hr_line" />
        <div className="container d-flex align-items-center   justify-content-center flex-wrap ">
          {navList.map((pageName: any, index: any) => {
            // const processedStr: any = pageName?.name
            //   ?.replace(/\s+/g, '')
            //   .toLowerCase();

            const linkTo: any = pageName.url;
            const isActive: any = window?.location?.pathname?.includes(linkTo);

            return (
              <div
                className={`header-card-container mx-4 px-1 my-1 ${
                  isActive ? 'activePage' : ''
                }`}
                key={index}
              >
                <NavLink
                  to={`/${linkTo}`}
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
                      className={`text-body-secondary my-auto px-1 headers-heading ${
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
