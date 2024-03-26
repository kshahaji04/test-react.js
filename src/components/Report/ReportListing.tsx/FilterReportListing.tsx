import SelectedInputDropdown from '../../SelectedInputDropdown';

const FilterReportListing = ({
  setSearchclientName,
  searchClientName,
  clientNameList,
  CategoryList,
  searchCategory,
  setSearchCategory,
  handleSearchInput,
  showCategoryInFilter,
  showClientNameInFilter,
  showDateInFilter,
  showSubCategoryInFilter,
  searchSubCategory,
  setSearchSubCategory,
  subCategoryList,
  showSupplierInFilter,
  showProjectFieldInFilter,
  searchSupplier,
  setSearchSupplier,
  supplierList,
}: any) => {
  console.log('supply', supplierList);

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        {showCategoryInFilter?.current && (
          <div className="col-lg-2 col-md-4 col-4">
            <label className="text-secondary ">Category</label>
            <SelectedInputDropdown
              drowpdownlist={CategoryList}
              title="Select Category"
              selectedDropdownValue={searchCategory}
              setSelectedDropdownValue={setSearchCategory}
              hideDropdown={false}
            />
          </div>
        )}

        {showSupplierInFilter?.current && (
          <>
            <div className="col-lg-2 col-md-4 col-4">
              <label className="text-secondary ">Supplier</label>
              <SelectedInputDropdown
                drowpdownlist={supplierList}
                title="Select Supplier"
                selectedDropdownValue={searchSupplier}
                setSelectedDropdownValue={setSearchSupplier}
                hideDropdown={true}
              />
            </div>
          </>
        )}

        {showProjectFieldInFilter?.current && (
          <div className="col-lg-2 col-md-4 col-4">
            <label className="text-secondary ">Project</label>
            <input
              type="text"
              name="project"
              // id="projectInputFieldInReport"
              id="project"
              className="form-control input-fields custom-input-field "
              title="Project"
              onChange={handleSearchInput}
            />
          </div>
        )}

        {showSubCategoryInFilter?.current && (
          <div className="col-lg-2 col-md-4 col-4">
            <label className="text-secondary ">Sub Category</label>
            <SelectedInputDropdown
              drowpdownlist={subCategoryList}
              title="Select Sub Category"
              selectedDropdownValue={searchSubCategory}
              setSelectedDropdownValue={setSearchSubCategory}
              // clientGroupList={clientGroupList}
              // HandleClientGroup={HandleClientGroup}
            />
          </div>
        )}
        {showClientNameInFilter?.current && (
          <div className="col-lg-2 col-md-4 col-4">
            <label className="text-secondary ">Client Name</label>
            <SelectedInputDropdown
              drowpdownlist={clientNameList}
              // bgColor={bgColor}
              title="Select Client Name"
              selectedDropdownValue={searchClientName}
              setSelectedDropdownValue={setSearchclientName}
              // clientGroupList={clientGroupList}
              // HandleClientGroup={HandleClientGroup}
            />
          </div>
        )}

        {showDateInFilter?.current && (
          <>
            <div className="col-lg-2 col-md-4 col-4">
              <label className="text-secondary ">From Date</label>
              <input
                type="date"
                name="fromDate"
                id="fromDate"
                className="form-control input-fields custom-input-field "
                onChange={handleSearchInput}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <label className="text-secondary ">To Date</label>
              <input
                type="date"
                name="toDate"
                id="toDate"
                className="form-control input-fields custom-input-field"
                onChange={handleSearchInput}
              />
            </div>
          </>
        )}
        {/* <div className="col-md-2 d-flex align-items-center">
          <button
            className="btn btn-primary search-btn-challan-list"
            onClick={handleFilterList}
          >
            Search
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FilterReportListing;
