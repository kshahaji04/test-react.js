import React, { useState, useEffect, useRef } from 'react';

const SelectedInputDropdown = ({
  drowpdownlist,
  placeholderValue,
  bgColor,
  selectedDropdownValue,
  setSelectedDropdownValue,
  clientGroupList,
  HandleClientGroup,
  defaultData,
  readOnlyField,
  setStateForDocStatus,
  title,
}: any) => {
  console.log('defaultt', selectedDropdownValue, drowpdownlist);
  const [showDropDown, setShowDropdown] = useState<any>(false);
  const [noRecords, setNoRecordsFound] = useState<any>(false);
  const [filterDropdownList, setFilterDropdownList] = useState<any>([]);

  const [isFocused, setIsFocused] = useState(false);
  const selectDropdownRef = useRef<any>(null);
  useEffect(() => {
    if (
      defaultData !== undefined &&
      defaultData !== null &&
      Object.keys(defaultData?.client_name)?.length > 0
    ) {
      setSelectedDropdownValue(defaultData.client_name);
    }
  }, []);

  const handleSelectedOption = (data: any) => {
    console.log('dataa', data);
    setSelectedDropdownValue(data);
    setShowDropdown(false);
    setStateForDocStatus(true);
  };
  const HandleInputField = (e: any) => {
    console.log('input value', e.target.value);
    setShowDropdown(true);
    setSelectedDropdownValue(e.target.value);
    const query = e.target.value;

    const UpdatedFilterList: any = drowpdownlist?.filter((item: any) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilterDropdownList(UpdatedFilterList);
    setNoRecordsFound(true);
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropDown);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Tab') {
      setShowDropdown(true);
    }
    if (e.key === 'Escape') {
      setShowDropdown(!showDropDown);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (
        !selectDropdownRef.current ||
        !selectDropdownRef.current.contains(document.activeElement)
      ) {
        setShowDropdown(false);
      }
    }, 200);
  };

  const HandleClientBlur = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="dropdown-input-container">
        <input
          type="text"
          className={`${
            bgColor === true
              ? 'form-control dropdown-input client-name-input-chitti'
              : 'form-control input-fields  dropdown-input'
          }`}
          id="exampleInputEmail1"
          onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholderValue}
          onChange={HandleInputField}
          onClick={handleShowDropdown}
          defaultValue={defaultData?.client_name}
          value={selectedDropdownValue}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          readOnly={readOnlyField}
          title={title}
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
                    onClick={() => handleSelectedOption(list)}
                    className="dropdown-list"
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
                    onClick={() => handleSelectedOption(list)}
                    className="dropdown-list"
                  >
                    {list}
                  </li>
                ))}
              </>
            )}
            {clientGroupList?.length > 0 && (
              <>
                {noRecords === true && filterDropdownList?.length === 0 && (
                  <>
                    <div className="text-uppercase px-2 mt-1">Client Group</div>
                    <li className="dropdown-list p-1">
                      <select
                        className="form-select form-select-sm "
                        aria-label="Default select example"
                        onChange={HandleClientGroup}
                        ref={selectDropdownRef}
                        onBlur={HandleClientBlur}
                      >
                        <option>Select client group</option>
                        {clientGroupList?.length > 0 &&
                          clientGroupList !== null &&
                          clientGroupList.map((group: any, index: any) => {
                            return (
                              <>
                                <option key={index}>{group}</option>
                              </>
                            );
                          })}
                      </select>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default SelectedInputDropdown;
