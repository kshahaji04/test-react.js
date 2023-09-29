import { useState } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';


const SearchChittiListing = () => {
  const ChittiNoList = ['001', '002', '003', '004'];
  const ClientNamelist = ['Client1', 'Client2', 'Client3', 'Client4'];


  return (
    <>
      <div className="row justify-content-center mt-2">
        <div className="col-md-2">
          <input
            type="date"
            className="form-control input-fields custom-input-field "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Date"
          />
        </div>
        <div className="col-md-2">
          <SelectedInputDropdown drowpdownlist={ChittiNoList} placeholderValue="Chitti No" />

          {/* <input
            type="text"
            className="form-control input-fields custom-input-field"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Chitti No"
          /> */}
        </div>

        <div className="col-md-2 ">
          <SelectedInputDropdown drowpdownlist={ClientNamelist} placeholderValue="Client Name" />

        </div>
        <div className="col-md-2 ">
          <button
            type="submit"
            className="btn search-btn w-75 d-flex align-items-center justify-content-center chitti-listing-search-btn "
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchChittiListing;
