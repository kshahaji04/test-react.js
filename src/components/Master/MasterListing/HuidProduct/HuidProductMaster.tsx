import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import HuidProductListing from './HuidProductListing';
import AddHuidProduct from './AddHuidProduct';
import UseHuidProductHook from '../../../../hooks/Master/huid-product-hook';

const HuidProductMaster = () => {

  const { huidProductData }: any = UseHuidProductHook();
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
                <HuidProductListing huidProductData={huidProductData} />
              </Tab>

            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuidProductMaster;
