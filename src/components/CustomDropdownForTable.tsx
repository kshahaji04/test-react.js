import { useState, useEffect } from 'react';

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
  data,
}: any) => {
  const [showDropDown, setShowDropdown] = useState<any>(false);
  const [noRecords, setNoRecordsFound] = useState<any>(false);
  const [filterDropdownList, setFilterDropdownList] = useState<any>([]);

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
    setShowDropdown(true);
    setSelectedDropdownValue(e.target.value);

    const query = e.target.value;
    const UpdatedFilterList: any = drowpdownlist?.filter((item: any) => {
      return item?.toLowerCase()?.indexOf(query?.toLowerCase()) !== -1;
    });

    setFilterDropdownList(UpdatedFilterList);
    setNoRecordsFound(true);
  };

  const handleShowDropdown = () => {
    if (readOnly === false || readOnly === undefined) {
      setShowDropdown(!showDropDown);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Tab') {
      setShowDropdown(!showDropDown);
    }
    if (e.key === 'Escape') {
      setShowDropdown(!showDropDown);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (!e?.target?.closest('.dropdown-input-container')) {
        // The click was outside the dropdown, so close it
        setShowDropdown(false);
      }
    };
    // Attach the event listener when the component mounts
    document.addEventListener('click', handleDocumentClick);
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

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
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomDropdownForTable;
