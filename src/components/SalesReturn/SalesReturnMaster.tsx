import { Tab, Tabs } from 'react-bootstrap';
import useSalesReturnMasterHook from '../../hooks/SalesReturn/sales-return-master-hook';
import ListingFilterSection from '../Chitti/ChittiListing/SearchListingTable';
import useListingFilterHook from '../../hooks/listing-filter-hook';
import ListingTable from '../General/ListingTable';
import CreateSalesReturnMaster from './CreateSalesReturn/CreateSalesReturnMaster';

const SalesReturnMaster = () => {
  const {
    salesReturnTable,
    setSalesReturnTable,
    handlePurchaseTableFieldChange,
    handleDeleteRow,
    subCategoryList,
    handleAddRow,
    amountValue,
    handleKeyDown,
    handleSRTopSectionData,
    clientNameList,
    topSectionInputData,
    handleCreatePR,
    listingData,
    userRolesData
  } = useSalesReturnMasterHook();

  const {
    searchClientName,
    setSearchClientName,
    searchInputValues,
    handleSearchInput,
    filteredList,
  } = useListingFilterHook(listingData);

  const userRoleWiseShow: any = () => {
    let userRoleHasSaveAccess: any = userRolesData?.length > 0 && userRolesData.some((roles: any) => roles.includes("Save Access"))
    let userRoleHasSaveSubmitAccess: any = userRolesData?.length > 0 && userRolesData.some((roles: any) => roles.includes("Save Submit Access"))

    if ((userRoleHasSaveAccess || userRoleHasSaveSubmitAccess)) {
      return (
        <Tab eventKey="longer-tab" title="Create Sales Return">
          <div className="col-lg-9 col-12 mx-auto mt-2">
            <CreateSalesReturnMaster
              salesReturnTable={salesReturnTable}
              setSalesReturnTable={setSalesReturnTable}
              handlePurchaseTableFieldChange={
                handlePurchaseTableFieldChange
              }
              handleSRTopSectionData={handleSRTopSectionData}
              subCategoryList={subCategoryList}
              handleAddRow={handleAddRow}
              handleDeleteRow={handleDeleteRow}
              amountValue={amountValue}
              handleKeyDown={handleKeyDown}
              clientNameList={clientNameList}
              topSectionInputData={topSectionInputData}
              handleCreatePR={handleCreatePR}
            />
          </div>
        </Tab>
      )
    }
  }

  return (
    <div className="container mt-3">
      <div className="">
        <div className="row justify-content-center chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="SR-listing"
            id="justify-tab-example"
            className="w-75 border-0"
            justify
          >
            <Tab eventKey="SR-listing" title="Sales Return List">
              <div className="col-xl-11 col-md-12 col-12 mx-auto  ">
                <ListingFilterSection
                  handleSearchInput={handleSearchInput}
                  clientNameList={clientNameList}
                  chittiListingData={listingData}
                  setSearchclientName={setSearchClientName}
                  searchClientName={searchClientName}
                  searchInputValues={searchInputValues}
                />
                <ListingTable tableListingData={filteredList} userRolesData={userRolesData} />
              </div>
            </Tab>
            {userRoleWiseShow()}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SalesReturnMaster;
