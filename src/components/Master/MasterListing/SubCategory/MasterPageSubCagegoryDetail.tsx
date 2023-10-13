import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { get_specific_category } from '../../../../store/slices/Master/get-specific-category-slice';
import UseCategoryHook from '../../../../hooks/Master/category-hook';
import UseGetSpecificCategory from '../../../../hooks/Master/get-specific-category-hook';
import UpdateCategoryApi from '../../../../services/api/Master/update-category-api';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MasterPageSubCategoryDetail = () => {
  const { CategoryList }: any = UseCategoryHook();
  const navigate = useNavigate();
  const AccessToken: any = useSelector(get_access_token);
  const { id } = useParams();
  const {}: any = UseGetSpecificCategory();
  const categoryName: any = useSelector(get_specific_category);
  console.log('categoryName', categoryName);

  const [category, setCategory] = useState<any>('');
  const HandleCategory = async (e: any) => {
    setCategory(e.target.value);
  };
  const HandleCategorySubmit = async () => {
    let clientgrpApiRes: any = await UpdateCategoryApi(
      AccessToken?.token,
      id,
      category
    );
    console.log('clientgrpApiRes', clientgrpApiRes);
    if (
      Object?.keys(clientgrpApiRes)?.length > 0 &&
      clientgrpApiRes !== undefined
    ) {
      toast.success('Category Updated');
    } else {
      toast.error('Failed to create Category');
    }
  };
  return (
    <div className="container">
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
            <button
              type="submit"
              onClick={HandleCategorySubmit}
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
            >
              Save
            </button>
          </div>
        </div>
        <div className="card-body">
          <label htmlFor="basic-url " className="fs-6 mt-3 text-center">
            Category
            <span className="text-danger">*</span>
          </label>
          <div className="input-group w-50 master-input-field my-3 mt-2">
            <select
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
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPageSubCategoryDetail;
