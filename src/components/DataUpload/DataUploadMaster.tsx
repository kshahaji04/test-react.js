import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import DataUpload from './DataUpload/DataUpload';
import '../../Style/data-upload.css';
import UseDataUploadHook from '../../hooks/dataUpload/data-upload-hook';
import EmeraldSupplierList from './ViewUpload/EmeraldSupplierList';
import '../../Style/data-upload.css';
import MasterEmeraldShilpi from './EmeraldShilpi/MasterEmeraldShilpi';

const DataUploadMaster = () => {
  const { supplierList, emeraldSupplierData } = UseDataUploadHook();

  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12 chitti-nav-tabs">
            <Tabs
              defaultActiveKey="default-tab"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              <Tab eventKey="chitti-listing" title="Create Emerald Supplier">
                <DataUpload
                // supplierList={supplierList}
                // HandleSupplier={HandleSupplier}
                />
              </Tab>
              <Tab eventKey="default-tab" title="Emerald Supplier list">
                <EmeraldSupplierList
                  supplierList={supplierList}
                  emeraldSupplierData={emeraldSupplierData}
                />
              </Tab>
              <Tab eventKey="longer-tb" title="Emerald shilpi List">
                <MasterEmeraldShilpi />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataUploadMaster;
