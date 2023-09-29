import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import EmeraldListing from './EmeraldListing/EmeraldListing';
import CreateEmeraldChittiMaster from './CreateEmeraldChitti/CreateEmeraldChittiMaster';

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
              <CreateEmeraldChittiMaster />

            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EmeraldChittiMaster;
