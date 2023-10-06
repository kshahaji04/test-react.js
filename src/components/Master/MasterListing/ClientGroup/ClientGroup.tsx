import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ClientGroupListing from './ClientGroupListing';
import AddClientGroup from './AddClientGroup';
import UseClientGroupHook from '../../../../hooks/Master/client-group-hook';

const ClientGroup = () => {
  const { clientGroupList } = UseClientGroupHook();

  return (
    <div className="container">
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs tab-container">
            <Tabs
              defaultActiveKey="chitti-listing"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              {' '}
              <Tab eventKey="chitti-listing" title="Add Client Group">
                <AddClientGroup />
              </Tab>
              <Tab eventKey="longer-tab" title="Client Group Listing">
                <ClientGroupListing clientGroupList={clientGroupList} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGroup;
