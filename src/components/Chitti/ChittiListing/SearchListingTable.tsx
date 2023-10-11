import { useState, useEffect } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const SearchListingTable = ({
  clientNameList,
  chittiListingData,
  setSearchclientName,
  searchClientName,
  HandleSearchInput,
}: any) => {
  const [chittiNoData, setChittiNoData] = useState<any>([]);

  return (
    <>
      <div className="row justify-content-center mt-2">
        <div className="col-md-2">
          <input
            type="date"
            name="date"
            id="date"
            className="form-control input-fields custom-input-field "
            aria-describedby="emailHelp"
            placeholder="Date"
            onChange={HandleSearchInput}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            name="chitti_no"
            id="chitti_no"
            className="form-control input-fields custom-input-field "
            aria-describedby="emailHelp"
            placeholder="Chitti no"
            onChange={HandleSearchInput}
          />
        </div>

        <div className="col-md-2 ">
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
          {/* <input
            type="text"
            name="status"
            id="status"
            className="form-control input-fields custom-input-field "
            placeholder="status"
            onChange={HandleSearchInput}
          /> */}

          <select
            name="status"
            id="status"
            className="form-select p-0 px-2 input-fields"
            aria-label="Default select example"
            onChange={HandleSearchInput}
          >
            <option selected>status</option>
            <option>Draft</option>
            <option>Submitted</option>
            <option>Cancel</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SearchListingTable;
