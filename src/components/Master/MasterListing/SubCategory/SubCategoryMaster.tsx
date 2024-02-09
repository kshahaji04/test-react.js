import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AddSubCategory from './AddSubCategory';
import SubCategoryListing from './SubCategoryListing';
import UseSubCategoryHook from '../../../../hooks/Master/sub-category-hook';
import UseCategoryHook from '../../../../hooks/Master/category-hook';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';

const SubCategoryMaster = () => {
  const { subCategoryCategoryData }: any = UseSubCategoryHook();
  const { CategoryList }: any = UseCategoryHook();

  console.log('subCategoryCategoryData', subCategoryCategoryData);
  const [inputName, setInputName] = useState('');
  const [inputGroup, setInputGroup] = useState('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  const handleInputChange1 = (event: any) => {
    setInputName(event.target.value);
  };

  const handleInputChange2 = (event: any) => {
    setInputGroup(event.target.value);
  };

  const filteredList: any =
    subCategoryCategoryData?.length > 0 &&
    subCategoryCategoryData !== null &&
    subCategoryCategoryData.filter(
      (client: any) =>
        client.name.toLowerCase().includes(inputName.toLowerCase()) &&
        client.category.toLowerCase().includes(inputGroup.toLowerCase())
    );

  return (
    <div className="container">

      <div className="row justify-content-center mt-3" >
        <div className="col-lg-9 chitti-nav-tabs tab-container">
          <Tabs
            defaultActiveKey="default-tab"
            id="justify-tab-example"
            className="mb-1"
            justify
          >
            <Tab eventKey="default-tab" title="Sub Category List">
              <MasterMultipleListingSearch
                placeholder1="Sub Category"
                placeholder2="Category"
                handleInputChange1={handleInputChange1}
                handleInputChange2={handleInputChange2}
                listingData={filteredList}
                tableViewData={tableViewData}
              />
              <SubCategoryListing filteredList={filteredList} HandleTableViewRows={HandleTableViewRows} tableViewData={tableViewData} />
            </Tab>

            <Tab eventKey="longer-tab" title="Add Sub Category">
              <AddSubCategory CategoryList={CategoryList} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryMaster;
