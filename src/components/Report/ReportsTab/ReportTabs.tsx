import { NavLink, useLocation } from 'react-router-dom';
import useReportHook from '../../../hooks/report/report-hook';
import '../../../Style/report.css';

const ReportTabs = () => {
  const {} = useLocation();
  const { isLoading, userRolesData } = useReportHook();

  const reportlist: any = [
    'Day to Day Summary',
    'Purchase Receipt',
    'Chitti',
    'Emerald Chitti',
    'Sales Return',
  ];

  const reportListBasedOnUserRole: any = reportlist.filter(
    (report: any) =>
      userRolesData.length > 0 &&
      userRolesData.some((userRole: any) => {
        return userRole?.includes(report);
      })
  );

  const showTabSection: any = () => {
    if (isLoading === false && reportListBasedOnUserRole?.length === 0) {
      return (
        <div className="d-flex justify-content-center mt-5 fs-5">
          You are not allowed to access the report
        </div>
      );
    }

    if (isLoading === false && reportListBasedOnUserRole?.length > 0) {
      return reportListBasedOnUserRole.map((data: any, index: any) => {
        const processedStr: any = data.replace(/\s+/g, '').toLowerCase();

        const isActive = location.pathname.split('/').includes(processedStr);

        return (
          <div
            className={`mx-lg-3 my-lg-0 my-1 master-heading  px-lg-2  ${
              isActive ? 'activePage border-0' : ''
            }`}
            key={index}
          >
            <NavLink
              to={`/report/${processedStr}/${
                processedStr === 'emeraldchitti'
                  ? 'categorypartywise'
                  : processedStr === 'daytodaysummary'
                  ? ''
                  : 'subcategory'
              }`}
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
      });
    }
  };

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="d-flex justify-content-center flex-wrap  card-listing-container">
          {showTabSection()}
        </div>
      </div>
    </>
  );
};

export default ReportTabs;
