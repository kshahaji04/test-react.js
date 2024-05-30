import { useState, useEffect } from 'react';
import { get_category_list } from '../store/slices/Master/get-category-slice';
import { useSelector } from 'react-redux';
import useAutoCompleteInputHook from '../hooks/auto-complete-input-hook';

const CustomDropdownForTable = ({
  drowpdownlist,
  placeholderValue,
  bgColor,
  setSelectedDropdownValue,
  HandleData,
  setSelectedCategoryForSubcategory,
  HandleCategoryData,
  defaultData,
  setStateForDocStatus,
  showCategoryDropdown,
  title,
  readOnly,
  rowId,
  dropdownWidth,
  manageSelectedValue = false,
  data, // Pass a unique index for each instance
}: any) => {
  const categoryDataFromStore: any = useSelector(get_category_list);

  const [selectedValue, setSelectedValue] = useState(data || '');

  const {
    handleInputField,
    // handleClientBlur,
    handleKeyDown,
    setSelectedIndex,
    showDropDown,
    handleShowDropdown,
    filterDropdownList,
    noRecords,
    inputRef,
    setShowDropdown,
    dropdownRef,
    // handleSelectedOption,
    selectedIndex,
  } = useAutoCompleteInputHook({
    defaultData,
    setSelectedDropdownValue,
    setStateForDocStatus,
    drowpdownlist,
    readOnly,
  });

  //for emerald chitti table
  useEffect(() => {
    if (manageSelectedValue) {
      setSelectedDropdownValue(rowId, selectedValue);
    }
  }, [selectedValue, setSelectedDropdownValue, rowId, manageSelectedValue]);

  const handleSelectedOption = (data: any, i: any) => {
    setSelectedDropdownValue(data);
    setSelectedValue(selectedValue);
    setShowDropdown(false);
    setSelectedIndex(i !== undefined ? i : -1);
    if (setStateForDocStatus !== undefined) {
      setStateForDocStatus(true);
    }

    HandleData(data, rowId);
  };

  const HandleSelectedCategory: any = (e: any) => {
    setSelectedCategoryForSubcategory(e.target.value);
    HandleCategoryData(e.target.value, rowId);
    setShowDropdown(false);
  };

  return (
    <>
      <input
        type="text"
        className={`${
          bgColor?.current === true
            ? 'form-control dropdown-input client-name-input-chitti'
            : 'form-control input-field-chitti-table dropdown-input'
        }`}
        id="exampleInputEmail1"
        placeholder={placeholderValue}
        onChange={handleInputField}
        onClick={handleShowDropdown}
        defaultValue={defaultData}
        value={data}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        title={title}
        readOnly={readOnly}
        ref={inputRef}
        // onFocus={handleOnFocus}
      />
      {showDropDown && (
        <ul
          className={`${dropdownWidth ? 'w-auto' : ''} dropdown-ul-list border`}
          aria-label="Default select example"
          ref={dropdownRef}
        >
          {noRecords === false && filterDropdownList?.length === 0 ? (
            <>
              {drowpdownlist?.length > 0 &&
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

          {categoryDataFromStore?.data?.length > 0 && (
            <>
              {noRecords === true &&
                showCategoryDropdown?.current &&
                filterDropdownList?.length === 0 && (
                  <>
                    {/* <div className="text-uppercase px-2 mt-1">Category</div> */}
                    <li className="dropdown-list p-1">
                      <select
                        className="form-select form-select-sm "
                        aria-label="Default select example"
                        onChange={HandleSelectedCategory}
                      >
                        <option>Select Category</option>
                        {categoryDataFromStore?.data?.length > 0 &&
                          categoryDataFromStore?.data !== null &&
                          categoryDataFromStore?.data.map(
                            (value: any, index: any) => {
                              return (
                                <>
                                  <option key={index}>{value}</option>
                                </>
                              );
                            }
                          )}
                      </select>
                    </li>
                  </>
                )}
            </>
          )}
        </ul>
      )}
    </>
  );
};

export default CustomDropdownForTable;
