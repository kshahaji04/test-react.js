import { Tab, Tabs } from 'react-bootstrap';
import CreatePurchaseReceiptMaster from './CreatePurchaseReceipt/CreatePurchaseReceiptMaster';
import usePurchaseReceiptMasterHook from '../../hooks/PurchaseReceiptHook/purchase-receipt-master-hook';
import { useState } from 'react';
import ListingFilterSection from '../Chitti/ChittiListing/SearchListingTable';
import ListingTable from '../General/ListingTable';

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
    userRolesData
  } = usePurchaseReceiptMasterHook();
  // console.log('ListingTable', listingData);

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
    listingData?.length > 0 &&
      listingData !== null &&
      (searchInputValues.submitted_date ||
        searchInputValues.from_date ||
        searchInputValues.to_date ||
        searchInputValues.chitti_no ||
        searchClientName ||
        searchInputValues.status)
      ? listingData.filter((item: any) => {
        const fromDateAndToDateMatch =
          searchInputValues.from_date && searchInputValues.to_date
            ? item.date >= searchInputValues.from_date &&
            item.date <= searchInputValues.to_date
            : true;
        const numberMatch = searchInputValues.chitti_no
          ? item?.chitti_no?.includes(searchInputValues.chitti_no)
          : true;
        const clientNameMatch = searchClientName
          ? item?.karigar_name
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
      : listingData;

  console.log("userRolesData", userRolesData)

  return (
    <div className="container mt-3">
      <div className="">

        <div className="row justify-content-center chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="purchase-listing"
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
                  setSearchclientName={setSearchclientName}
                  searchClientName={searchClientName}
                  searchInputValues={searchInputValues}

                />
                <ListingTable tableListingData={filteredList} userRolesData={userRolesData} />
              </div>
            </Tab>


            {(userRolesData?.length > 0 && userRolesData.some((roles: any) => roles.includes("Save Access")) || userRolesData?.length > 0 && userRolesData.some((roles: any) => roles.includes("Save Submit Access"))) && (
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
