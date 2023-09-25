import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateChitti from './CreateChitti';
import ChallanItemsTable from './ChallanItemsTable';
import NarrationTable from './NarrationTable';

import React from 'react';
import ChittiListing from './ChittiListing';

const Chitti = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs">
            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="profile" title="Chitti Listing"></Tab>
              <Tab eventKey="longer-tab" title="Create Chitti">
                <CreateChitti />
                <ChallanItemsTable />
                <NarrationTable />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="container mt-5">
          <h4 className="text-center">Chitti Listing</h4>
          <div className="row justify-content-center mt-4">
            <div className="col-md-2">
              <input
                type="text"
                className="form-control input-fields"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Date"
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control input-fields"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Customer"
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control input-fields"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Item"
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn search-btn w-75">
                Search
              </button>
            </div>
          </div>
          <ChittiListing />
        </div>
      </div>
    </>
  );
};

export default Chitti;
