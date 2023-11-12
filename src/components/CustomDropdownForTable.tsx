import { useState, useEffect, useRef } from 'react';
import { get_category_list } from '../store/slices/Master/get-category-slice';
import { useSelector } from 'react-redux';

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
  console.log('CategoryDataFromStore', categoryDataFromStore);

  const [showDropDown, setShowDropdown] = useState(false);
  const [noRecords, setNoRecordsFound] = useState(false);
  const [filterDropdownList, setFilterDropdownList] = useState([]);
  const [selectedValue, setSelectedValue] = useState(data || '');

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

  //for emerald chitti table
  useEffect(() => {
    if (manageSelectedValue) {
      setSelectedDropdownValue(rowId, selectedValue);
    }
  }, [selectedValue, setSelectedDropdownValue, rowId, manageSelectedValue]);


  const handleSelectedOption = (data: any) => {
    setSelectedDropdownValue(data);
    setSelectedValue(selectedValue);
    setShowDropdown(false);
    if (setStateForDocStatus !== undefined) {
      setStateForDocStatus(true);
    }

    HandleData(data, rowId);
  };

  const HandleSelectedCategory: any = (e: any) => {
    setSelectedCategoryForSubcategory(e.target.value);
    HandleCategoryData(e.target.value, rowId);
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

  useEffect(() => {
    // for close dropdown when click outside
    const handleDocumentClick = (e: any) => {
      // Check if the input element itself was clicked
      if (
        e?.target !== inputRef?.current &&
        !inputRef?.current?.contains(e.target) &&
        !document?.querySelector('.form-select-sm')?.contains(e?.target)
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

  const handleOnFocus: any = (e: any) => {
    console.log('onfocus', e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className={`${bgColor?.current === true
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
        onFocus={handleOnFocus}
      />
      {showDropDown && (
        <ul
          // className="dropdown-ul-list border"
          className={`${dropdownWidth ? "w-auto" : ""} dropdown-ul-list border`}
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

          {categoryDataFromStore?.data?.length > 0 && (
            <>
              {showCategoryDropdown && filterDropdownList?.length === 0 && (
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
