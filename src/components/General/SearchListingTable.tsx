import { useLocation } from 'react-router-dom';
import SelectedInputDropdown from '../SelectedInputDropdown';

const SearchListingTable = ({
  clientNameList,
  setSearchclientName,
  searchClientName,
  handleSearchInput,
  searchInputValues,
}: any) => {
  const location = useLocation();

  return (
    <>
      <div className="row justify-content-center mt-1">
        <div
          className={` ${
            !location?.pathname?.includes('/purchase-receipt') &&
            !location?.pathname?.includes('/sales-return')
              ? ''
              : 'h-100'
          }  col-lg-2 col-md-3 `}
        >
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
        <div
          className={` ${
            !location?.pathname?.includes('/purchase-receipt') &&
            !location?.pathname?.includes('/sales-return')
              ? ''
              : 'h-100'
          }  col-lg-2 col-md-3 `}
        >
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
        {!location?.pathname?.includes('/purchase-receipt') &&
          !location?.pathname?.includes('/sales-return') && (
            <div className="col-lg-2 col-md-2">
              <label className="text-secondary">Chitti no</label>
              <input
                type="number"
                name="chitti_no"
                id="chitti_no"
                className="form-control input-fields custom-input-field"
                placeholder="Chitti no"
                value={
                  searchInputValues?.chitti_no >= 0
                    ? searchInputValues?.chitti_no
                    : ''
                }
                onChange={handleSearchInput}
              />
            </div>
          )}

        <div className="col-lg-2 col-md-2 ">
          <label className="text-secondary ">
            {location?.pathname?.includes('/purchase-receipt')
              ? 'Karigar Name'
              : 'Client name'}
          </label>
          <SelectedInputDropdown
            drowpdownlist={clientNameList}
            // bgColor={bgColor}
            placeholderValue={
              location?.pathname?.includes('/purchase-receipt')
                ? 'Karigar Name'
                : 'Client name'
            }
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
