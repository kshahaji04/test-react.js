import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AddHuidProduct from './AddHuidProduct';
import UseHuidProductHook from '../../../../hooks/Master/huid-product-hook';

import HuidProductListing from './HuidProductListing';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';

const HuidProductMaster = () => {
  const { huidProductData }: any = UseHuidProductHook();

  const [inputName, setInputName] = useState('');
  const [inputPcs, setInputPcs] = useState('');

  const handleInputChange1 = (event: any) => {
    setInputName(event.target.value);
  };

  const handleInputChange2 = (event: any) => {
    setInputPcs(event.target.value);
  };
  console.log('huidDataFromStore in tex', huidProductData);
  const filteredList: any = huidProductData || [];

  // Now you can apply additional filters if needed
  const filteredListWithAdditionalFilters: any =
    filteredList.length > 0 &&
    filteredList.filter((client: any) => {
      const titleMatch = client?.title
        ?.toLowerCase()
        ?.includes(inputName?.toLowerCase());

      // Check if custom_hm_pcs is a valid number
      const clientPcs = Number(client?.custom_hm_pcs);
      const inputPcsValue = Number(inputPcs);

      // Check if both conversions were successful and values match, or inputPcsValue is 0
      const pcsMatch =
        (!isNaN(clientPcs) &&
          !isNaN(inputPcsValue) &&
          clientPcs === inputPcsValue) ||
        inputPcsValue === 0;

      return titleMatch && pcsMatch;
    });

  return (
    <div className="container">

      <div className="row justify-content-center mt-3">
        <div className="col-lg-9 chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="default-list"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            <Tab eventKey="default-list" title="HUID Product List">
              <MasterMultipleListingSearch
                placeholder1="Huid product"
                placeholder2="Hm pcs"
                handleInputChange1={handleInputChange1}
                handleInputChange2={handleInputChange2}
              />

              <HuidProductListing
                listingData={filteredListWithAdditionalFilters}
              />
            </Tab>
            <Tab eventKey="longer-tab" title="Add HUID Product">
              <AddHuidProduct />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HuidProductMaster;
