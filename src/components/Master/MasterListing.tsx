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

            return (
              <div className="mx-3 master-heading border " key={index}>
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

export default MasterListing;
