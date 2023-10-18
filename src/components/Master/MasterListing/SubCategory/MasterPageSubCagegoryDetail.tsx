import { useSelector } from 'react-redux';
import { get_specific_category } from '../../../../store/slices/Master/get-specific-category-slice';
import UseCategoryHook from '../../../../hooks/Master/category-hook';
import UseGetSpecificCategory from '../../../../hooks/Master/get-specific-category-hook';

import { useNavigate, useParams } from 'react-router-dom';

const MasterPageSubCategoryDetail = () => {
  const {}: any = UseCategoryHook();
  const navigate = useNavigate();

  const { id } = useParams();
  const {}: any = UseGetSpecificCategory();
  const categoryName: any = useSelector(get_specific_category);
  console.log('categoryName', categoryName);

  return (
    <div className="container mt-5">
      <div className="card mt-2">
        <div className="card-header">
          <div className="d-flex justify-content-between ">
            <button
              type="submit"
              onClick={() => navigate(-1)}
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
            >
              Back
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="basic-url " className="fs-6 mt-3 text-center">
                Sub Category
                <span className="text-danger">*</span>
              </label>
              <div className="input-group w-50 master-input-field my-3 mt-2">
                <input
                  type="text"
                  className="form-control py-1 ps-1"
                  defaultValue={id}
                  value={id}
                  required
                  readOnly
                />
              </div>
            </div>
            <div className="col-lg-6">
              <label htmlFor="basic-url " className="fs-6 mt-3 text-center">
                Category
                <span className="text-danger">*</span>
              </label>
              <div className="input-group w-50 master-input-field my-3 mt-2">
                <input
                  type="text"
                  className="form-control py-1 ps-1"
                  defaultValue={categoryName?.data}
                  value={categoryName?.data}
                  required
                  readOnly
                />
                {/* <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              defaultValue={categoryName?.data}
              onChange={HandleCategory}
            >
              <option selected>{categoryName?.data}</option>
              {CategoryList?.length > CategoryList !== null && (
                <>
                  {CategoryList.map((category: any, index: any) => {
                    return <option key={index}>{category}</option>;
                  })}
                </>
              )}
            </select> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPageSubCategoryDetail;
