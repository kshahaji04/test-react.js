import { NavLink } from 'react-router-dom';
import '../../Style/report.css';

const ReportMaster = () => {
  const reportlist: any = [
    'Sub Category ',
    'Category Partywise',
    'Category Summary',
  ];
  return (
    <>
      <div className="container mt-3 mb-4">
        <div className="d-flex justify-content-center flex-wrap  card-listing-container">
          {reportlist?.length > 0 &&
            reportlist !== null &&
            reportlist.map((data: any, index: any) => {
              const processedStr: any = data.replace(/\s+/g, '').toLowerCase();
              const linkTo: any = `/report/${processedStr}`;
              const isActive: any = window?.location?.pathname === linkTo;
              return (
                <div
                  className={`mx-lg-3 my-lg-0 my-1 master-heading  px-lg-2  ${
                    isActive ? 'activePage border-0' : ''
                  }`}
                  key={index}
                >
                  <NavLink
                    to={`/report/${processedStr}`}
                    className={`text-decoration-none navlink-class ${
                      isActive ? 'text-white' : ''
                    }`}
                  >
                    <div className="d-flex justify-content-center align-items-center px-1">
                      <div className="reports-heading me-1 m-0">{data}</div>
                      <i className="fa-solid fa-arrow-turn-down d-flex align-items-center master-head-icon"></i>
                    </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
        {/* <hr className="my-0 mt-2 " /> */}
      </div>
    </>
  );
};

export default ReportMaster;
