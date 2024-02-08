import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';
import SupplierListing from './SupplierListing';
import UseSupplierHook from '../../../../hooks/Master/Supplier-hook';
import AddSupplier from './AddSupplier';

const Supplier = () => {
  const { supplierNameSupplierGroupList, supplierGroupList }: any =
    UseSupplierHook();

  console.log(
    'supplierNameSupplierGroupList',
    supplierNameSupplierGroupList,
    supplierGroupList
  );

  const [inputName, setInputName] = useState('');
  const [inputGroup, setInputGroup] = useState('');

  const handleInputChange1 = (event: any) => {
    setInputName(event.target.value);
  };

  const handleInputChange2 = (event: any) => {
    setInputGroup(event.target.value);
  };

  const filteredList: any =
    supplierNameSupplierGroupList?.length > 0 &&
    supplierNameSupplierGroupList !== null &&
    supplierNameSupplierGroupList.filter(
      (client: any) =>
        client.name?.toLowerCase()?.includes(inputName?.toLowerCase()) &&
        client.supplier_group
          ?.toLowerCase()
          ?.includes(inputGroup?.toLowerCase())
    );

  console.log('ClientFilterList updated', filteredList);
  return (
    <div className="container">

      <div className="row justify-content-center mt-3">
        <div className="col-lg-9 chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="default-tab"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            <Tab eventKey="default-tab" title="Supplier List">
              <MasterMultipleListingSearch
                placeholder1="Supplier name"
                placeholder2="supplier group"
                handleInputChange1={handleInputChange1}
                handleInputChange2={handleInputChange2}
              />
              <SupplierListing listingData={filteredList} />
            </Tab>
            <Tab eventKey="longer-tab" title="Add Supplier">
              <AddSupplier GroupListdata={supplierGroupList} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
