import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { get_project_sub_category_mapping } from '../../../../store/slices/Master/get-project-subcategory-mapping-slice';
import { useState } from 'react';

const MasterPageProjectSubCategoryMapping = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const projectSubCategoryMappingDataFromStore: any = useSelector(
    get_project_sub_category_mapping
  );

  const [updatedProjectSubCategoryList, setUpdatedProjectSubCategoryList] =
    useState<any>('');

  console.log(
    'projectSubCategoryMappingDataFromStore data',
    projectSubCategoryMappingDataFromStore
  );

  const filterList: any = () => {
    let updatedList: any =
      projectSubCategoryMappingDataFromStore?.data?.length > 0 &&
      projectSubCategoryMappingDataFromStore?.data !== null &&
      projectSubCategoryMappingDataFromStore?.data?.filter((data: any) => {
        return data.name === id;
      });
    setUpdatedProjectSubCategoryList(updatedList);
  };
  console.log('filter', updatedProjectSubCategoryList);
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
                project
                <span className="text-danger">*</span>
              </label>
              <div className="input-group w-50 master-input-field my-3 mt-2">
                <input
                  type="text"
                  className="form-control py-1 ps-1"
                  defaultValue={id}
                  required
                  readOnly
                />
              </div>
            </div>
            <div className="col-lg-6">
              <label htmlFor="basic-url " className="fs-6 mt-3 text-center">
                Stone
                <span className="text-danger">*</span>
              </label>
              <div className="input-group w-50 master-input-field my-3 mt-2">
                <input
                  type="text"
                  className="form-control py-1 ps-1"
                  // value={clientGroupName?.data}
                  required
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPageProjectSubCategoryMapping;
