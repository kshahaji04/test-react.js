import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ClientGroupListing from './ClientGroupListing';
import AddClientGroup from './AddClientGroup';
import UseClientGroupHook from '../../../../hooks/Master/client-group-hook';
import MasterSingleListingSearch from '../MasterSingleListingSearch';

const ClientGroup = () => {
  const { clientGroupList } = UseClientGroupHook();

  const [searchField, setSearchField] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
    setSearchField(e.target.value);
  };

  const filterList: any =
    clientGroupList?.length > 0 &&
    clientGroupList !== null &&
    clientGroupList.filter((value: any) => {
      return value.toLowerCase().includes(searchField?.toLowerCase());
    });

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
              <Tab eventKey="chitti-listing" title="Client Group List">
                <MasterSingleListingSearch
                  placeholder="Enter Client group"
                  HandleSearchInput={HandleSearchInput}
                />
                <ClientGroupListing clientGroupList={filterList} />
              </Tab>
              <Tab eventKey="longer-tab" title="Add Client Group">
                <AddClientGroup />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGroup;
