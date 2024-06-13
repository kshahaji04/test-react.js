import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useClientGroupHook from '../../../../hooks/Master/client-group-hook';
import MasterSingleListingSearch from '../MasterSingleListingSearch';
import MasterTableListing from '../../MasterTableListing';
import AddClientGroup from './AddClientGroup';

const ClientGroup = () => {
  const { clientGroupList } = useClientGroupHook();

  const [searchField, setSearchField] = useState<any>('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const handleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };

  const handleSearchInput: any = (e: any) => {
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
      <div className="row justify-content-center mt-2">
        <div className="col-lg-9 chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="chitti-listing"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            <Tab eventKey="chitti-listing" title="Client Group List">
              <MasterSingleListingSearch
                placeholder="Client group"
                handleSearchInput={handleSearchInput}
                listingData={filterList}
                tableViewData={tableViewData}
              />
              <MasterTableListing
                filteredList={filterList}
                handleTableViewRows={handleTableViewRows}
                tableViewData={tableViewData}
                heading="Client Group"
              />
            </Tab>
            <Tab eventKey="longer-tab" title="Add Client Group">
              <AddClientGroup />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ClientGroup;
