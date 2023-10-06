import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import DataUpload from './DataUpload/DataUpload';
import ViewUploadedList from './ViewUpload/ViewUploadedList';
import { useState } from 'react';
import ListingTable from '../ListingTable';
import '../../Style/data-upload.css';
import UseDataUploadHook from '../../hooks/dataUpload/data-upload-hook';

const DataUploadMaster = () => {

  const { supplierList } = UseDataUploadHook();

  // const [showButtons, setShowButtons] = useState<any>(false)
  const TableListingData: any = [
    { No: 1, TRANSFERID: "DTR-100040026	", RFID: "300163904", SKUNUMBER: "TSKU-0300163904	", PACKAGEID: "draft", Photonumber: "SPS1539-06A" },
    { No: 2, TRANSFERID: "DTR-100040026	", RFID: "300163904", SKUNUMBER: "TSKU-0300163904	", PACKAGEID: "draft", Photonumber: "SPS1539-06A" },
    { No: 3, TRANSFERID: "DTR-100040026	", RFID: "300163904", SKUNUMBER: "TSKU-0300163904	", PACKAGEID: "draft", Photonumber: "SPS1539-06A" },
    { No: 4, TRANSFERID: "DTR-100040026	", RFID: "300163904", SKUNUMBER: "TSKU-0300163904	", PACKAGEID: "draft", Photonumber: "SPS1539-06A" },

  ];
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs">
            <Tabs
              defaultActiveKey="chitti-listing"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              <Tab eventKey="chitti-listing" title="Upload">
                <DataUpload supplierList={supplierList} />
              </Tab>
              <Tab eventKey="longer-tab" title="View uploaded list">
                {/* <ViewUploadedList /> */}
                <ListingTable tableListingData={TableListingData} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataUploadMaster;
