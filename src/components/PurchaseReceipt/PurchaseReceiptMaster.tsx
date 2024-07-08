import { Tab, Tabs } from 'react-bootstrap';
import usePurchaseReceiptMasterHook from '../../hooks/PurchaseReceiptHook/purchase-receipt-master-hook';
import useListingFilterHook from '../../hooks/listing-filter-hook';
import ListingFilterSection from '../Chitti/ChittiListing/SearchListingTable';
import ListingTable from '../General/ListingTable';
import CreatePurchaseReceiptMaster from './CreatePurchaseReceipt/CreatePurchaseReceiptMaster';

const PurchaseReceiptMaster = () => {
  const {
    purchaseReceiptTable,
    setPurchaseReceiptTable,
    handlePurchaseTableFieldChange,
    handleDeleteRow,
    subCategoryList,
    handleAddRow,
    amountValue,
    handleKeyDown,
    handlePRTopSectionData,
    clientNameList,
    topSectionInputData,
    handleCreatePR,
    listingData,
    userRolesData,
  } = usePurchaseReceiptMasterHook();

  const {
    searchClientName,
    setSearchClientName,
    searchInputValues,
    handleSearchInput,
    filteredList,
  } = useListingFilterHook(listingData);

  return (
    <div className="container mt-3">
      <div className="">
        <div className="row justify-content-center chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="longer-tab"
            id="justify-tab-example"
            className="w-75 border-0"
            justify
          >
            <Tab eventKey="purchase-listing" title="Purchase Receipt List">
              <div className="col-xl-11 col-md-12 col-12 mx-auto  ">
                <ListingFilterSection
                  handleSearchInput={handleSearchInput}
                  clientNameList={clientNameList}
                  chittiListingData={listingData}
                  setSearchclientName={setSearchClientName}
                  searchClientName={searchClientName}
                  searchInputValues={searchInputValues}
                />
                <ListingTable
                  tableListingData={filteredList}
                  userRolesData={userRolesData}
                />
              </div>
            </Tab>

            {((userRolesData?.length > 0 &&
              userRolesData.some((roles: any) =>
                roles.includes('Save Access')
              )) ||
              (userRolesData?.length > 0 &&
                userRolesData.some((roles: any) =>
                  roles.includes('Save Submit Access')
                ))) && (
                <Tab eventKey="longer-tab" title="Create Purchase Receipt">
                  <div className="col-lg-9 col-12 mx-auto mt-2">
                    <CreatePurchaseReceiptMaster
                      purchaseReceiptTable={purchaseReceiptTable}
                      setPurchaseReceiptTable={setPurchaseReceiptTable}
                      handlePurchaseTableFieldChange={
                        handlePurchaseTableFieldChange
                      }
                      handlePRTopSectionData={handlePRTopSectionData}
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
              )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PurchaseReceiptMaster;
