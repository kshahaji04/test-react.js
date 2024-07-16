import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import useEmeraldChittiHook from '../../hooks/Emerald/emrald-page-hook';
import useSubCategoryHook from '../../hooks/Master/sub-category-hook';
import useListingFilterHook from '../../hooks/listing-filter-hook';
import SearchListingTable from '../General/SearchListingTable';
import ListingTable from '../General/ListingTable';
import CreateEmeraldChittiMaster from './CreateEmeraldChitti/CreateEmeraldChittiMaster';

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
    topSectionInputData,
  }: any = useEmeraldChittiHook();

  const { subCategoryList }: any = useSubCategoryHook();

  const {
    searchClientName,
    setSearchClientName,
    searchInputValues,
    handleSearchInput,
    filteredList,
  } = useListingFilterHook(emeraldChittiData);

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
              <div className="col-xl-11 col-md-12 col-12  mx-auto">
                <SearchListingTable
                  handleSearchInput={handleSearchInput}
                  clientNameList={clientNameList}
                  setSearchclientName={setSearchClientName}
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
                topSectionInputData={topSectionInputData}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EmeraldChittiMaster;
