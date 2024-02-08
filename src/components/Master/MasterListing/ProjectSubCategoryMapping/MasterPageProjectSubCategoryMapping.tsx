import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { get_project_sub_category_mapping } from '../../../../store/slices/Master/get-project-subcategory-mapping-slice';
import { useEffect, useState } from 'react';

const MasterPageProjectSubCategoryMapping = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const projectSubCategoryMappingDataFromStore: any = useSelector(
    get_project_sub_category_mapping
  );

  const [updatedProjectSubCategoryList, setUpdatedProjectSubCategoryList] =
    useState<any>('');

  useEffect(() => {
    const filterList: any = () => {
      let updatedList: any =
        projectSubCategoryMappingDataFromStore?.data?.length > 0 &&
        projectSubCategoryMappingDataFromStore?.data !== null &&
        projectSubCategoryMappingDataFromStore?.data?.filter((data: any) => {
          return data.name === id;
        });
      setUpdatedProjectSubCategoryList(updatedList);
    };
    filterList();
  }, []);

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

          {updatedProjectSubCategoryList?.length > 0 &&
            updatedProjectSubCategoryList !== null &&
            updatedProjectSubCategoryList.map((value: any) => {
              return (
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                      <label
                        htmlFor="basic-url "
                        className="fs-6 mt-3 text-center"
                      >
                        Project
                      </label>
                      <div className="input-group pe-lg-5 master-input-field my-3 mt-2">
                        <input
                          type="text"
                          className="form-control py-1 ps-1"
                          defaultValue={value.project}
                          required
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <label
                        htmlFor="basic-url "
                        className="fs-6 mt-3 text-center"
                      >
                        Stone
                      </label>
                      <div className="input-group pe-lg-5 master-input-field my-3 mt-2">
                        <input
                          type="text"
                          className="form-control py-1 ps-1"
                          value={value?.stone}
                          required
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <label
                        htmlFor="basic-url "
                        className="fs-6 mt-3 text-center"
                      >
                        Plain
                      </label>
                      <div className="input-group pe-lg-5 master-input-field my-3 mt-2">
                        <input
                          type="text"
                          className="form-control py-1 ps-1"
                          value={value?.plain}
                          required
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MasterPageProjectSubCategoryMapping;
