import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../Style/chitti.css';
import useChittiHook from '../../hooks/Chitti/chitti-page-hook';
import useListingFilterHook from '../../hooks/listing-filter-hook';
import ListingTable from '../General/ListingTable';
import SearchListingTable from '../General/SearchListingTable';
import CreateChittiMaster from './CreateChitti/CreateChittiMaster';

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

  const {
    searchClientName,
    setSearchClientName,
    searchInputValues,
    handleSearchInput,
    filteredList,
  } = useListingFilterHook(chittiListingData);

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
                    setSearchclientName={setSearchClientName}
                    searchClientName={searchClientName}
                    searchInputValues={searchInputValues}
                  />
                  <ListingTable tableListingData={filteredList} />
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
