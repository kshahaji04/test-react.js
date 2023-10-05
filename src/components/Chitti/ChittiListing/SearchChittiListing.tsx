import { useState, useEffect } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const SearchChittiListing = ({ clientNameList, chittiListingData, selectedDropdownValue, setSelectedDropdownValue }: any) => {
  const ChittiNoList = ['001', '002', '003', '004'];
  const [chittiNoData, setChittiNoData] = useState<any>([])
  // useEffect(() => {
  //   if (chittiListingData?.length > 0 && chittiListingData !== null) {
  //     const listOfChittiValues = chittiListingData.map((obj: any) => obj.chitti);
  //     setChittiNoData(listOfChittiValues)
  //   }
  // }, [])


  // const listOfChittiValues = listOfObjects.map((obj) => obj.chitti);
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
          {/* <SelectedInputDropdown
            drowpdownlist={ChittiNoList}
            placeholderValue="Chitti No"
            selectedDropdownValue={selectedDropdownValue}
            setSelectedDropdownValue={setSelectedDropdownValue}
          /> */}

          <select className="form-select form-select-sm select-field" aria-label=".form-select-sm example">
            <option >Chitti No</option>
            {chittiNoData?.length > 0 && chittiNoData !== null ? (
              chittiNoData.map((client: any, index: any) => {
                return (
                  <option key={index}>{client}</option>
                )
              })
            ) : ""}
          </select>


        </div>

        <div className="col-md-2 ">

          <select className="form-select form-select-sm select-field" aria-label=".form-select-sm example">
            <option >Client Name</option>

            {clientNameList?.length > 0 && clientNameList !== null ? (
              clientNameList.map((client: any, index: any) => {
                return (
                  <option key={index}>{client}</option>
                )
              })
            ) : ""}


          </select>

          {/* <SelectedInputDropdown
            drowpdownlist={clientNameList}
            placeholderValue="Client Name"
            selectedDropdownValue={selectedDropdownValue}
            setSelectedDropdownValue={setSelectedDropdownValue}
          /> */}

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
