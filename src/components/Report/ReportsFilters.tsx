import { useLocation } from 'react-router-dom';
import AutoCompleteInput from '../InputDropdown/AutoCompleteInput';

const ReportsFilters = ({
  searchInputValues,
  handleSearchInput,
  handleSearchBtn,
  dropdownData,
}: any) => {
  const location = useLocation();
  const path = location.pathname?.trim()?.split(' ')?.slice(-1)[0];

  const karigarData: any = {
    fieldname: 'karigar_Name',
    fieldtype: 'Link',
    link_data:
      dropdownData?.length > 0 &&
      dropdownData.map((data: any) => data.karigar_name),
  };
  const categoryData: any = {
    fieldname: 'category',
    fieldtype: 'Link',
    link_data:
      dropdownData?.length > 0 &&
      dropdownData.map((data: any) => data.category),
  };
  const subCategoryData: any = {
    fieldname: 'sub_category',
    fieldtype: 'Link',
    link_data:
      dropdownData?.length > 0 &&
      dropdownData.map((data: any) => data.sub_category),
  };
  const clientNameData: any = {
    fieldname: 'client_name',
    fieldtype: 'Link',
    link_data:
      dropdownData?.length > 0 &&
      dropdownData.map((data: any) => data.client_name),
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-lg-2 col-md-4 col-4">
          <label className="text-secondary">From Date</label>
          <input
            type="date"
            name="from_date"
            id="from_date"
            className="form-control px-2 py-1 custom-input-field "
            value={searchInputValues.from_date}
            onChange={(e: any) =>
              handleSearchInput(e.target.value, 'from_date')
            }
          />
        </div>
        <div className="col-lg-2 col-md-4 col-4">
          <label className="text-secondary">To Date</label>
          <input
            type="date"
            name="to_date"
            id="to_date"
            className="form-control px-2 py-1 custom-input-field"
            value={searchInputValues.to_date}
            onChange={(e: any) => handleSearchInput(e.target.value, 'to_date')}
          />
        </div>
        {path?.includes('/purchasereceipt') && (
          <>
            <div className="col-lg-2 col-md-4 col-4">
              <label className="text-secondary">Karigar</label>
              <AutoCompleteInput
                data={karigarData}
                handleSearchInput={(value: any) =>
                  handleSearchInput(value, 'karigar_name')
                }
                value={searchInputValues.karigar_name}
              />
            </div>
          </>
        )}
        {path?.includes('/salesreturn') && (
          <>
            <div className="col-lg-2 col-md-4 col-4 ">
              <label className="text-secondary">Client</label>
              <AutoCompleteInput
                data={clientNameData}
                handleSearchInput={(value: any) =>
                  handleSearchInput(value, 'client_name')
                }
                value={searchInputValues.client_name}
              />
            </div>
          </>
        )}
        {(path?.includes('/purchasereceipt') ||
          path?.includes('/salesreturn') ||
          path?.includes('/emeraldchitti')) && (
          <>
            <div className="col-lg-2 col-md-4 col-4">
              <label className="text-secondary">Category</label>
              <AutoCompleteInput
                data={categoryData}
                handleSearchInput={(value: any) =>
                  handleSearchInput(value, 'category')
                }
                value={searchInputValues.category}
              />
            </div>
          </>
        )}
        {(path?.includes('/purchasereceipt/subcategory') ||
          path?.includes('/salesreturn/subcategory')) && (
          <>
            <div className="col-lg-2 col-md-4 col-4">
              <label className="text-secondary">Sub Category</label>
              <AutoCompleteInput
                data={subCategoryData}
                handleSearchInput={(value: any) =>
                  handleSearchInput(value, 'sub_category')
                }
                value={searchInputValues.sub_category}
              />
            </div>
          </>
        )}
        <div className="col-lg-2 col-md-4 col-4 d-flex align-items-center">
          <button
            className="btn btn-primary m-0 p-1 px-2"
            onClick={handleSearchBtn}
          >
            <i className="fa-solid fa-magnifying-glass pe-2"></i>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsFilters;
