import React, { useState } from 'react';

const SelectedDropdown = ({ drowpdownlist }: any) => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [showDropDown, setShowDropdown] = useState<any>(false);
  const [noRecords, setNoRecordsFound] = useState<any>(false);
  const [filterDropdownList, setFilterDropdownList] = useState<any>([]);
  const handleSelectedOption = (data: any) => {
    setSelectedDropdownValue(data);
    setShowDropdown(false);
  };
  const HandleInputField = (e: any) => {
    console.log('input value', e.target.value);
    setSelectedDropdownValue(e.target.value);
    const query = e.target.value;

    const UpdatedFilterList: any = drowpdownlist.filter((item: any) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    console.log('selectedDropdownValue up', UpdatedFilterList);
    setNoRecordsFound(true);
    setFilterDropdownList(UpdatedFilterList);
  };
  console.log('selectedDropdownValue', selectedDropdownValue);

  const handleShowDropdown = () => {
    setShowDropdown(true);
  };
  return (
    <>
      <input
        type="text"
        className="form-control input-fields  dropdown-input"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Client Name"
        onChange={HandleInputField}
        onClick={handleShowDropdown}
        value={selectedDropdownValue}
      />
      {showDropDown && (
        <ul
          className=" dropdown-ul-list px-1 border"
          aria-label="Default select example"
        >
          {noRecords === false && filterDropdownList?.length === 0 ? (
            <>
              {drowpdownlist.map((list: any, index: any) => (
                <li
                  key={index}
                  className="dropdown-list"
                  onClick={() => handleSelectedOption(list)}
                >
                  {list}
                </li>
              ))}
            </>
          ) : (
            <>
              {filterDropdownList.map((list: any, index: any) => (
                <li
                  key={index}
                  className="dropdown-list"
                  onClick={() => handleSelectedOption(list)}
                >
                  {list}
                </li>
              ))}
            </>
          )}
          {noRecords === true && filterDropdownList?.length === 0 && (
            <li className="dropdown-list p-1">No Records Found</li>
          )}
        </ul>
      )}
    </>
  );
};

export default SelectedDropdown;
