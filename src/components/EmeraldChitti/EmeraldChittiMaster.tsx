import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import CreateEmeraldChittiMaster from './CreateEmeraldChitti/CreateEmeraldChittiMaster';
import UseEmeraldHook from '../../hooks/Emerald/emrald-page-hook';
import UseSubCategoryHook from '../../hooks/Master/sub-category-hook';
import SearchListingTable from '../Chitti/ChittiListing/SearchListingTable';
import { useState } from 'react';
import ListingTable from '../ListingTable';

const EmeraldChittiMaster = () => {
  const {
    emeraldChittiData,
    selectedDropdownValue,
    setSelectedDropdownValue,
    HandleClientGroup,
    HandleCreateEmeraldChittiSubmit,
    productItemList,
    clientGroupList,
    clientNameList,
    currentDate,
    handleDateChange,
    transactionDate,
    tableData,
    setTableData,
  }: any = UseEmeraldHook();
  const { subCategoryList }: any = UseSubCategoryHook();
  console.log('emeraldChittiData', emeraldChittiData);
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
    emeraldChittiData?.length > 0 &&
    emeraldChittiData !== null &&
    (searchInputValues.date ||
      searchInputValues.chitti_no ||
      searchClientName ||
      searchInputValues.status)
      ? emeraldChittiData.filter((item: any) => {
          const dateMatch = searchInputValues.date
            ? item?.date?.includes(searchInputValues.date)
            : true;
          const numberMatch = searchInputValues.chitti_no
            ? item?.number?.includes(searchInputValues.chitti_no)
            : true;
          const clientNameMatch = searchClientName
            ? item?.client_name?.includes(searchClientName)
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
      : emeraldChittiData;

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-12 chitti-nav-tabs">
          <Tabs
            defaultActiveKey="chitti-listing"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            <Tab eventKey="chitti-listing" title="Emerald Chitti List">
              <div className="container">
                <h4 className="text-center mt-2">Emerald Listing</h4>
                <SearchListingTable
                  HandleSearchInput={HandleSearchInput}
                  clientNameList={clientNameList}
                  setSearchclientName={setSearchclientName}
                  searchClientName={searchClientName}
                />{' '}
                <ListingTable tableListingData={filteredList} />
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Create Emerald Chitti">
              <CreateEmeraldChittiMaster
                selectedDropdownValue={selectedDropdownValue}
                setSelectedDropdownValue={setSelectedDropdownValue}
                HandleClientGroup={HandleClientGroup}
                HandleCreateEmeraldChittiSubmit={
                  HandleCreateEmeraldChittiSubmit
                }
                clientGroupList={clientGroupList}
                clientNameList={clientNameList}
                currentDate={currentDate}
                handleDateChange={handleDateChange}
                transactionDate={transactionDate}
                tableData={tableData}
                setTableData={setTableData}
                subCategoryList={subCategoryList}
                productItemList={productItemList}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EmeraldChittiMaster;
