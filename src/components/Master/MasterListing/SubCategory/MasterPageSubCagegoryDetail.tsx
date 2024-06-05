import { useSelector } from 'react-redux';
import { get_specific_category } from '../../../../store/slices/Master/get-specific-category-slice';
import useCategoryHook from '../../../../hooks/Master/category-hook';
import useGetSpecificCategory from '../../../../hooks/Master/get-specific-category-hook';

import { useNavigate, useParams } from 'react-router-dom';

const MasterPageSubCategoryDetail = () => {
  const {}: any = useCategoryHook();
  const navigate = useNavigate();

  const { id } = useParams();
  const {}: any = useGetSpecificCategory();
  const categoryName: any = useSelector(get_specific_category);

  return (
    <div className="container">
      <div className="mt-5 row justify-content-center">
        <div className="card mt-2 col-9">
          <div className="card-header">
            <button
              type="submit"
              onClick={() => navigate(-1)}
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
            >
              Back
            </button>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPageSubCategoryDetail;
