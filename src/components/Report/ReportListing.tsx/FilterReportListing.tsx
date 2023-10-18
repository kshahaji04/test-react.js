import React from 'react';
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
}: any) => {
  console.log('supply', supplierList);

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        {showCategoryInFilter && (
          <div className="col-md-2">
            <label className="text-secondary ">Category</label>
            <SelectedInputDropdown
              drowpdownlist={CategoryList}
              // placeholderValue="Category"
              selectedDropdownValue={searchCategory}
              setSelectedDropdownValue={setSearchCategory}
            />
          </div>
        )}

        {showSupplierInFilter && (
          <>
            <div className="col-md-2">
              <label className="text-secondary ">Supplier</label>
              <SelectedInputDropdown
                drowpdownlist={supplierList}
                // placeholderValue="Supplier"
                selectedDropdownValue={searchSupplier}
                setSelectedDropdownValue={setSearchSupplier}
              />
            </div>
          </>
        )}

        {showProjectFieldInFilter && (
          <div className="col-md-2 ">
            <label className="text-secondary ">Project</label>
            <input
              type="text"
              name="project"
              id="project"
              className="form-control input-fields custom-input-field "
              // placeholder="Project"
              onChange={HandleSearchInput}
            />
          </div>
        )}

        {showSubCategoryInFilter && (
          <div className="col-md-2">
            <label className="text-secondary ">Sub Category</label>
            <SelectedInputDropdown
              drowpdownlist={subCategoryList}
              // placeholderValue="Sub Category"
              selectedDropdownValue={searchSubCategory}
              setSelectedDropdownValue={setSearchSubCategory}
              // clientGroupList={clientGroupList}
              // HandleClientGroup={HandleClientGroup}
            />
          </div>
        )}
        {showClientNameInFilter && (
          <div className="col-md-2">
            <label className="text-secondary ">Client Name</label>
            <SelectedInputDropdown
              drowpdownlist={clientNameList}
              // bgColor={bgColor}
              // placeholderValue="Client Name"
              selectedDropdownValue={searchClientName}
              setSelectedDropdownValue={setSearchclientName}
              // clientGroupList={clientGroupList}
              // HandleClientGroup={HandleClientGroup}
            />
          </div>
        )}

        {showDateInFilter && (
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
      </div>
    </div>
  );
};

export default FilterReportListing;
