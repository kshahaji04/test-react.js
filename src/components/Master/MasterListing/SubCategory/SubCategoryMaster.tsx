import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AddSubCategory from './AddSubCategory';
import SubCategoryListing from './SubCategoryListing';
import UseSubCategoryHook from '../../../../hooks/Master/sub-category-hook';

const SubCategoryMaster = () => {
  const {subCategoryList}:any = UseSubCategoryHook();
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
              <Tab eventKey="chitti-listing" title="Sub Category Listing">
                <AddSubCategory />
              </Tab>
              <Tab eventKey="longer-tab" title="Add Sub Category">
                <SubCategoryListing subCategoryList={subCategoryList}/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryMaster;
