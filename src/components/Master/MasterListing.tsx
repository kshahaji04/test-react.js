import React, { useState } from 'react';

const MasterListing = () => {
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
              <div className="mx-3 border border-dark " key={index}>
                <a href={`/master/${processedStr}`} className='master-title-heading'>
                  <div className="card rounded-4">
                    <div className="card-body d-flex justify-content-center master-listing-card-body">
                      <h5 className="card-title me-1 m-0">{data}</h5>

                    </div>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MasterListing;
