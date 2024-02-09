import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ClientNameListing from './ClientNameListing';
import AddClient from './AddClient';

import UseClientGroupHook from '../../../../hooks/Master/client-group-hook';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';

const ClientName = () => {
  const { clientGroupList, clientNameClientGroupList }: any =
    UseClientGroupHook();

  console.log('clientNameClientGroupList', clientNameClientGroupList);

  const [inputName, setInputName] = useState('');
  const [inputGroup, setInputGroup] = useState('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };

  const handleInputChange1 = (event: any) => {
    setInputName(event.target.value);
  };

  const handleInputChange2 = (event: any) => {
    setInputGroup(event.target.value);
  };

  const filteredList: any =
    clientNameClientGroupList?.length > 0 &&
    clientNameClientGroupList !== null &&
    clientNameClientGroupList.filter(
      (client: any) =>
        client.name.toLowerCase().includes(inputName.toLowerCase()) &&
        client.client_group.toLowerCase().includes(inputGroup.toLowerCase())
    );

  console.log('ClientFilterList updated', filteredList);
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
            <Tab eventKey="default-tab" title="Client Name List">
              <MasterMultipleListingSearch
                placeholder1="Client name"
                placeholder2="Client group"
                handleInputChange1={handleInputChange1}
                handleInputChange2={handleInputChange2}
                listingData={filteredList}
                tableViewData={tableViewData}

              />
              <ClientNameListing clientNameClientGroupList={filteredList} tableViewData={tableViewData} HandleTableViewRows={HandleTableViewRows} />
            </Tab>
            <Tab eventKey="longer-tab" title="Add Client">
              <AddClient clientGroupList={clientGroupList} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>

  );
};

export default ClientName;
