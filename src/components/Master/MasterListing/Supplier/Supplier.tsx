import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useSupplierHook from '../../../../hooks/Master/Supplier-hook';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';

import AddSupplier from './AddSupplier';
import MasterTableListing from '../../MasterTableListing';

const Supplier = () => {
  const { supplierNameSupplierGroupList, supplierGroupList }: any =
    useSupplierHook();

  const [inputName, setInputName] = useState('');
  const [inputGroup, setInputGroup] = useState('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const handleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
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
        client?.name?.toLowerCase()?.includes(inputName?.toLowerCase()) &&
        client?.supplier_group
          ?.toLowerCase()
          ?.includes(inputGroup?.toLowerCase())
    );

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
                listingData={filteredList}
                tableViewData={tableViewData}
              />
              <MasterTableListing
                filteredList={filteredList}
                handleTableViewRows={handleTableViewRows}
                tableViewData={tableViewData}
                dropdownData={supplierGroupList}
              />
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
