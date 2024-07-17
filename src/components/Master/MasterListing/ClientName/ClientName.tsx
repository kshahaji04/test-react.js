import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useClientGroupHook from '../../../../hooks/Master/client-group-hook';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';
import AddClient from './AddClient';
import MasterTableListing from '../../MasterTableListing';

const ClientName = () => {
  const { clientGroupList, clientNameClientGroupList }: any =
    useClientGroupHook();

  const [inputName, setInputName] = useState('');
  const [inputGroup, setInputGroup] = useState('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const handleTableViewRows: any = (data: any) => {
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
        client?.name?.toLowerCase()?.includes(inputName.toLowerCase()) &&
        client?.client_group?.toLowerCase()?.includes(inputGroup.toLowerCase())
    );

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
              <MasterTableListing
                filteredList={filteredList}
                tableViewData={tableViewData}
                handleTableViewRows={handleTableViewRows}
                dropdownData={clientGroupList}
              />
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
