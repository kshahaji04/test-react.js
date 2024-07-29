import { useEffect, useState } from 'react';

// Function to convert dd-mm-yyyy to yyyy-mm-dd
const convertToStandardFormat = (dateStr: string) => {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split('-');
  return `${year}-${month}-${day}`;
};

const useListingFilterHook = (listingData: any[]) => {
  let path: any = window?.location?.pathname;
  const todayDate: any = new Date()?.toISOString()?.split('T')[0];

  const [searchClientName, setSearchClientName] = useState<string>('');
  const [searchInputValues, setSearchInputValues] = useState({
    submitted_date: todayDate,
    from_date: todayDate,
    to_date: todayDate,
    chitti_no: '',
    name: '',
    status: '',
  });
  const [filteredList, setFilteredList] = useState<any[]>(listingData);

  // Handle search input changes
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    const filteredData =
      listingData?.length > 0 &&
      listingData !== null &&
      (searchInputValues.submitted_date ||
        searchInputValues.from_date ||
        searchInputValues.to_date ||
        searchInputValues.chitti_no ||
        searchClientName ||
        searchInputValues.status)
        ? listingData.filter((item) => {
            const itemDateStandardFormat: any = convertToStandardFormat(
              item.date
            );
            const fromDateAndToDateMatch =
              searchInputValues.from_date && searchInputValues.to_date
                ? itemDateStandardFormat >= searchInputValues.from_date &&
                  itemDateStandardFormat <= searchInputValues.to_date
                : true;
            const numberMatch = searchInputValues.chitti_no
              ? item?.chitti_no?.includes(searchInputValues.chitti_no)
              : true;
            const clientNameMatch = path.includes('/purchase-receipt')
              ? searchClientName
                ? item?.karigar_name
                    ?.toLowerCase()
                    ?.includes(searchClientName.toLowerCase())
                : true
              : searchClientName
              ? item?.client_name
                  ?.toLowerCase()
                  ?.includes(searchClientName.toLowerCase())
              : true;

            if (searchInputValues.status === 'Draft') {
              return (
                item?.docstatus === 0 &&
                fromDateAndToDateMatch &&
                numberMatch &&
                clientNameMatch
              );
            } else if (searchInputValues.status === 'Submitted') {
              return (
                item?.docstatus === 1 &&
                fromDateAndToDateMatch &&
                numberMatch &&
                clientNameMatch
              );
            } else if (searchInputValues.status === 'Cancel') {
              return (
                item?.docstatus === 2 &&
                fromDateAndToDateMatch &&
                numberMatch &&
                clientNameMatch
              );
            }
            return fromDateAndToDateMatch && numberMatch && clientNameMatch;
          })
        : listingData;

    setFilteredList(filteredData);
  }, [listingData, searchInputValues, searchClientName]);

  return {
    searchClientName,
    setSearchClientName,
    searchInputValues,
    handleSearchInput,
    filteredList,
  };
};

export default useListingFilterHook;
