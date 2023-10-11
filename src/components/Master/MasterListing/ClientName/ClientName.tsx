import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ClientNameListing from './ClientNameListing';
import AddClient from './AddClient';
import UseClientNameHook from '../../../../hooks/Master/client-name-hook';
import UseClientGroupHook from '../../../../hooks/Master/client-group-hook';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';

const ClientName = () => {
  const { clientNameList }: any = UseClientNameHook();
  const { clientGroupList }: any = UseClientGroupHook();
  const [searchField, setSearchField] = useState<any>({
    input1: '',
    input2: '',
  });

  const HandleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchField({
      ...searchField,
      [name]: value,
    });
  };

  const ClientFilterList =
    clientNameList?.length > 0 &&
    clientNameList !== null &&
    clientNameList.filter((item: any) => {
      return item?.toLowerCase()?.includes(searchField?.input1?.toLowerCase());
    });

  const ClientGroupFilterList =
    clientGroupList?.length > 0 &&
    clientGroupList !== null &&
    clientGroupList.filter((item: any) => {
      return item?.toLowerCase()?.includes(searchField?.input2?.toLowerCase());
    });

  console.log('ClientFilterList', ClientFilterList, searchField);
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
                <AddClient clientGroupList={clientGroupList} />
              </Tab>
              <Tab eventKey="longer-tab" title="Client Name Listing">
                <MasterMultipleListingSearch
                  placeholder1="Enter Client name"
                  placeholder2="Enter Client group"
                  HandleSearchInput={HandleSearchInput}
                />
                <ClientNameListing
                  clientNameList={clientNameList}
                  clientGroupList={clientGroupList}
                  ClientFilterList={ClientFilterList}
                  ClientGroupFilterList={ClientGroupFilterList}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientName;
