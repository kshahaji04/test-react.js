import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateChittiMaster from './CreateChitti/CreateChittiMaster';
import SearchListingTable from './ChittiListing/SearchListingTable';
import UseChittiHook from '../../hooks/Chitti/chitti-page-hook';
import ListingTable from '../ListingTable';

const ChittiMaster = () => {
  const {
    chittiListingData,
    HandleCreateChittiSubmit,
    currentDate,
    selectedDropdownValue,
    HandleGoldRate,
    HandleRemarks,
    tableData,
    setTableData,
    narrationTableData,
    setNarrationTableData,
    setSelectedDropdownValue,
    clientNameList,
    subCategoryList,
    productList,
    clientGroupList,
    HandleClientGroup,
    HandleDateChange,
    date,
    setStateForDocStatus,
  }: any = UseChittiHook();

  console.log('chittiListingData', chittiListingData);

  const [searchClientName, setSearchclientName] = useState<any>('');
  const [searchInputValues, setSearchInputValues] = useState({
    date: '',
    chitti_no: '',
    name: '',
    status: '',
  });

  const HandleSearchInput: any = (e: any) => {
    const { name, value } = e.target;

    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  console.log('searchh', searchInputValues, searchClientName);

  const filteredList =
    chittiListingData?.length > 0 &&
    chittiListingData !== null &&
    (searchInputValues.date ||
      searchInputValues.chitti_no ||
      searchClientName ||
      searchInputValues.status)
      ? chittiListingData.filter((item: any) => {
          const dateMatch = searchInputValues.date
            ? item?.date?.includes(searchInputValues.date)
            : true;
          const numberMatch = searchInputValues.chitti_no
            ? item?.number?.includes(searchInputValues.chitti_no)
            : true;
          const clientNameMatch = searchClientName
            ? item?.client_name
                ?.toLowerCase()
                .includes(searchClientName.toLowerCase())
            : true;

          if (searchInputValues.status === 'Draft') {
            return (
              item?.docstatus === 0 &&
              dateMatch &&
              numberMatch &&
              clientNameMatch
            );
          } else if (searchInputValues.status === 'Submitted') {
            return (
              item?.docstatus === 1 &&
              dateMatch &&
              numberMatch &&
              clientNameMatch
            );
          } else if (searchInputValues.status === 'Cancel') {
            return (
              item?.docstatus === 2 &&
              dateMatch &&
              numberMatch &&
              clientNameMatch
            );
          }

          return dateMatch && numberMatch && clientNameMatch;
        })
      : chittiListingData;
  console.log('chittiListingData filter', filteredList);

  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs tab-container">
            <Tabs
              defaultActiveKey="chitti-listing"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              <Tab eventKey="chitti-listing" title="Chitti List">
                <div className="container">
                  <h4 className="text-center mt-2">Chitti Listing</h4>
                  <SearchListingTable
                    HandleSearchInput={HandleSearchInput}
                    clientNameList={clientNameList}
                    chittiListingData={chittiListingData}
                    setSearchclientName={setSearchclientName}
                    searchClientName={searchClientName}
                    searchInputValues={searchInputValues}
                  />
                  <ListingTable
                    tableListingData={filteredList}
                    setTableData={setTableData}
                    subCategoryList={subCategoryList}
                    narrationTableData={narrationTableData}
                    setNarrationTableData={setNarrationTableData}
                    productList={productList}
                    selectedDropdownValue={selectedDropdownValue}
                    drowpdownlist={clientNameList}
                  />
                </div>
              </Tab>
              <Tab eventKey="longer-tab" title="Create Chitti">
                <CreateChittiMaster
                  HandleCreateChittiSubmit={HandleCreateChittiSubmit}
                  currentDate={currentDate}
                  selectedDropdownValue={selectedDropdownValue}
                  HandleGoldRate={HandleGoldRate}
                  HandleRemarks={HandleRemarks}
                  tableData={tableData}
                  setTableData={setTableData}
                  narrationTableData={narrationTableData}
                  setNarrationTableData={setNarrationTableData}
                  setSelectedDropdownValue={setSelectedDropdownValue}
                  clientNameList={clientNameList}
                  subCategoryList={subCategoryList}
                  productList={productList}
                  clientGroupList={clientGroupList}
                  HandleClientGroup={HandleClientGroup}
                  HandleDateChange={HandleDateChange}
                  date={date}
                  setStateForDocStatus={setStateForDocStatus}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChittiMaster;
