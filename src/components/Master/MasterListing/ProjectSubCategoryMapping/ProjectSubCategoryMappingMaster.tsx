import { Tab, Tabs } from 'react-bootstrap';
import ProjectSubCategoryMappingListing from './ProjectSubCategoryMappingListing';
import AddProjectSubCategoryMapping from './AddProjectSubCategoryMapping';
import UseProjectSubCategoryMappingHook from '../../../../hooks/Master/Project-sub-category-mapping-hook';
import UseSubCategoryHook from '../../../../hooks/Master/sub-category-hook';

const ProjectSubCategoryMappingMaster = () => {
  const { ProjectSubCategoryMappingList }: any =
    UseProjectSubCategoryMappingHook();

  const { subCategoryList } = UseSubCategoryHook();
  console.log(
    'ProjectSubCategoryMappingList in tsx',
    ProjectSubCategoryMappingList
  );
  return (
    <div className="container">
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 chitti-nav-tabs tab-container">
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
                {/* <MasterMultipleListingSearch
                placeholder1="Enter Client name"
                placeholder2="Enter Client group"
                handleInputChange1={handleInputChange1}
                handleInputChange2={handleInputChange2}
              /> */}
                {/* <ClientNameListing clientNameClientGroupList={filteredList} /> */}
                <ProjectSubCategoryMappingListing
                  ProjectSubCategoryMappingList={ProjectSubCategoryMappingList}
                />
              </Tab>
              <Tab
                eventKey="longer-tab"
                title="Add Project Sub Category Mapping"
              >
                <AddProjectSubCategoryMapping
                  subCategoryList={subCategoryList}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubCategoryMappingMaster;
