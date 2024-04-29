import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MasterSingleListingSearch from '../MasterSingleListingSearch';
import SingleItemListingInMaster from '../SingleItemListingInMaster';
import useSupplierHook from '../../../../hooks/Master/Supplier-hook';
import CreateNewSupplierGroup from './CreateNewSupplierGroup';

const SupplierGroup = () => {
  const { supplierGroupList } = useSupplierHook();

  const [searchField, setSearchField] = useState<any>('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const handleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  const handleSearchInput: any = (e: any) => {
    setSearchField(e.target.value);
  };

  const filterList: any =
    supplierGroupList?.length > 0 &&
    supplierGroupList !== null &&
    supplierGroupList.filter((value: any) => {
      return value?.toLowerCase()?.includes(searchField?.toLowerCase());
    });

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-lg-9 chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="chitti-listing"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            {' '}
            <Tab eventKey="chitti-listing" title="Supplier Group List">
              <MasterSingleListingSearch
                placeholder="Client group"
                handleSearchInput={handleSearchInput}
                listingData={filterList}
                tableViewData={tableViewData}
              />
              <SingleItemListingInMaster
                listingData={filterList}
                handleTableViewRows={handleTableViewRows}
                tableViewData={tableViewData}
                heading="Supplier Group"
              />
            </Tab>
            <Tab eventKey="longer-tab" title="Add Supplier Group">
              <CreateNewSupplierGroup />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SupplierGroup;
