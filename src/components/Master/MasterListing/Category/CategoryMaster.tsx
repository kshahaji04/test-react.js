import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useCategoryHook from '../../../../hooks/Master/category-hook';
import MasterSingleListingSearch from '../MasterSingleListingSearch';
import AddCategory from './AddCategory';
import MasterTableListing from '../../MasterTableListing';

const CategoryMaster = () => {
  const { CategoryList }: any = useCategoryHook();

  const [searchField, setSearchField] = useState<any>('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const handleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };

  const handleSearchInput: any = (e: any) => {
    setSearchField(e.target.value);
  };

  const filterList: any =
    CategoryList?.length > 0 &&
    CategoryList !== null &&
    CategoryList.filter((value: any) => {
      return value?.name?.toLowerCase().includes(searchField?.toLowerCase());
    });

  return (
    <div className="container">
      <div className="row justify-content-center my-3">
        <div className="col-lg-9 chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="default-tab"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            <Tab eventKey="default-tab" title="Category List">
              <MasterSingleListingSearch
                placeholder="Category"
                handleSearchInput={handleSearchInput}
                listingData={filterList}
                tableViewData={tableViewData}
              />
              <MasterTableListing
                filteredList={filterList}
                handleTableViewRows={handleTableViewRows}
                tableViewData={tableViewData}
              />
            </Tab>
            <Tab eventKey="chitti-listing" title="Add Category">
              <AddCategory />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CategoryMaster;
