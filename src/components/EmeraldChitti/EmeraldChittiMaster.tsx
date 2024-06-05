import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import CreateEmeraldChittiMaster from './CreateEmeraldChitti/CreateEmeraldChittiMaster';
import useEmeraldHook from '../../hooks/Emerald/emrald-page-hook';
import useSubCategoryHook from '../../hooks/Master/sub-category-hook';
import SearchListingTable from '../Chitti/ChittiListing/SearchListingTable';
import { useState } from 'react';
import ListingTable from '../General/ListingTable';

const EmeraldChittiMaster = () => {
  const {
    emeraldChittiData,
    selectedDropdownValue,
    setSelectedDropdownValue,
    handleClientGroup,
    handleCreateEmeraldChittiSubmit,
    productItemList,
    clientGroupList,
    clientNameList,
    currentDate,
    handleTopSectionData,
    transactionDate,
    handleAddRow,
    tableData,
    setTableData,
    handleDeleteRow,
    handleEmptyEmeraldChitti,
    handleSubmitEmeraldChittiData,
    handleCancelEmeraldChitti,
    handleDeleteEmeraldChitti,
    showSubmitButtonAfterCreateChitti,
    clientGroupName,
    setClientGroupName,
    setStateForDocStatus,
    handleKeyDown,
  }: any = useEmeraldHook();

  const { subCategoryList }: any = useSubCategoryHook();

  // const todayDate: any = currentDate?.toISOString()?.split('T')[0];
  const [searchClientName, setSearchclientName] = useState<any>('');
  const [searchInputValues, setSearchInputValues] = useState({
    submitted_date: '',
    from_date: '',
    to_date: '',
    chitti_no: '',
    name: '',
    status: '',
  });

  const handleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  const filteredList =
    emeraldChittiData?.length > 0 &&
    emeraldChittiData !== null &&
    (searchInputValues.submitted_date ||
      searchInputValues.from_date ||
      searchInputValues.to_date ||
      searchInputValues.chitti_no ||
      searchClientName ||
      searchInputValues.status)
      ? emeraldChittiData.filter((item: any) => {
          const submittedDateMatch = searchInputValues.submitted_date
            ? item?.submitted_date?.includes(searchInputValues.submitted_date)
            : true;

          const fromDateAndToDateMatch =
            searchInputValues.from_date && searchInputValues.to_date
              ? item.date >= searchInputValues.from_date &&
                item.date <= searchInputValues.to_date
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
              submittedDateMatch &&
              fromDateAndToDateMatch &&
              numberMatch &&
              clientNameMatch
            );
          } else if (searchInputValues.status === 'Submitted') {
            return (
              item?.docstatus === 1 &&
              submittedDateMatch &&
              fromDateAndToDateMatch &&
              numberMatch &&
              clientNameMatch
            );
          } else if (searchInputValues.status === 'Cancel') {
            return (
              item?.docstatus === 2 &&
              submittedDateMatch &&
              fromDateAndToDateMatch &&
              numberMatch &&
              clientNameMatch
            );
          }

          return (
            submittedDateMatch &&
            fromDateAndToDateMatch &&
            numberMatch &&
            clientNameMatch
          );
        })
      : emeraldChittiData;

  return (
    <div className="container mt-3">
      <div className="">
        <div className="row justify-content-center chitti-nav-tabs">
          <Tabs
            defaultActiveKey="chitti-listing"
            id="justify-tab-example"
            className="w-75 border-0"
            justify
          >
            <Tab eventKey="chitti-listing" title="Emerald Chitti List">
              <div className="col-xl-9 col-md-12 col-12  mx-auto">
                <SearchListingTable
                  handleSearchInput={handleSearchInput}
                  clientNameList={clientNameList}
                  setSearchclientName={setSearchclientName}
                  searchClientName={searchClientName}
                  searchInputValues={searchInputValues}
                />
                <ListingTable
                  tableListingData={filteredList}
                  handleSubmitChittiData={handleSubmitEmeraldChittiData}
                />
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Create Emerald Chitti">
              <CreateEmeraldChittiMaster
                selectedDropdownValue={selectedDropdownValue}
                setSelectedDropdownValue={setSelectedDropdownValue}
                handleClientGroup={handleClientGroup}
                handleCreateEmeraldChittiSubmit={
                  handleCreateEmeraldChittiSubmit
                }
                clientGroupList={clientGroupList}
                clientGroupName={clientGroupName}
                clientNameList={clientNameList}
                currentDate={currentDate}
                handleTopSectionData={handleTopSectionData}
                transactionDate={transactionDate}
                tableData={tableData}
                setTableData={setTableData}
                handleAddRow={handleAddRow}
                handleDeleteRow={handleDeleteRow}
                subCategoryList={subCategoryList}
                productItemList={productItemList}
                handleEmptyEmeraldChitti={handleEmptyEmeraldChitti}
                handleSubmitEmeraldChittiData={handleSubmitEmeraldChittiData}
                handleCancelEmeraldChitti={handleCancelEmeraldChitti}
                handleDeleteEmeraldChitti={handleDeleteEmeraldChitti}
                showSubmitButtonAfterCreateChitti={
                  showSubmitButtonAfterCreateChitti
                }
                setClientGroupName={setClientGroupName}
                setStateForDocStatus={setStateForDocStatus}
                handleKeyDown={handleKeyDown}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EmeraldChittiMaster;
