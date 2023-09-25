import React from 'react';
import ChittiListing from './ChittiListing';

const Chitti = () => {
  return (
    <>
      <div className="container mt-5">
        <h4 className="text-center">Chitti Listing</h4>
        <div className="row justify-content-center mt-4">
            <div className="col-md-2">
        <input type="text" className="form-control input-fields" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Date'/>
        </div>
        <div className="col-md-2">
        <input type="text" className="form-control input-fields" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Customer'/>
        </div>
        <div className="col-md-2">
        <input type="text" className="form-control input-fields" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Item'/>
        </div>
        <div className="col-md-2">
        <button type="submit" className="btn search-btn w-75">Search</button>
        </div>
        </div>
        <ChittiListing/>
      </div>
    </>
  );
};

export default Chitti;
