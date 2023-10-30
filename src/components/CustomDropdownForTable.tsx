import { useState, useEffect, useRef } from 'react';

const CustomDropdownForTable = ({
  drowpdownlist,
  placeholderValue,
  bgColor,
  setSelectedDropdownValue,
  HandleData,
  defaultData,
  setStateForDocStatus,
  title,
  readOnly,
  rowId,
  data, // Pass a unique index for each instance
}: any) => {
  const [showDropDown, setShowDropdown] = useState(false);
  const [noRecords, setNoRecordsFound] = useState(false);
  const [filterDropdownList, setFilterDropdownList] = useState([]);
  const inputRef = useRef<any>(null);
  useEffect(() => {
    if (
      defaultData !== undefined &&
      defaultData !== null &&
      Object?.keys(defaultData)?.length > 0
    ) {
      setSelectedDropdownValue(defaultData);
    }
  }, []);

  const handleSelectedOption = (data: any) => {
    setSelectedDropdownValue(data);
    setShowDropdown(false);
    if (setStateForDocStatus !== undefined) {
      setStateForDocStatus(true);
    }

    HandleData(data, rowId);
  };

  const HandleInputField = (e: any) => {
    setShowDropdown(true); // Open the dropdown when typing
    setSelectedDropdownValue(e.target.value);

    const query = e.target.value;
    const UpdatedFilterList: any = drowpdownlist?.filter((item: any) => {
      return item?.toLowerCase()?.indexOf(query?.toLowerCase()) !== -1;
    });

    setFilterDropdownList(UpdatedFilterList);
    setNoRecordsFound(true);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Tab') {
      setShowDropdown(false); // Close the dropdown on Tab press
    }
    if (e.key === 'Escape') {
      setShowDropdown(false); // Close the dropdown on Escape press
    }
  };

  // useEffect(() => {
  //   const handleDocumentClick = (e: any) => {
  //     if (!e.target.closest(`.dropdown-input-container-${dropdownIndex}`)) {
  //       setShowDropdown(false);
  //     }
  //   };

  //   document.addEventListener('click', handleDocumentClick);

  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, [dropdownIndex, showDropDown]);

  useEffect(() => {
    // for close dropdown when click outside
    const handleDocumentClick = (e: any) => {
      // Check if the input element itself was clicked
      if (
        e?.target !== inputRef?.current &&
        !inputRef?.current?.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleShowDropdown = () => {
    if (readOnly === false || readOnly === undefined) {
      setShowDropdown(!showDropDown); // Toggle the dropdown
    }
  };

  return (
    <>
      <div className="dropdown-input-container">
        <input
          type="text"
          className={`${
            bgColor?.current === true
              ? 'form-control dropdown-input client-name-input-chitti'
              : 'form-control input-field-chitti-table dropdown-input'
          }`}
          id="exampleInputEmail1"
          placeholder={placeholderValue}
          onChange={HandleInputField}
          onClick={handleShowDropdown}
          defaultValue={defaultData}
          value={data}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          title={title}
          readOnly={readOnly}
          ref={inputRef}
        />
        {showDropDown && (
          <ul
            className="dropdown-ul-list border"
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
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomDropdownForTable;
