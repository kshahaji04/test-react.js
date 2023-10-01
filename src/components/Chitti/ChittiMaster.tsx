import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ChittiListing from './ChittiListing/ChittiListing';
import CreateChittiMaster from './CreateChitti/CreateChittiMaster';
import SearchChittiListing from './ChittiListing/SearchChittiListing';
import ListingTable from '../ListingTable';

const Chitti = () => {

  const TableListingData: any = [
    { No: 1, Date: "20/09/2023", Chitti_no: "001", Client_name: "john", Status: "draft" },
    { No: 2, Date: "20/09/2023", Chitti_no: "002", Client_name: "Reena", Status: "submitted" },
    { No: 3, Date: "20/09/2023", Chitti_no: "003", Client_name: "Seema", Status: "draft" },
    { No: 4, Date: "20/09/2023", Chitti_no: "004", Client_name: "john", Status: "draft" },
  ];


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
                  <ListingTable tableListingData={TableListingData} />
                  {/* <ChittiListing /> */}

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
