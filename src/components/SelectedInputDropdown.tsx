import useAutoCompleteInputHook from '../hooks/auto-complete-input-hook';

const SelectedInputDropdown = ({
  drowpdownlist,
  placeholderValue,
  bgColor,
  selectedDropdownValue,
  setSelectedDropdownValue,
  clientGroupList,
  handleClientGroup,
  defaultData,
  setStateForDocStatus,
  title,
  readOnly,
}: any) => {
  const {
    handleInputField,
    handleClientBlur,
    handleKeyDown,
    showDropDown,
    handleShowDropdown,
    filterDropdownList,
    noRecords,
    inputRef,
    handleSelectedOption,
    selectedIndex,
  } = useAutoCompleteInputHook({
    defaultData,
    setSelectedDropdownValue,
    setStateForDocStatus,
    drowpdownlist,
    readOnly,
  });

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
          onChange={handleInputField}
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
                {drowpdownlist?.length > 0 &&
                  drowpdownlist !== null &&
                  drowpdownlist.map((list: any, index: any) => (
                    <li
                      key={index}
                      onClick={() => handleSelectedOption(list, index)}
                      className={`dropdown-list ${
                        index === selectedIndex ? 'selected-dropdown-index' : ''
                      }`}
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
                    onClick={() => handleSelectedOption(list, index)}
                    className={`dropdown-list ${
                      index === selectedIndex ? 'selected-dropdown-index' : ''
                    }`}
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
                        onChange={handleClientGroup}
                        onBlur={handleClientBlur}
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
