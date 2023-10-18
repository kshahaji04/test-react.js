import { useState, useEffect } from 'react';
import EmeraldCreateChitti from '../CreateEmeraldChitti/EmeraldCreateChitti';
import EmeraldChittiTable from '../CreateEmeraldChitti/EmeraldChittiTable';
import UseSubCategoryHook from '../../../hooks/Master/sub-category-hook';
import UseEditEmeraldChittiHook from '../../../hooks/Emerald/edit-emerald-chitti-hook';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getSpecificEmeraldChitti,
  get_specific_emerald_chitti,
} from '../../../store/slices/Emerald/get-specific-emrald-slice';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import DeleteEmeraldChittiApi from '../../../services/api/Emerald/delete-emerald-chitti-api';
import UpdateDocStatusEmeraldChittiApi from '../../../services/api/general/update-doc-status-emrald-chitti-api';

const EditEmeraldChitti = () => {
  const navigate = useNavigate();
  const { subCategoryList } = UseSubCategoryHook();
  const {
    selectedDropdownValue,
    setSelectedDropdownValue,
    productItemList,
    HandleClientGroup,
    clientGroupList,
    clientNameList,
    currentDate,
    handleDateChange,
    transactionDate,
    tableData,
    setTableData,
    challanDetail,
    HandleUpdateEmeraldChittiSubmit,
    stateForDocStatus,
    setStateForDocStatus,
  }: any = UseEditEmeraldChittiHook();

  const HandleBackButton = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState<any>();
  const AccessToken: any = useSelector(get_access_token);

  const docStatusFromStore: any = useSelector(get_specific_emerald_chitti);
  console.log('docStatus', docStatusFromStore?.docStatus);
  useEffect(() => {
    setShowButton(docStatusFromStore?.docStatus);
  }, [docStatusFromStore]);

  const HandleSubmitData: any = async () => {
    let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
      AccessToken?.token,
      '1',
      id
    );
    console.log('update doc', updateDocStatus);
    if (Object.keys(updateDocStatus?.data)?.length > 0) {
      const params: any = {
        token: AccessToken?.token,
        name: id,
      };
      dispatch(getSpecificEmeraldChitti(params));
    }
  };

  const HandleCancelChitti = async () => {
    let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
      AccessToken?.token,
      '2',
      id
    );
    console.log('update doc', updateDocStatus);
    if (Object.keys(updateDocStatus?.data)?.length > 0) {
      const params: any = {
        token: AccessToken?.token,
        name: id,
      };
      dispatch(getSpecificEmeraldChitti(params));
    }
  };
  const HandleDeleteChitti = async () => {
    let deleteChallanApiRes: any = await DeleteEmeraldChittiApi(
      AccessToken?.token,
      id
    );
    console.log('deletec', deleteChallanApiRes);
    if (deleteChallanApiRes?.message?.status === 'success') {
      navigate(-1);
    }
  };
  return (
    <div className="container">
      <div className="">
        <div className="d-flex justify-content-between my-3">
          <div className="d-flex align-items-center">
            <div>
              <button
                type="submit"
                onClick={HandleBackButton}
                className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
              >
                Back
              </button>
            </div>
            {stateForDocStatus === true && (
              <button type="button" className="btn docstatus-button">
                Not Saved
              </button>
            )}
            {stateForDocStatus === false && showButton === 0 && (
              <button type="button" className="btn docstatus-button">
                Draft
              </button>
            )}
            {showButton === 1 && (
              <button type="button" className="btn docstatus-button">
                Submit
              </button>
            )}
          </div>

          {stateForDocStatus === true && (
            <button
              type="submit"
              onClick={HandleUpdateEmeraldChittiSubmit}
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
            >
              Save
            </button>
          )}
          {stateForDocStatus === false && showButton === 0 && (
            <button
              type="submit"
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
              onClick={HandleSubmitData}
            >
              Submit
            </button>
          )}
          {showButton === 1 && (
            <button
              type="submit"
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
              onClick={HandleCancelChitti}
            >
              Cancel
            </button>
          )}
          {showButton === 2 && (
            <button
              type="submit"
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
              onClick={HandleDeleteChitti}
            >
              Delete
            </button>
          )}
        </div>
      </div>

      <div>
        <div>
          {challanDetail?.length > 0 &&
            challanDetail !== null &&
            challanDetail.map((data: any) => {
              console.log('valuess emerald', data);

              return (
                <>
                  <EmeraldCreateChitti
                    defaultData={data}
                    selectedDropdownValue={selectedDropdownValue}
                    setSelectedDropdownValue={setSelectedDropdownValue}
                    HandleClientGroup={HandleClientGroup}
                    clientGroupList={clientGroupList}
                    clientNameList={clientNameList}
                    currentDate={currentDate}
                    handleDateChange={handleDateChange}
                    transactionDate={transactionDate}
                    setStateForDocStatus={setStateForDocStatus}
                  />

                  <EmeraldChittiTable
                    defaultData={data?.challan_table}
                    tableData={tableData}
                    setTableData={setTableData}
                    subCategoryList={subCategoryList}
                    productItemList={productItemList}
                    setStateForDocStatus={setStateForDocStatus}
                  />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default EditEmeraldChitti;
