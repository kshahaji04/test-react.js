import SelectedInputDropdown from '../../SelectedInputDropdown';

const SearchListingTable = ({
  clientNameList,
  setSearchclientName,
  searchClientName,
  handleSearchInput,
  searchInputValues,
}: any) => {
  return (
    <>
      <div className="row justify-content-center mt-1">
        {/* <div className="col-lg-2  col-md-3 ">
          <label className="text-secondary submitted-date-label-chitti">
            Submitted Date
          </label>
          <input
            type="date"
            name="submitted_date"
            id="submitted_date"
            className="form-control custom-input-field px-2"
            style={{ backgroundColor: '#E0E1F5' }}
            value={searchInputValues?.submitted_date}
            onChange={HandleSearchInput}
          />
        </div> */}
        <div className="col-lg-2 col-md-3 ">
          <label className="text-secondary">From Date</label>
          <input
            type="date"
            name="from_date"
            id="from_date"
            className="form-control custom-input-field px-2"
            style={{ backgroundColor: '#E0E1F5' }}
            value={searchInputValues?.from_date}
            onChange={handleSearchInput}
          />
        </div>
        <div className="col-lg-2 col-md-3 ">
          <label className="text-secondary">To Date</label>
          <input
            type="date"
            name="to_date"
            id="to_date"
            className="form-control custom-input-field px-2"
            style={{ backgroundColor: '#E0E1F5' }}
            value={searchInputValues?.to_date}
            onChange={handleSearchInput}
          />
        </div>
        <div className="col-lg-2 col-md-2">
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
            onChange={handleSearchInput}
          />
        </div>

        <div className="col-lg-2 col-md-2 ">
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
        <div className="col-lg-2 col-md-2 my-lg-0 mb-lg-0 mb-3">
          <label className="text-secondary">Status</label>
          <select
            name="status"
            id="status"
            className="form-select p-0 px-2 input-fields"
            aria-label="Default select example"
            onChange={handleSearchInput}
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
