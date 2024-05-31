
import { Tab, Tabs } from 'react-bootstrap';

const SalesReturnMaster = () => {
  return <div className="container mt-3">
    <div className="">
      <div className="row justify-content-center chitti-nav-tabs tab-container">
        <Tabs
          defaultActiveKey="sales-listing"
          id="justify-tab-example"
          className="w-75 border-0"
          justify
        >
          <Tab eventKey="sales-listing" title="Sales Return List">
            <div className="col-xl-9 col-md-12 col-12 mx-auto  ">
              dsada
              {/* <SearchListingTable
            handleSearchInput={handleSearchInput}
            clientNameList={clientNameList}
            chittiListingData={chittiListingData}
            setSearchclientName={setSearchclientName}
            searchClientName={searchClientName}
            searchInputValues={searchInputValues}
          /> */}
              {/* <ListingTable
            tableListingData={filteredList}
            setTableData={setTableData}
            subCategoryList={subCategoryList}
            narrationTableData={narrationTableData}
            setNarrationTableData={setNarrationTableData}
            productList={productList}
            selectedDropdownValue={selectedDropdownValue}
            drowpdownlist={clientNameList}
            handleSubmitChittiData={handleSubmitChallanChitti}
          /> */}
            </div>
          </Tab>
          <Tab eventKey="longer-tab" title="Create Sales Return">
            <div className="col-lg-9 col-12 mx-auto mt-2">
              create section
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
};

export default SalesReturnMaster;
