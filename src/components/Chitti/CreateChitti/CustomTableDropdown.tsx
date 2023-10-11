import React, { useState } from 'react';
import '../../../Style/custom-dropdown.css';

const CustomTableDropdown = ({
  dropdownlist,
  setSelectedDropdownValue,
}: any) => {
  const [inputValue, setInputValue] = useState<any>('');
  const [showDropdownMenu, setShowDropdownMenu] = useState<any>(false);
  const [filterDropdownList, setFilterDropdownList] = useState<any>([]);

  const HandleInputClick: any = () => {
    setShowDropdownMenu(true);
  };

  const HandleSelectDropdownList: any = (list: any) => {
    console.log('list', list);
    // setSelectedDropdownValue(data);
  };

  const HandleInputValue = (e: any) => {
    setInputValue(e.target.value);
    setShowDropdownMenu(true);
    const query = e.target.value;

    const UpdatedFilterList: any = dropdownlist?.filter((item: any) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilterDropdownList(UpdatedFilterList);
  };

  const HandleBlur = () => {
    setShowDropdownMenu(false);
  };
  return (
    <>
      <input
        type="text"
        className="form-control custom-input-dropdown"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value={inputValue}
        onChange={HandleInputValue}
        onClick={HandleInputClick}
        onBlur={HandleBlur}
      />
      {showDropdownMenu && (
        <div className="custom-dropdown-menu">
          <ul>
            {filterDropdownList?.length > 0 && filterDropdownList !== null ? (
              <>
                {filterDropdownList.map((list: any, index: any) => {
                  return <li key={index}>{list}</li>;
                })}
              </>
            ) : (
              <>
                {dropdownlist?.length > 0 && dropdownlist !== null && (
                  <>
                    {dropdownlist.map((list: any, index: any) => {
                      return (
                        <li
                          key={index}
                          // onClick={() => HandleSelectDropdownList(list)}
                        >
                          {list}
                        </li>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default CustomTableDropdown;
