import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ChittiListing from './ChittiListing/ChittiListing';
import CreateChittiMaster from './CreateChitti/CreateChittiMaster';
import SearchChittiListing from './ChittiListing/SearchChittiListing';

const Chitti = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs tab-container">
            <Tabs
              defaultActiveKey="chitti-listing"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              <Tab eventKey="chitti-listing" title="Chitti Listing">
                <div className="container">
                  <h4 className="text-center mt-2">Chitti Listing</h4>
                  <SearchChittiListing />
                  <ChittiListing />
                </div>
              </Tab>
              <Tab eventKey="longer-tab" title="Create Chitti">
                <CreateChittiMaster />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chitti;
