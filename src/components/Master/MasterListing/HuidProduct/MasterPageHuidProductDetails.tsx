import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { get_huid_product_list } from '../../../../store/slices/Master/get-huid-product-slice';

const MasterPageHuidProductDetails = () => {
  const navigate = useNavigate();

  const huidDataFromStore: any = useSelector(get_huid_product_list);

  const { id } = useParams();
  const DetailPageList: any =
    huidDataFromStore?.data?.length > 0 &&
    huidDataFromStore?.data !== null &&
    huidDataFromStore?.data.filter((item: any) => item.title === id);

  return (
    <div className="container">
      <div className="mt-5 row justify-content-center">
        <div className="card mt-3 col-9">
          <div className="card-header">
            <button
              type="submit"
              onClick={() => navigate(-1)}
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
            >
              Back
            </button>
          </div>
          <div className="row">
            <div className="col-lg-6 my-2 p-4">
              <label htmlFor="basic-url " className="fs-5">
                Huid Product
                <span className="text-danger">*</span>
              </label>
              <div className="input-group my-2 w-50">
                <input
                  type="text"
                  className="form-control py-1 px-2"
                  // value={inputValue}
                  defaultValue={DetailPageList[0]?.title}
                  required
                  id="basic-url"
                  readOnly
                />
              </div>
            </div>
            <div className="col-lg-6  my-2 p-4">
              <label htmlFor="basic-url " className="fs-5">
                Hm pcs
                <span className="text-danger">*</span>
              </label>
              <div className="input-group my-2 w-25">
                <input
                  type="text"
                  className="form-control py-1 px-2"
                  // value={inputValue}
                  defaultValue={DetailPageList[0]?.custom_hm_pcs}
                  required
                  id="basic-url"
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

export default MasterPageHuidProductDetails;
