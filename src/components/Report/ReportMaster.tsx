import React from 'react';
import ReportListing from './ReportTableListing';
import UseReportHook from '../../hooks/report/report-hook';
import { NavLink } from 'react-router-dom';

const ReportMaster = () => {
  const { reportTableData } = UseReportHook();
  console.log('reportTableData', reportTableData);

  const reportlist: any = ['Report1', 'Report2', 'Report3'];
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center ">
        {reportlist?.length > 0 &&
          reportlist !== null &&
          reportlist.map((data: any, index: any) => {
            const processedStr = data.replace(/\s+/g, '').toLowerCase();
            return (
              <div className="mx-3 master-heading" key={index}>
                <NavLink
                  to={`/master/${processedStr}`}
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
  );
};

export default ReportMaster;
