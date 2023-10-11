import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import HuidProductListing from './HuidProductListing';
import AddHuidProduct from './AddHuidProduct';
import UseHuidProductHook from '../../../../hooks/Master/huid-product-hook';
import MasterSingleListingSearch from '../MasterSingleListingSearch';

const HuidProductMaster = () => {
  const { huidProductData }: any = UseHuidProductHook();

  const [searchField, setSearchField] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
    console.log('inp', e.target.value);
    setSearchField(e.target.value);
  };

  const filterList: any =
    huidProductData?.length > 0 &&
    huidProductData !== null &&
    huidProductData.filter((value: any) => {
      return value.toLowerCase().includes(searchField?.toLowerCase());
    });
  console.log('handle', filterList);

  return (
    <div className="container">
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs tab-container">
            <Tabs
              defaultActiveKey="chitti-listing"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              <Tab eventKey="chitti-listing" title="Add HUID Product">
                <AddHuidProduct />
              </Tab>
              <Tab eventKey="longer-tab" title="HUID Product Listing">
                <MasterSingleListingSearch
                  placeholder="Enter HUID Product"
                  HandleSearchInput={HandleSearchInput}
                />
                <HuidProductListing huidProductData={filterList} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuidProductMaster;
