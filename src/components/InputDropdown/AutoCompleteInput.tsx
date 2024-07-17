import useAutoCompleteInputUpdatedHook from '../../hooks/auto-complete-input-hook-updated';

const AutoCompleteInput = ({
  data,
  handleSearchInput,
  defaultValue,
  setStateForDocStatus,
  readOnlyFields,
  clientGroupList,
  handleSelectClientGroup,
  labelText,
  bgColor,
  value,
}: any) => {
  const {
    handleShowDropdown,
    handleSelectedOption,
    handleFieldChange,
    handleKeyDown,
    handleDocumentClick,
    handleShowClientGroupSelect,
    handleClientBlur,
    showDropdown,
    selectedIndex,
    noRecords,
    filterDropdownList,
    inputRef,
    dropdownRef,
  }: any = useAutoCompleteInputUpdatedHook({
    data,
    handleSearchInput,
    defaultValue,
    setStateForDocStatus,
    readOnlyFields,
    clientGroupList,
    handleSelectClientGroup,
    labelText,
  });
  // let hintOptionList: any = data?.length > 0 && data.map((value: any) => value);

  return (
    <>
      <div className="dropdown-input-container">
        <input
          type="text"
          id={data?.fieldname}
          name={data?.fieldname}
          placeholder={data?.label}
          onBlur={() => {
            if (!readOnlyFields) {
              handleClientBlur();
            }
          }}
          onChange={(e) => handleFieldChange(e, data.fieldname)}
          onClick={() => {
            if (!readOnlyFields) {
              handleDocumentClick();
            }
          }}
          onMouseDown={handleShowDropdown}
          className={`${
            bgColor?.current === true
              ? 'form-control dropdown-input client-name-input-chitti'
              : 'form-control input-field-chitti-table dropdown-input'
          }`}
          defaultValue={defaultValue}
          value={value}
          readOnly={readOnlyFields}
          onKeyDown={(e: any) => handleKeyDown(e, data.fieldname)}
          autoComplete="off"
          ref={inputRef}
        />

        {showDropdown && (
          <ul className={`dropdown-ul-list border`} ref={dropdownRef}>
            {noRecords === false && filterDropdownList?.length === 0 ? (
              <>
                {data?.link_data?.length > 0 &&
                  data?.link_data !== null &&
                  data?.link_data.map((list: any, index: any) => (
                    <li
                      key={index}
                      onClick={() =>
                        handleSelectedOption(list, index, data.fieldname)
                      }
                      className="dropdown-list"
                    >
                      {list}
                    </li>
                  ))}
              </>
            ) : (
              <>
                {filterDropdownList?.length > 0 &&
                  filterDropdownList !== null &&
                  filterDropdownList.map((name: any, i: any) => (
                    <li
                      key={i}
                      onMouseDown={() => {
                        handleSelectedOption(name, i, data.fieldname);
                      }}
                      className={`dropdown-list ${
                        i === selectedIndex ? 'selected-dropdown-index' : ''
                      }`}
                    >
                      {name}
                    </li>
                  ))}
              </>
            )}
            {clientGroupList?.length > 0 && (
              <>
                {noRecords === true && filterDropdownList?.length === 0 && (
                  <>
                    <h6 className="">Client Group</h6>
                    <li className="dropdown-list">
                      <select
                        id={`select-1`}
                        className="form-select"
                        onClick={(e) => {
                          e.stopPropagation(); // Stop event propagation
                          handleShowClientGroupSelect(e);
                        }}
                        onChange={(e) => {
                          handleSelectClientGroup(e.target.value);
                          // setSelectedDropdownValue(selectedDropdownValue);
                        }}
                      >
                        {clientGroupList?.length > 0 &&
                          clientGroupList !== null &&
                          clientGroupList.map((data: any, index: any) => (
                            <option
                              value={data.client_group}
                              key={index}
                            ></option>
                          ))}
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

export default AutoCompleteInput;
