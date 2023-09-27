import { useState } from 'react';
import Select from 'react-select';
import SelectedDropdown from '../../SelectedDropdown';

const SearchChittiListing = () => {
  const drowpdownlist = ['option1', 'option2', 'option3', 'option3'];

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
          <input
            type="text"
            className="form-control input-fields custom-input-field"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Chitti No"
          />
        </div>

        <div className="col-md-2 ">
          {/* <div className=""> */}
          <SelectedDropdown drowpdownlist={drowpdownlist} />
          {/* </div> */}
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
