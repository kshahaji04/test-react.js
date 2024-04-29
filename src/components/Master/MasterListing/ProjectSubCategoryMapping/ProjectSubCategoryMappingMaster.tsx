import { useState, useRef } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ProjectSubCategoryMappingListing from './ProjectSubCategoryMappingListing';
import AddProjectSubCategoryMapping from './AddProjectSubCategoryMapping';
import useProjectSubCategoryMappingHook from '../../../../hooks/Master/Project-sub-category-mapping-hook';
import useSubCategoryHook from '../../../../hooks/Master/sub-category-hook';
import MasterMultipleListingSearch from '../MasterMultipleListingSearch';

const ProjectSubCategoryMappingMaster = () => {
  const { ProjectSubCategoryMappingList }: any =
    useProjectSubCategoryMappingHook();

  const { subCategoryCategoryData } = useSubCategoryHook();
  const showThirdInputField: any = useRef(true);

  const [inputProject, setInputProject] = useState('');
  const [inputStone, setInputStone] = useState('');
  const [inputPlain, setInputPlain] = useState('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const handleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };

  const handleInputChange1 = (event: any) => {
    setInputProject(event.target.value);
  };

  const handleInputChange2 = (event: any) => {
    setInputStone(event.target.value);
  };
  const handleInputChange3 = (event: any) => {
    setInputPlain(event.target.value);
  };

  const filteredList: any =
    ProjectSubCategoryMappingList?.length > 0 &&
    ProjectSubCategoryMappingList !== null &&
    (inputProject || inputStone || inputPlain)
      ? ProjectSubCategoryMappingList.filter(
          (data: any) =>
            data?.project
              ?.toLowerCase()
              ?.includes(inputProject?.toLowerCase()) &&
            data?.stone?.toLowerCase()?.includes(inputStone?.toLowerCase()) &&
            data?.plain?.toLowerCase()?.includes(inputPlain?.toLowerCase())
        )
      : ProjectSubCategoryMappingList;

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
            <Tab
              eventKey="default-tab"
              title="Project Sub Category Mapping List"
            >
              <MasterMultipleListingSearch
                placeholder1="Project"
                placeholder2="Stone"
                placeholder3="plain"
                showThirdInputField={showThirdInputField}
                handleInputChange1={handleInputChange1}
                handleInputChange2={handleInputChange2}
                handleInputChange3={handleInputChange3}
                listingData={filteredList}
                tableViewData={tableViewData}
              />
              <ProjectSubCategoryMappingListing
                ProjectSubCategoryMappingList={filteredList}
                tableViewData={tableViewData}
                handleTableViewRows={handleTableViewRows}
              />
            </Tab>
            <Tab eventKey="longer-tab" title="Add Project Sub Category Mapping">
              <AddProjectSubCategoryMapping
                subCategoryCategoryData={subCategoryCategoryData}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubCategoryMappingMaster;
