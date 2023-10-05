import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateChittiMaster from './CreateChitti/CreateChittiMaster';
import SearchChittiListing from './ChittiListing/SearchChittiListing';

import UseChittiHook from '../../hooks/Chitti/chitti-page-hook';
import ListingTable from '../ListingTable';

const ChittiMaster = () => {
  const {
    chittiListingData,
    HandleCreateChittiSubmit,
    currentDate,
    selectedDropdownValue,
    HandleGoldRate,
    HandleRemarks,
    tableData,
    setTableData,
    narrationTableData,
    setNarrationTableData,
    setSelectedDropdownValue,
    clientNameList,
    subCategoryList,
    productList,
    clientGroupList,
    HandleClientGroup,
  }: any = UseChittiHook();

  console.log('chittiListingData in master', chittiListingData);

  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs tab-container">
            <Tabs
              defaultActiveKey="chitti-listing"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              <Tab eventKey="chitti-listing" title="Chitti Listing">
                <div className="container">
                  <h4 className="text-center mt-2">Chitti Listing</h4>
                  <SearchChittiListing clientNameList={clientNameList} chittiListingData={chittiListingData} selectedDropdownValue={selectedDropdownValue} setSelectedDropdownValue={setSelectedDropdownValue} />
                  <ListingTable
                    tableListingData={chittiListingData}
                    setTableData={setTableData}
                    subCategoryList={subCategoryList}
                    narrationTableData={narrationTableData}
                    setNarrationTableData={setNarrationTableData}
                    productList={productList}
                    selectedDropdownValue={selectedDropdownValue}
                    drowpdownlist={clientNameList}
                  />
                </div>
              </Tab>
              <Tab eventKey="longer-tab" title="Create Chitti">
                <CreateChittiMaster
                  HandleCreateChittiSubmit={HandleCreateChittiSubmit}
                  currentDate={currentDate}
                  selectedDropdownValue={selectedDropdownValue}
                  HandleGoldRate={HandleGoldRate}
                  HandleRemarks={HandleRemarks}
                  tableData={tableData}
                  setTableData={setTableData}
                  narrationTableData={narrationTableData}
                  setNarrationTableData={setNarrationTableData}
                  setSelectedDropdownValue={setSelectedDropdownValue}
                  clientNameList={clientNameList}
                  subCategoryList={subCategoryList}
                  productList={productList}
                  clientGroupList={clientGroupList}
                  HandleClientGroup={HandleClientGroup}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChittiMaster;
