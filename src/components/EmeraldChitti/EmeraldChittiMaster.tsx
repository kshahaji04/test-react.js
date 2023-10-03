import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import EmeraldListing from './EmeraldListing/EmeraldListing';
import CreateEmeraldChittiMaster from './CreateEmeraldChitti/CreateEmeraldChittiMaster';
import ListingTable from '../ListingTable';
import useChittiHook from '../../hooks/Chitti/chitti-page-hook';

const EmeraldChittiMaster = () => {
  const EmbededTableListingData: any = [
    {
      No: 1,
      Sub_category: '20/09/2023',
      product: '001',
      Gross_weight: 'john',
      Amount: 'draft',
    },
    {
      No: 2,
      Sub_category: '20/09/2023',
      product: '001',
      Gross_weight: 'john',
      Amount: 'draft',
    },
    {
      No: 3,
      Sub_category: '20/09/2023',
      product: '001',
      Gross_weight: 'john',
      Amount: 'draft',
    },
    {
      No: 4,
      Sub_category: '20/09/2023',
      product: '001',
      Gross_weight: 'john',
      Amount: 'draft',
    },
  ];
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
                {/* <EmeraldListing /> */}
                <ListingTable tableListingData={EmbededTableListingData} />
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
