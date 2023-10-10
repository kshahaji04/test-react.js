import React, { useEffect, useState } from 'react';
import UseEditChallanChitti from '../../../hooks/Chitti/edit-challan-chitti-hook';
import CreateChittiForm from '../CreateChitti/CreateChittiForm';
import ChallanItemsTable from '../CreateChitti/ChallanItemsTable';
import NarrationTable from '../CreateChitti/NarrationTable';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getSpecificChittiChallan,
  get_specific_chitti_challan,
} from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import UpdateDocStatus from '../../../services/api/general/update-doc-status-api';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { useDispatch } from 'react-redux';
import DeleteChallanChittiApi from '../../../services/api/Chitti/delete-challan-chitti-api';

const EditChallanChitti = () => {
  const {
    challanDetail,
    setNarrationTableData,
    subCategoryList,
    productList,
    selectedDropdownValue,
    drowpdownlist,
    setTableData,
    HandleDateChange,
    clientNameList,
    setSelectedDropdownValue,
    HandleUpdateChallanSubmit,
    HandleGoldRate,
    HandleRemarks,
    tableData,
    narrationTableData,
    clientGroupList,
    stateForDocStatus,
  }: any = UseEditChallanChitti();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState<any>();

  const AccessToken: any = useSelector(get_access_token);

  const HandleBackButton = () => {
    navigate(-1);
  };

  const { id } = useParams();

  const docStatusFromStore: any = useSelector(get_specific_chitti_challan);
  console.log('docStatus', docStatusFromStore?.docStatus);

  useEffect(() => {
    setShowButton(docStatusFromStore?.docStatus);
  }, [docStatusFromStore]);

  const HandleSubmitData: any = async () => {
    let updateDocStatus: any = await UpdateDocStatus(
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
      dispatch(getSpecificChittiChallan(params));
    }
  };

  const HandleCancelChitti = async () => {
    let updateDocStatus: any = await UpdateDocStatus(
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
      dispatch(getSpecificChittiChallan(params));
    }
  };
  const HandleDeleteChitti = async () => {
    let deleteChallanApiRes: any = await DeleteChallanChittiApi(
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
              // <div className="text-danger bold">Draft</div>
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
              onClick={HandleUpdateChallanSubmit}
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
        {challanDetail?.length > 0 && challanDetail !== null
          ? challanDetail.map((data: any, index: any) => {
              return (
                <>
                  <div key={index}>
                    <CreateChittiForm
                      defaultData={data}
                      HandleDateChange={HandleDateChange}
                      selectedDropdownValue={selectedDropdownValue}
                      clientNameList={clientNameList}
                      setSelectedDropdownValue={setSelectedDropdownValue}
                      HandleGoldRate={HandleGoldRate}
                      HandleRemarks={HandleRemarks}
                      clientGroupList={clientGroupList}
                    />
                    <ChallanItemsTable
                      defaultData={data?.challan_table}
                      tableData={tableData}
                      setTableData={setTableData}
                      subCategoryList={subCategoryList}
                    />
                    <NarrationTable
                      defaultData={data?.narrations}
                      narrationTableData={narrationTableData}
                      setNarrationTableData={setNarrationTableData}
                      productList={productList}
                    />
                  </div>
                </>
              );
            })
          : ''}
      </div>
    </div>
    // </div>
  );
};

export default EditChallanChitti;
