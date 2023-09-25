import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateChitti from './CreateChitti';
import ChallanItemsTable from './ChallanItemsTable';
import NarrationTable from './NarrationTable';

const Chitti = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs">
            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="profile" title="Chitti Listing"></Tab>
              <Tab eventKey="longer-tab" title="Create Chitti">
                <CreateChitti />
                <ChallanItemsTable />
                <NarrationTable />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chitti;
