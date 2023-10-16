import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const MasterListing = () => {
  console.log('idd1', window.location.pathname);

  const masterlist: any = [
    'Client Group',
    'Client Name',
    'Category',
    'Sub Category',
    'Huid product',
  ];

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center ">
        {masterlist?.length > 0 &&
          masterlist !== null &&
          masterlist.map((data: any, index: any) => {
            const processedStr = data.replace(/\s+/g, '').toLowerCase();
            const linkTo: any = `/master/${processedStr}`;
            const isActive: any = window?.location?.pathname === linkTo;
            return (
              <div
                className={`mx-3 master-heading p-1 px-2 ${
                  isActive ? 'activePage border-0' : ''
                }`}
                key={index}
              >
                <NavLink
                  to={`/master/${processedStr}`}
                  className={`text-decoration-none navlink-class ${
                    isActive ? 'text-white ' : ''
                  }`}
                >
                  <div className="rounded-4">
                    <div className=" d-flex justify-content-center master-listing-card-body">
                      <h6 className="card-title me-1 m-0">{data}</h6>
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

export default MasterListing;
