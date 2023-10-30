import SelectedInputDropdown from '../../SelectedInputDropdown';

const SearchListingTable = ({
  clientNameList,
  setSearchclientName,
  searchClientName,
  HandleSearchInput,
  searchInputValues,
}: any) => {
  return (
    <>
      <div className="row justify-content-center mt-1">
        <div className="col-md-2">
          <label className="text-secondary">Submitted Date</label>
          <input
            type="date"
            name="submitted_date"
            id="submitted_date"
            className="form-control input-fields custom-input-field "
            value={searchInputValues?.submitted_date}
            onChange={HandleSearchInput}
          />
        </div>
        <div className="col-md-2">
          <label className="text-secondary">Current Date</label>
          <input
            type="date"
            name="current_date"
            id="current_date"
            className="form-control input-fields custom-input-field "
            value={searchInputValues?.current_date}
            onChange={HandleSearchInput}
          />
        </div>
        <div className="col-md-2">
          <label className="text-secondary">Chitti no</label>
          <input
            type="number"
            name="chitti_no"
            id="chitti_no"
            className="form-control input-fields custom-input-field "
            aria-describedby="emailHelp"
            placeholder="Chitti no"
            value={
              searchInputValues?.chitti_no >= 0
                ? searchInputValues?.chitti_no
                : ''
            }
            onChange={HandleSearchInput}
          />
        </div>

        <div className="col-md-2 ">
          <label className="text-secondary ">Client name</label>
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
        <div className="col-md-2 my-lg-0 my-3">
          <label className="text-secondary ">Status</label>
          <select
            name="status"
            id="status"
            className="form-select p-0 px-2 input-fields"
            aria-label="Default select example"
            onChange={HandleSearchInput}
          >
            <option>status</option>
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
