import { get_specific_client_group } from '../../../../store/slices/Master/get-specific-client-group-slice';
import { useSelector } from 'react-redux';
import UseClientGroupHook from '../../../../hooks/Master/client-group-hook';
import UseGetSpecificClientGroup from '../../../../hooks/Master/get-specific-client-group-hook';

import { useNavigate, useParams } from 'react-router-dom';

const MasterPageClientNameDetail = () => {
  const clientGroupName: any = useSelector(get_specific_client_group);

  const { id } = useParams();
  const navigate = useNavigate();
  const {} = UseClientGroupHook();
  const {} = UseGetSpecificClientGroup();

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
                Client Name
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
                Client Group
                <span className="text-danger">*</span>
              </label>
              <div className="input-group w-50 master-input-field my-3 mt-2">
                <input
                  type="text"
                  className="form-control py-1 ps-1"
                  defaultValue={clientGroupName?.data}
                  value={clientGroupName?.data}
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

export default MasterPageClientNameDetail;
