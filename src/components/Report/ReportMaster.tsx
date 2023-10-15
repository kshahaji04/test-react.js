import React, { useState } from 'react';
import UseReportHook from '../../hooks/report/report-hook';
import { NavLink } from 'react-router-dom';
import '../../Style/report.css';

const ReportMaster = () => {
  // const { reportTableData } = UseReportHook();
  // console.log('reportTableData', reportTableData);
  // const [activeLink, setActiveLink] = useState('');

  const reportlist: any = [
    'Category Partywise',
    'Category Summary',
    'Sub Category ',
    'Emerald',
  ];
  return (
    <>
      <div className="container my-3">
        {/* <hr className="hr_line my-1" />

        <h4>Reports</h4>
        <hr className="hr_line my-1" /> */}
        <div className="d-flex justify-content-center card-listing-container">
          {reportlist?.length > 0 &&
            reportlist !== null &&
            reportlist.map((data: any, index: any) => {
              const processedStr: any = data.replace(/\s+/g, '').toLowerCase();
              const linkTo: any = `/report/${processedStr}`;
              const isActive: any = window?.location?.pathname === linkTo;
              return (
                <div className={`mx-3 master-heading p-1 px-2 ${isActive ? "activePage border-0" : ""}`} key={index}>
                  <NavLink
                    to={`/report/${processedStr}`}
                    className={`text-decoration-none navlink-class ${isActive ? "text-white" : ""}`}
                  // onClick={() => setActiveLink(linkTo)}
                  >

                    <div className="d-flex justify-content-center mas">
                      <h6 className="card-title me-1 m-0">{data}</h6>
                      <i className="fa-solid fa-arrow-turn-down d-flex align-items-center master-head-icon"></i>
                    </div>

                  </NavLink>
                </div>
              );
            })}
        </div>
        <hr className='my-2 ' />
      </div>
    </>
  );
};

export default ReportMaster;
