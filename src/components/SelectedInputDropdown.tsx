import { useState, useEffect, useRef } from 'react';

const SelectedInputDropdown = ({
  drowpdownlist,
  placeholderValue,
  bgColor,
  selectedDropdownValue,
  setSelectedDropdownValue,
  clientGroupList,
  HandleClientGroup,
  defaultData,
  setStateForDocStatus,
  title,
  readOnly,
}: any) => {
  console.log('defaultt', readOnly);
  const [showDropDown, setShowDropdown] = useState<any>(false);
  const [noRecords, setNoRecordsFound] = useState<any>(false);
  const [filterDropdownList, setFilterDropdownList] = useState<any>([]);
  const inputRef = useRef<any>(null);
  useEffect(() => {
    if (
      defaultData !== undefined &&
      defaultData !== null &&
      Object?.keys(defaultData?.client_name)?.length > 0
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
      setShowDropdown(true);
    }
    if (e.key === 'Escape') {
      setShowDropdown(!showDropDown);
    }
  };
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

  const HandleClientBlur = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="dropdown-input-container">
        <input
          type="text"
          className={`${
            bgColor?.current === true
              ? 'form-control dropdown-input client-name-input-chitti'
              : 'form-control input-fields input-field-chitti dropdown-input'
          }`}
          id="exampleInputEmail1"
          placeholder={placeholderValue}
          onChange={HandleInputField}
          onClick={handleShowDropdown}
          defaultValue={defaultData?.client_name}
          value={selectedDropdownValue}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          title={title}
          readOnly={readOnly}
          ref={inputRef}
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
