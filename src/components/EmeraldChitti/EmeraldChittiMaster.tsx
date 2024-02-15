import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import CreateEmeraldChittiMaster from './CreateEmeraldChitti/CreateEmeraldChittiMaster';
import UseEmeraldHook from '../../hooks/Emerald/emrald-page-hook';
import UseSubCategoryHook from '../../hooks/Master/sub-category-hook';
import SearchListingTable from '../Chitti/ChittiListing/SearchListingTable';
import { useState } from 'react';
import ListingTable from '../ChittiListing/ListingTable';


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
    HandleAddRow,
    tableData,
    setTableData,
    HandleDeleteRow,
    HandleEmptyEmeraldChitti,
    HandleSubmitEmeraldChittiData,
    HandleCancelEmeraldChitti,
    HandleDeleteEmeraldChitti,
    showSubmitButtonAfterCreateChitti,
    clientGroupName,
    setClientGroupName,
    setStateForDocStatus,
    handleKeyDown
  }: any = UseEmeraldHook();

  // const { HandleAddRow, tableData, setTableData, HandleDeleteRow }: any = UseCustomEmeraldChittiHook()
  const { subCategoryList }: any = UseSubCategoryHook();

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

  const HandleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  console.log('searchh emerald chitti', searchInputValues, emeraldChittiData);
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
            ? item.date >= searchInputValues.from_date && item.date <= searchInputValues.to_date
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
              <div className='col-xl-9 col-md-12 col-12  mx-auto'>
                <SearchListingTable
                  HandleSearchInput={HandleSearchInput}
                  clientNameList={clientNameList}
                  setSearchclientName={setSearchclientName}
                  searchClientName={searchClientName}
                  searchInputValues={searchInputValues}
                />{' '}
                <ListingTable tableListingData={filteredList} HandleSubmitChittiData={HandleSubmitEmeraldChittiData} />
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
                clientGroupName={clientGroupName}
                clientNameList={clientNameList}
                currentDate={currentDate}
                handleDateChange={handleDateChange}
                transactionDate={transactionDate}
                tableData={tableData}
                setTableData={setTableData}
                HandleAddRow={HandleAddRow}
                HandleDeleteRow={HandleDeleteRow}
                subCategoryList={subCategoryList}
                productItemList={productItemList}
                HandleEmptyEmeraldChitti={HandleEmptyEmeraldChitti}
                HandleSubmitEmeraldChittiData={HandleSubmitEmeraldChittiData}
                HandleCancelEmeraldChitti={HandleCancelEmeraldChitti}
                HandleDeleteEmeraldChitti={HandleDeleteEmeraldChitti}
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
