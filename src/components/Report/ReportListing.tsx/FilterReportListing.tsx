import SelectedInputDropdown from '../../SelectedInputDropdown';

const FilterReportListing = ({
  setSearchclientName,
  searchClientName,
  clientNameList,
  CategoryList,
  searchCategory,
  setSearchCategory,
  HandleSearchInput,
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
  handleFilterList,
}: any) => {
  console.log('supply', supplierList);

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        {showCategoryInFilter?.current && (
          <div className="col-md-2">
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
            <div className="col-md-2">
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
          <div className="col-md-2 ">
            <label className="text-secondary ">Project</label>
            <input
              type="text"
              name="project"
              id="project"
              className="form-control input-fields custom-input-field "
              title="Project"
              onChange={HandleSearchInput}
            />
          </div>
        )}

        {showSubCategoryInFilter?.current && (
          <div className="col-md-2">
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
          <div className="col-md-2">
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
            <div className="col-md-2 ">
              <label className="text-secondary ">From Date</label>
              <input
                type="date"
                name="fromDate"
                id="fromDate"
                className="form-control input-fields custom-input-field "
                onChange={HandleSearchInput}
              />
            </div>
            <div className="col-md-2 ">
              <label className="text-secondary ">To Date</label>
              <input
                type="date"
                name="toDate"
                id="toDate"
                className="form-control input-fields custom-input-field"
                onChange={HandleSearchInput}
              />
            </div>
          </>
        )}
        <div className="col-md-2 d-flex align-items-center">
          <button
            className="btn btn-primary search-btn-challan-list"
            onClick={handleFilterList}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterReportListing;
