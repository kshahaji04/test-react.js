import React, { useEffect, useState } from 'react';
import { get_specific_client_group } from '../../../../store/slices/Master/get-specific-client-group-slice';
import { useSelector } from 'react-redux';
import UseClientGroupHook from '../../../../hooks/Master/client-group-hook';
import UseGetSpecificClientGroup from '../../../../hooks/Master/get-specific-client-group-hook';
import UpdateClientGroup from '../../../../services/api/Master/update-client-group-api';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MasterPageClientNameDetail = () => {
  const clientGroupName: any = useSelector(get_specific_client_group);
  const AccessToken: any = useSelector(get_access_token);
  const { id } = useParams();
  const navigate = useNavigate();
  const { clientGroupList } = UseClientGroupHook();
  const { _ } = UseGetSpecificClientGroup();

  const [clientGroup, setClientGroup] = useState<any>('');
  const HandleChangeClientGroup = async (e: any) => {
    setClientGroup(e.target.value);
  };
  const HandleClientGroup = async () => {
    let clientgrpApiRes: any = await UpdateClientGroup(
      AccessToken?.token,
      id,
      clientGroup
    );
    if (Object.keys(clientgrpApiRes)?.length > 0) {
      toast.success('Client Group Updated');
    } else {
      toast.error('Failed to create Group');
    }
    console.log('updateclient', clientgrpApiRes);
  };
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
                {/* <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  defaultValue={clientGroupName?.data}
                  onChange={HandleChangeClientGroup}
                >
                  <option value="1" selected>
                    {clientGroupName?.data}
                  </option>
                  {clientGroupList?.length > clientGroupList !== null && (
                    <>
                      {clientGroupList.map((clientGroup: any, index: any) => {
                        return <option key={index}>{clientGroup}</option>;
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

export default MasterPageClientNameDetail;
