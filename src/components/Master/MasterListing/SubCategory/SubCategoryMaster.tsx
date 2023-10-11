import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AddSubCategory from './AddSubCategory';
import SubCategoryListing from './SubCategoryListing';
import UseSubCategoryHook from '../../../../hooks/Master/sub-category-hook';
import UseCategoryHook from '../../../../hooks/Master/category-hook';

const SubCategoryMaster = () => {
  const { subCategoryList }: any = UseSubCategoryHook();
  const { CategoryList }: any = UseCategoryHook();
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
              <Tab eventKey="chitti-listing" title="Add Sub Category">
                <AddSubCategory CategoryList={CategoryList} />
              </Tab>

              <Tab eventKey="longer-tab" title="Sub Category Listing">
                <SubCategoryListing
                  subCategoryList={subCategoryList}
                  CategoryList={CategoryList}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryMaster;
