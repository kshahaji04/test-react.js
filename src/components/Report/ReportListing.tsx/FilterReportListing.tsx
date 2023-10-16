import React from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const FilterReportListing = ({
  setSearchclientName,
  searchClientName,
  clientNameList,
  CategoryList,
  searchCategory,
  setSearchCategory,
}: any) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-md-2">
          <SelectedInputDropdown
            drowpdownlist={CategoryList}
            // bgColor={bgColor}
            placeholderValue="Category"
            selectedDropdownValue={searchCategory}
            setSelectedDropdownValue={setSearchCategory}
            // clientGroupList={clientGroupList}
            // HandleClientGroup={HandleClientGroup}
          />
        </div>
        <div className="col-md-2">
          <SelectedInputDropdown
            drowpdownlist={clientNameList}
            // bgColor={bgColor}
            placeholderValue="Client Name"
            selectedDropdownValue={searchClientName}
            setSelectedDropdownValue={setSearchclientName}
            // clientGroupList={clientGroupList}
            // HandleClientGroup={HandleClientGroup}
          />
        </div>

        <div className="col-md-2 ">
          <input
            type="text"
            name="date"
            id="date"
            className="form-control input-fields custom-input-field "
            placeholder="From Date"
            // onChange={HandleSearchInput}
          />
        </div>
        <div className="col-md-2 ">
          <input
            type="date"
            name="date"
            id="date"
            className="form-control input-fields custom-input-field"
            placeholder="To Date"
            // onChange={HandleSearchInput}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterReportListing;
