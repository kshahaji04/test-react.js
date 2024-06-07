import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useSalesReturnMasterHook from '../../hooks/SalesReturn/sales-return-master-hook';
import ListingFilterSection from '../Chitti/ChittiListing/SearchListingTable';

import CreateSalesReturnMaster from './CreateSalesReturn/CreateSalesReturnMaster';
import ListingTable from '../General/ListingTable';

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
  } = useSalesReturnMasterHook();
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
                  setSearchclientName={setSearchclientName}
                  searchClientName={searchClientName}
                  searchInputValues={searchInputValues}
                />
                <ListingTable tableListingData={filteredList} />
              </div>
            </Tab>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SalesReturnMaster;
