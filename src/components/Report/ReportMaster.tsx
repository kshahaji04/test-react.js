import React from 'react';
import UseReportHook from '../../hooks/report/report-hook';
import { NavLink } from 'react-router-dom';
import '../../Style/report.css';

const ReportMaster = () => {
  // const { reportTableData } = UseReportHook();
  // console.log('reportTableData', reportTableData);

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
        <div className="d-flex justify-content-center ">
          {reportlist?.length > 0 &&
            reportlist !== null &&
            reportlist.map((data: any, index: any) => {
              const processedStr = data.replace(/\s+/g, '').toLowerCase();
              return (
                <div className="mx-3 master-heading border" key={index}>
                  <NavLink
                    to={`/report/${processedStr}`}
                    className="master-title-heading"
                  >
                    <div className="rounded-4">
                      <div className=" d-flex justify-content-center master-listing-card-body">
                        <h5 className="card-title me-1 m-0">{data}</h5>
                        <i className="fa-solid fa-arrow-turn-down d-flex align-items-center master-head-icon"></i>
                      </div>
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

export default ReportMaster;
