import { useState, useEffect, useRef } from 'react';

const useAutoCompleteInputHook = ({
  setSelectedDropdownValue,
  setStateForDocStatus,
  drowpdownlist,
  readOnly,
}: any) => {
  const [showDropDown, setShowDropdown] = useState<any>(false);
  const [noRecords, setNoRecordsFound] = useState<any>(false);
  const [selectedIndex, setSelectedIndex] = useState<any>(-1);

  const [filterDropdownList, setFilterDropdownList] = useState<any>([]);
  const inputRef = useRef<any>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // useEffect(() => {
  //   if (
  //     defaultData !== undefined &&
  //     defaultData !== null &&
  //     defaultData !== '' &&
  //     Object?.keys(defaultData?.client_name)?.length > 0
  //   ) {
  //     setSelectedDropdownValue(defaultData?.client_name);
  //   }
  // }, []);

  useEffect(() => {
    if (showDropDown && dropdownRef.current) {
      const selectedItem = dropdownRef.current.childNodes[
        selectedIndex
      ] as HTMLElement;
      if (selectedItem) {
        selectedItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, showDropDown]);

  const handleSelectedOption = (data: any, i: any) => {
    setSelectedDropdownValue(data);
    setShowDropdown(false);
    setSelectedIndex(i !== undefined ? i : -1);

    if (setStateForDocStatus !== undefined) {
      setStateForDocStatus(true);
    }
  };

  const handleInputField = (e: any) => {
    setShowDropdown(true);
    setSelectedDropdownValue(e.target.value);
    const query = e.target.value;

    const updatedFilterList: any = drowpdownlist?.filter((item: any) => {
      return item?.toLowerCase()?.indexOf(query?.toLowerCase()) !== -1;
    });

    if (updatedFilterList?.length > 0) {
      setFilterDropdownList(updatedFilterList);
      if (updatedFilterList?.length === 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(-1);
      }
    } else {
      // setFilterDropdownList([]);
    }

    // handleKeyDown(e, fieldname);
    setNoRecordsFound(true);
  };

  const handleShowDropdown = () => {
    if (readOnly === false || readOnly === undefined) {
      setShowDropdown(!showDropDown);
      setFilterDropdownList(drowpdownlist?.length > 0 && drowpdownlist);
      setSelectedIndex(-1);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Tab') {
      setShowDropdown(false);
    }
    if (e.key === 'Escape') {
      setShowDropdown(!showDropDown);
    }
    if (!readOnly) {
      if (e.key === 'ArrowDown' && !showDropDown) {
        console.log('arrow down');
        e.preventDefault();
        setShowDropdown(true);
        setSelectedIndex(-1);
      } else if (e.key === 'ArrowDown' && showDropDown) {
        setSelectedIndex((prevIndex: any) =>
          prevIndex < filterDropdownList?.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === 'ArrowUp' && showDropDown) {
        e.preventDefault();
        setSelectedIndex((prevIndex: any) =>
          prevIndex > 0 ? prevIndex - 1 : 0
        );
      } else if (
        (e.key === 'Enter' || e.keyCode === 13) &&
        showDropDown &&
        selectedIndex !== -1
      ) {
        e.preventDefault();
        handleSelectedOption(filterDropdownList[selectedIndex], selectedIndex);
      }
    }
  };

  // for close dropdown when click outside
  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      // Check if the input element itself was clicked
      if (
        e?.target !== inputRef?.current &&
        !inputRef?.current?.contains(e?.target) &&
        !document?.querySelector('.form-select-sm')?.contains(e?.target) //condn for client group dropdown
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleClientBlur = () => {
    setShowDropdown(false);
  };

  return {
    handleInputField,
    handleClientBlur,
    handleKeyDown,
    handleShowDropdown,
    noRecords,
    inputRef,
    showDropDown,
    filterDropdownList,
    handleSelectedOption,
    selectedIndex,
    setSelectedIndex,
    setShowDropdown,
    dropdownRef,
  };
};

export default useAutoCompleteInputHook;
