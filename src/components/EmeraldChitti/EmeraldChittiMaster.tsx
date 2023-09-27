import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import EmeraldCreateChitti from './CreateEmeraldChitti/EmeraldCreateChitti';
import EmeraldChittiTable from './CreateEmeraldChitti/EmeraldChittiTable';
import EmeraldListing from './EmeraldListing/EmeraldListing';

const EmeraldChittiMaster = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-12 chitti-nav-tabs">
          <Tabs
            defaultActiveKey="chitti-listing"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            <Tab eventKey="chitti-listing" title="Emerald Chitti Listing">
              <div className="container">
                <h4 className="text-center mt-2">Emerald Listing</h4>
                <EmeraldListing />
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Create Emerald Chitti">
              <EmeraldCreateChitti />
              <EmeraldChittiTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EmeraldChittiMaster;
