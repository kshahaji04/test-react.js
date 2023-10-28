import { useEffect, useState } from 'react';
import UseEditChallanChitti from '../../../hooks/Chitti/edit-challan-chitti-hook';
import CreateChittiForm from '../CreateChitti/CreateChittiForm';
import ChallanItemsTable from '../CreateChitti/ChallanItemsTable';
import NarrationTable from '../CreateChitti/NarrationTable';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get_specific_chitti_challan } from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';

const EditChallanChitti = () => {
  const {
    challanDetail,
    setNarrationTableData,
    subCategoryList,
    productList,
    selectedDropdownValue,
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
    setStateForDocStatus,
    setRemarks,
    setGoldRate,
    HandleSubmitChallanChitti,
    HandleCancelChallanChitti,
    HandleDeleteChallanChitti,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
  }: any = UseEditChallanChitti();
  const navigate = useNavigate();

  const [showButton, setShowButton] = useState<any>();
  const [readOnly, setReadOnly] = useState<boolean>(false);

  const HandleBackButton = () => {
    navigate(-1);
  };

  const docStatusFromStore: any = useSelector(get_specific_chitti_challan);
  console.log('docStatus', docStatusFromStore?.docStatus);

  useEffect(() => {
    setShowButton(docStatusFromStore?.docStatus);
    if (docStatusFromStore?.docStatus > 0) {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
  }, [docStatusFromStore]);

  console.log('readdd', stateForDocStatus);
  return (
    <div className="container">
      <div className="">
        <div className="d-flex justify-content-between  my-3">
          <div className="d-flex align-items-center">
            <div>
              <button
                type="submit"
                onClick={HandleBackButton}
                className=" btn btn-outline-primary me-3 px-2 py-0 form-submit-button"
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
              className=" btn btn-outline-primary px-2 py-0 form-submit-button"
            >
              Save
            </button>
          )}
          {stateForDocStatus === false && showButton === 0 && (
            <button
              type="submit"
              className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
              onClick={HandleSubmitChallanChitti}
            >
              Submit
            </button>
          )}
          {showButton === 1 && (
            <button
              type="submit"
              className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
              onClick={HandleCancelChallanChitti}
            >
              Cancel
            </button>
          )}
          {showButton === 2 && (
            <button
              type="submit"
              className=" btn btn-outline-primary px-2 py-0  form-submit-button"
              onClick={HandleDeleteChallanChitti}
            >
              Delete
            </button>
          )}
        </div>
      </div>

      <div>
        {challanDetail?.length > 0 && challanDetail !== null
          ? challanDetail.map((data: any) => {
            console.log('default data challan', data);
            return (
              <>
                <CreateChittiForm
                  defaultData={data}
                  HandleDateChange={HandleDateChange}
                  selectedDropdownValue={selectedDropdownValue}
                  clientNameList={clientNameList}
                  setSelectedDropdownValue={setSelectedDropdownValue}
                  HandleGoldRate={HandleGoldRate}
                  HandleRemarks={HandleRemarks}
                  clientGroupList={clientGroupList}
                  setStateForDocStatus={setStateForDocStatus}
                  setRemarks={setRemarks}
                  setGoldRate={setGoldRate}
                  readOnly={readOnly}
                />
                <ChallanItemsTable
                  defaultData={data?.challan_table}
                  tableData={tableData}
                  setTableData={setTableData}
                  subCategoryList={subCategoryList}
                  setStateForDocStatus={setStateForDocStatus}
                  setTotalGrossWeightOfChallanTable={
                    setTotalGrossWeightOfChallanTable
                  }
                  readOnly={readOnly}
                />
                <NarrationTable
                  defaultData={data?.narrations}
                  narrationTableData={narrationTableData}
                  setNarrationTableData={setNarrationTableData}
                  productList={productList}
                  setStateForDocStatus={setStateForDocStatus}
                  setTotalHuidWeightOfHuidTable={
                    setTotalHuidWeightOfHuidTable
                  }
                  readOnly={readOnly}
                />
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
