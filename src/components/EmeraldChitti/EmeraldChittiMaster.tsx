import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import EmeraldListing from './EmeraldListing/EmeraldListing';
import CreateEmeraldChittiMaster from './CreateEmeraldChitti/CreateEmeraldChittiMaster';
import ListingTable from '../ListingTable';
import useChittiHook from '../../hooks/Chitti/chitti-page-hook';
import UseEmeraldHook from '../../hooks/Emerald/emrald-page-hook';
import UseSubCategoryHook from '../../hooks/Master/sub-category-hook';

const EmeraldChittiMaster = () => {
  const { emeraldChittiData, selectedDropdownValue, setSelectedDropdownValue, HandleClientGroup, HandleCreateEmeraldChittiSubmit, productItemList, clientGroupList, clientNameList, currentDate, handleDateChange, transactionDate, tableData, setTableData }: any = UseEmeraldHook();
  const { subCategoryList }: any = UseSubCategoryHook();
  // const { }: any = 

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-12 chitti-nav-tabs">
          <Tabs
            defaultActiveKey="chitti-listing"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            <Tab eventKey="chitti-listing" title="Emerald Chitti Listing">
              <div className="container">
                <h4 className="text-center mt-2">Emerald Listing</h4>
                {/* <EmeraldListing /> */}
                <ListingTable tableListingData={emeraldChittiData} />
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Create Emerald Chitti">
              <CreateEmeraldChittiMaster selectedDropdownValue={selectedDropdownValue} setSelectedDropdownValue={setSelectedDropdownValue}
                HandleClientGroup={HandleClientGroup} HandleCreateEmeraldChittiSubmit={HandleCreateEmeraldChittiSubmit} clientGroupList={clientGroupList}
                clientNameList={clientNameList} currentDate={currentDate}
                handleDateChange={handleDateChange} transactionDate={transactionDate}
                tableData={tableData} setTableData={setTableData} subCategoryList={subCategoryList}
                productItemList={productItemList}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EmeraldChittiMaster;
