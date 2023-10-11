import React from 'react';

const MasterMultipleListingSearch = ({
  HandleSearchInput,
  placeholder1,
  placeholder2,
}: any) => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center  mt-2 ">
        <div className=" ">
          <input
            type="text"
            name="input1"
            id="input1"
            className="form-control input-fields custom-input-field ps-2 p-2"
            aria-describedby="emailHelp"
            placeholder={placeholder1}
            onChange={HandleSearchInput}
          />
        </div>
        <div className="ms-5">
          <input
            type="text"
            name="input2"
            id="input2"
            className="form-control input-fields custom-input-field ps-2 p-2"
            aria-describedby="emailHelp"
            placeholder={placeholder2}
            onChange={HandleSearchInput}
          />
        </div>
      </div>
    </>
  );
};

export default MasterMultipleListingSearch;
