import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MasterSingleListingSearch from '../MasterSingleListingSearch';
import SingleItemListingInMaster from '../SingleItemListingInMaster';
import UseSupplierHook from '../../../../hooks/Master/Supplier-hook';
import CreateNewSupplierGroup from './CreateNewSupplierGroup';

const SupplierGroup = () => {
  const { supplierGroupList } = UseSupplierHook();

  const [searchField, setSearchField] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
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
                HandleSearchInput={HandleSearchInput}
                listingData={filterList}
              />
              <SingleItemListingInMaster
                listingData={filterList}
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
