import React, { useState, useEffect, useRef } from 'react';

const SelectedInputDropdown = ({ drowpdownlist, placeholderValue }: any) => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [showDropDown, setShowDropdown] = useState<any>(false);
  const [noRecords, setNoRecordsFound] = useState<any>(false);
  const [filterDropdownList, setFilterDropdownList] = useState<any>([]);

  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    console.log("no foucsss")

    if (!isFocused) {
      console.log("no foucs")
      setShowDropdown(false)

    }
  };
  // useEffect(() => {
  //   if (showDropDown) {
  //     setShowDropdown(false)
  //   }
  // }, [isFocused])

  console.log("focus", isFocused, showDropDown)

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
    setFilterDropdownList(UpdatedFilterList);
    setNoRecordsFound(true);
  };
  console.log('selectedDropdownValue', selectedDropdownValue);

  const handleShowDropdown = () => {
    setShowDropdown(!showDropDown);
  };


  const handleKeyDown = (e: any) => {
    if (e.key === 'Tab') {
      setShowDropdown(true)
    }
    // if (e.key === 'Tab' && showDropDown === true) {
    //   setShowDropdown(false)
    // }
  }

  return (
    <>
      <div className='dropdown-input-container'>
        <input
          type="text"
          className="form-control input-fields  dropdown-input"
          id="exampleInputEmail1"
          // onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
          aria-describedby="emailHelp"
          placeholder={placeholderValue}
          onChange={HandleInputField}
          onClick={handleShowDropdown}
          value={selectedDropdownValue}
          onKeyDown={handleKeyDown}

        />
        {showDropDown && (

          <ul
            className=" dropdown-ul-list border"
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
      </div>

    </>
  );
};

export default SelectedInputDropdown;
