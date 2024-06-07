import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateChittiMaster from './CreateChitti/CreateChittiMaster';
import SearchListingTable from './ChittiListing/SearchListingTable';
import useChittiHook from '../../hooks/Chitti/chitti-page-hook';
import '../../Style/chitti.css';
import ListingTable from '../General/ListingTable';

const ChittiMaster = () => {
  const {
    chittiListingData,
    handleCreateChittiSubmit,
    currentDate,
    selectedDropdownValue,
    handleGoldRate,
    handleRemarks,
    tableData,
    setTableData,
    narrationTableData,
    setNarrationTableData,
    setSelectedDropdownValue,
    clientNameList,
    subCategoryList,
    productList,
    clientGroupList,
    handleClientGroup,
    handleDateChange,
    date,
    setStateForDocStatus,
    stateForDocStatus,
    handleEmptyChallanChittiTable,
    goldRate,
    remarks,
    showSubmitButtonAfterCreateChitti,
    handleSubmitChallanChitti,
    handleCancelChallanChitti,
    handleDeleteChallanChitti,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    checkGrossAndNetWeight,
    setCheckGrossAndNetWeight,
  }: any = useChittiHook();

  // console.log('chittiListingData', chittiListingData);

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
    chittiListingData?.length > 0 &&
    chittiListingData !== null &&
    (searchInputValues.submitted_date ||
      searchInputValues.from_date ||
      searchInputValues.to_date ||
      searchInputValues.chitti_no ||
      searchClientName ||
      searchInputValues.status)
      ? chittiListingData.filter((item: any) => {
          // const submittedDateMatch = searchInputValues.submitted_date
          //   ? item?.submitted_date?.includes(searchInputValues.submitted_date)
          //   : true;
          const fromDateAndToDateMatch =
            searchInputValues.from_date && searchInputValues.to_date
              ? item.date >= searchInputValues.from_date &&
                item.date <= searchInputValues.to_date
              : true;
          const numberMatch = searchInputValues.chitti_no
            ? item?.chitti_no?.includes(searchInputValues.chitti_no)
            : true;
          const clientNameMatch = searchClientName
            ? item?.client_name
                ?.toLowerCase()
                ?.includes(searchClientName.toLowerCase())
            : true;

          if (searchInputValues.status === 'Draft') {
            return (
              item?.docstatus === 0 &&
              // submittedDateMatch &&
              fromDateAndToDateMatch &&
              numberMatch &&
              clientNameMatch
            );
          } else if (searchInputValues.status === 'Submitted') {
            return (
              item?.docstatus === 1 &&
              // submittedDateMatch &&
              fromDateAndToDateMatch &&
              numberMatch &&
              clientNameMatch
            );
          } else if (searchInputValues.status === 'Cancel') {
            return (
              item?.docstatus === 2 &&
              // submittedDateMatch &&
              fromDateAndToDateMatch &&
              numberMatch &&
              clientNameMatch
            );
          }
          return (
            // submittedDateMatch &&
            fromDateAndToDateMatch && numberMatch && clientNameMatch
          );
        })
      : chittiListingData;

  return (
    <>
      <div className="container mt-3">
        <div className="">
          <div className="row justify-content-center chitti-nav-tabs tab-container">
            <Tabs
              defaultActiveKey="chitti-listing"
              id="justify-tab-example"
              className="w-75 border-0"
              justify
            >
              <Tab eventKey="chitti-listing" title="Chitti List">
                <div className="col-xl-11 col-md-12 col-12 mx-auto  ">
                  <SearchListingTable
                    handleSearchInput={handleSearchInput}
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
                    handleSubmitChittiData={handleSubmitChallanChitti}
                  />
                </div>
              </Tab>
              <Tab eventKey="longer-tab" title="Create Chitti">
                <div className="col-lg-9 col-12 mx-auto mt-2">
                  <CreateChittiMaster
                    handleCreateChittiSubmit={handleCreateChittiSubmit}
                    currentDate={currentDate}
                    selectedDropdownValue={selectedDropdownValue}
                    handleGoldRate={handleGoldRate}
                    handleRemarks={handleRemarks}
                    tableData={tableData}
                    setTableData={setTableData}
                    narrationTableData={narrationTableData}
                    setNarrationTableData={setNarrationTableData}
                    setSelectedDropdownValue={setSelectedDropdownValue}
                    clientNameList={clientNameList}
                    subCategoryList={subCategoryList}
                    productList={productList}
                    clientGroupList={clientGroupList}
                    handleClientGroup={handleClientGroup}
                    handleDateChange={handleDateChange}
                    date={date}
                    stateForDocStatus={stateForDocStatus}
                    setStateForDocStatus={setStateForDocStatus}
                    handleEmptyChallanChittiTable={
                      handleEmptyChallanChittiTable
                    }
                    goldRate={goldRate}
                    remarks={remarks}
                    showSubmitButtonAfterCreateChitti={
                      showSubmitButtonAfterCreateChitti
                    }
                    handleSubmitChallanChitti={handleSubmitChallanChitti}
                    handleCancelChallanChitti={handleCancelChallanChitti}
                    handleDeleteChallanChitti={handleDeleteChallanChitti}
                    setTotalGrossWeightOfChallanTable={
                      setTotalGrossWeightOfChallanTable
                    }
                    setTotalHuidWeightOfHuidTable={
                      setTotalHuidWeightOfHuidTable
                    }
                    checkGrossAndNetWeight={checkGrossAndNetWeight}
                    setCheckGrossAndNetWeight={setCheckGrossAndNetWeight}
                  />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChittiMaster;
