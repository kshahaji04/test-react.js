import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AddCategory from './AddCategory';
import UseCategoryHook from '../../../../hooks/Master/category-hook';
import MasterSingleListingSearch from '../MasterSingleListingSearch';
import SingleItemListingInMaster from '../SingleItemListingInMaster';

const CategoryMaster = () => {
  const { CategoryList }: any = UseCategoryHook();

  const [searchField, setSearchField] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
    setSearchField(e.target.value);
  };

  const filterList: any =
    CategoryList?.length > 0 &&
    CategoryList !== null &&
    CategoryList.filter((value: any) => {
      return value.toLowerCase().includes(searchField?.toLowerCase());
    });

  return (
    <div className="container">
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs tab-container">
            <Tabs
              defaultActiveKey="default-tab"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              <Tab eventKey="default-tab" title="Category List">
                <MasterSingleListingSearch
                  placeholder="Category"
                  HandleSearchInput={HandleSearchInput}
                />
                <SingleItemListingInMaster
                  listingData={filterList}
                  heading="Category"
                />
              </Tab>
              <Tab eventKey="chitti-listing" title="Add Category">
                <AddCategory />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMaster;
