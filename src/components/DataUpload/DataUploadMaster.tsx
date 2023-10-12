import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import DataUpload from './DataUpload/DataUpload';
import { useState } from 'react';
import '../../Style/data-upload.css';
import UseDataUploadHook from '../../hooks/dataUpload/data-upload-hook';
import EmeraldSupplierList from './ViewUpload/EmeraldSupplierList';
import '../../Style/data-upload.css';

const DataUploadMaster = () => {
  const { supplierList, HandleSupplier, emeraldSupplierData } =
    UseDataUploadHook();
  console.log('emeraldSupplierData in master', emeraldSupplierData);
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
              <Tab eventKey="chitti-listing" title="New Upload">
                <DataUpload
                  supplierList={supplierList}
                  HandleSupplier={HandleSupplier}
                />
              </Tab>
              <Tab eventKey="longer-tab" title="View uploaded list">
                <EmeraldSupplierList
                  supplierList={supplierList}
                  emeraldSupplierData={emeraldSupplierData}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataUploadMaster;
