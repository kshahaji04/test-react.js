import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ClientNameListing from './ClientNameListing';
import AddClient from './AddClient';
import UseClientNameHook from '../../../../hooks/Master/client-name-hook';



const ClientName = () => {
  const { clientNameList }: any = UseClientNameHook();
  // const {clientGroupList}:any = UseClientGroupHook();
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
              <Tab eventKey="chitti-listing" title="Add Client">
                <AddClient/>
              </Tab>
              <Tab eventKey="longer-tab" title="Client Name Listing">
                <ClientNameListing clientNameList={clientNameList} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientName;
