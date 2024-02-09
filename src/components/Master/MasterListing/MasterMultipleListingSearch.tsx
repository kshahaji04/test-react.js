import { useState } from "react";

const MasterMultipleListingSearch = ({
  handleInputChange1,
  handleInputChange2,
  handleInputChange3,
  placeholder1,
  placeholder2,
  placeholder3,
  showThirdInputField,
  listingData
}: any) => {

  const [tableViewData, setTableViewData] = useState<any>(20);

  return (
    <>
      <div className="d-flex justify-content-between ">
        <div className="container d-flex justify-content-start align-items-center mt-1">
          <div className=" ">
            <input
              type="text"
              name="input1"
              id="input1"
              className="form-control input-fields custom-input-field ps-2 p-1"
              aria-describedby="emailHelp"
              placeholder={placeholder1}
              onChange={handleInputChange1}
            />
          </div>
          <div className="ms-lg-5 ms-3">
            <input
              type="text"
              name="input2"
              id="input2"
              className="form-control input-fields custom-input-field ps-2 p-1"
              aria-describedby="emailHelp"
              placeholder={placeholder2}
              onChange={handleInputChange2}
            />
          </div>
          {showThirdInputField?.current && (
            <div className="ms-lg-5 ms-3">
              <input
                type="text"
                name="input2"
                id="input2"
                className="form-control input-fields custom-input-field ps-2 p-1"
                aria-describedby="emailHelp"
                placeholder={placeholder3}
                onChange={handleInputChange3}
              />
            </div>
          )}
        </div>
        <div className="w-50 d-flex align-items-end justify-content-end">
          {listingData?.length > 0 && (
            <div className="text-end pe-4 text-gray">
              {listingData?.slice(0, tableViewData)?.length} of{' '}
              {listingData?.length < 10
                ? '0' + listingData?.length
                : listingData?.length}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MasterMultipleListingSearch;
