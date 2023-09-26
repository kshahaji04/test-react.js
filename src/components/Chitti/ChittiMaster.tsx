import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ChittiListing from './ChittiListing/ChittiListing';
import CreateChittiMaster from './CreateChitti/CreateChittiMaster';

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
                  <div className="row justify-content-center mt-2">
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control input-fields custom-input-field "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Date"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control input-fields custom-input-field"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Customer"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control input-fields custom-input-field"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Item"
                      />
                    </div>
                    <div className="col-md-2 ">
                      <button
                        type="submit"
                        className="btn search-btn w-75 d-flex align-items-center justify-content-center chitti-listing-search-btn"
                      >
                        Search
                      </button>
                    </div>
                  </div>
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
