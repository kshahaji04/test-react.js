import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CategoryListing from './CategoryListing';
import AddCategory from './AddCategory';
import UseCategoryHook from '../../../../hooks/Master/category-hook';

const CategoryMaster = () => {

  const {CategoryList}:any = UseCategoryHook();
  return (
    <div className="container">
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs tab-container">
            <Tabs
              defaultActiveKey="chitti-listing"
              id="justify-tab-example"
              className="mb-1"
              justify
            >
              <Tab eventKey="chitti-listing" title="Add Category">
                <AddCategory />
              </Tab>
              <Tab eventKey="longer-tab" title="Category Listing">
                <CategoryListing CategoryList={CategoryList}/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMaster;
