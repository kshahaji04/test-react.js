import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useCategoryHook from '../../../../hooks/Master/category-hook';
import useSubCategoryHook from '../../../../hooks/Master/sub-category-hook';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';
import AddSubCategory from './AddSubCategory';
import MasterTableListing from '../../MasterTableListing';

const SubCategoryMaster = () => {
  const { subCategoryCategoryData }: any = useSubCategoryHook();
  const { CategoryList }: any = useCategoryHook();

  const [inputName, setInputName] = useState('');
  const [inputGroup, setInputGroup] = useState('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const handleTableViewRows: any = (data: any) => {
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
        client?.name?.toLowerCase()?.includes(inputName.toLowerCase()) &&
        client?.category?.toLowerCase()?.includes(inputGroup.toLowerCase())
    );

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
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
              <MasterTableListing
                filteredList={filteredList}
                handleTableViewRows={handleTableViewRows}
                tableViewData={tableViewData}
                dropdownData={CategoryList}
              />
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
