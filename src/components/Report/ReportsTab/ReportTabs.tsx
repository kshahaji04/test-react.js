import { NavLink, useLocation } from 'react-router-dom';
import useReportHook from '../../../hooks/report/report-hook';
import '../../../Style/report.css';

const ReportTabs = () => {
  const {} = useLocation();
  const { userRolesData } = useReportHook();

  const reportlist: any = [
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

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="d-flex justify-content-center flex-wrap  card-listing-container">
          {reportListBasedOnUserRole?.length > 0 ? (
            reportListBasedOnUserRole.map((data: any, index: any) => {
              const processedStr: any = data.replace(/\s+/g, '').toLowerCase();

              const isActive = location.pathname
                .split('/')
                .includes(processedStr);
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
            })
          ) : (
            <div className="d-flex justify-content-center mt-5 fs-5">
              You are not allowed to access the report
            </div>
          )}
        </div>
      </div>

      {/* <div className="container mt-4">
        <h4 className="my-3">Daily Reports</h4>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Purchase Receipt
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul className="list-group fs-6">
                  <li className="list-group-item">
                    <NavLink
                      to="/report/purchasereceipt/subcategory"
                      className="text-dark"
                    >
                      Sub Category Report
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to="/report/purchasereceipt/categorypartywise"
                      className="text-dark"
                    >
                      Category Partywise Report
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to="/report/purchasereceipt/categorysummary"
                      className="text-dark"
                    >
                      Category Summary Report
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Chitti
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul className="list-group fs-6">
                  <li className="list-group-item">
                    <NavLink
                      to="/report/chitti/subcategory"
                      className="text-dark"
                    >
                      Sub Category Report
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to="/report/chitti/categorypartywise"
                      className="text-dark"
                    >
                      Category Partywise Report
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to="/report/chitti/categorysummary"
                      className="text-dark"
                    >
                      Category Summary Report
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Emerald Chitti
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul className="list-group fs-6">
                  <li className="list-group-item">
                    <NavLink
                      to="/report/emeraldchitti/categorypartywise"
                      className="text-dark"
                    >
                      Category Partywise Report
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Sales Return
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul className="list-group fs-6">
                  <li className="list-group-item">
                    <NavLink
                      to="/report/salesreturn/subcategory"
                      className="text-dark"
                    >
                      Sub Category Report
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to="/report/salesreturn/categorypartywise"
                      className="text-dark"
                    >
                      Category Partywise Report
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to="/report/salesreturn/categorysummary"
                      className="text-dark"
                    >
                      Category Summary Report
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ReportTabs;
