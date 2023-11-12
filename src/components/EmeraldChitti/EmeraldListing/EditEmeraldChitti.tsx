import { useState, useEffect } from 'react';
import EmeraldCreateChitti from '../CreateEmeraldChitti/EmeraldCreateChitti';

import UseEditEmeraldChittiHook from '../../../hooks/Emerald/edit-emerald-chitti-hook';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get_specific_emerald_chitti } from '../../../store/slices/Emerald/get-specific-emrald-slice';
import EmeraldChittiTableNew from '../CreateEmeraldChitti/EmeraldChittiTableNew';

const EditEmeraldChitti = () => {
  const navigate = useNavigate();
  // const { subCategoryList } = UseSubCategoryHook();
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
    showSaveButtonForAmendFlow,
    HandleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    HandleSubmitEmeraldChittiData,
    HandleCancelEmeraldChitti,
    HandleDeleteEmeraldChitti,
    subCategoryList,
    HandleAddRow
  }: any = UseEditEmeraldChittiHook();

  console.log('challan detail', challanDetail);
  const HandleBackButton = () => {
    navigate(-1);
  };

  const [showButton, setShowButton] = useState<any>();
  const [readOnly, setReadOnly] = useState<boolean>(false);

  const docStatusFromStore: any = useSelector(get_specific_emerald_chitti);
  console.log('docStatus', docStatusFromStore?.docStatus);
  useEffect(() => {
    setShowButton(docStatusFromStore?.docStatus);
    if (docStatusFromStore?.docStatus > 0) {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
  }, [docStatusFromStore]);

  console.log(
    'showSaveButtonForAmendFlow',
    showSaveButtonForAmendFlow,
    showButton
  );
  const HandleAmendButtonChanges: any = async () => {
    console.log('docStatus from store in amend func');
    setShowSaveButtonForAmendFlow(true);
    setStateForDocStatus(true);
    setReadOnly(false);
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
                className=" btn btn-outline-primary me-3 px-2 py-0 form-submit-button"
              >
                Back
              </button>
            </div>
            {stateForDocStatus === true && showButton === 0 && (
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
            {showButton === 2 && readOnly && (
              <button type="button" className="btn docstatus-button">
                Cancelled
              </button>
            )}
            {showSaveButtonForAmendFlow &&
              stateForDocStatus &&
              readOnly === false && (
                <button type="button" className="btn docstatus-button">
                  Not saved
                </button>
              )}
          </div>
          <div>
            {stateForDocStatus === true && showButton === 0 && (
              <button
                type="submit"
                onClick={HandleUpdateEmeraldChittiSubmit}
                className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
              >
                Save
              </button>
            )}
            {stateForDocStatus === false && showButton === 0 && (
              <button
                type="submit"
                className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
                onClick={HandleSubmitEmeraldChittiData}
              >
                Submit
              </button>
            )}
            {showButton === 1 && (
              <button
                type="submit"
                className=" btn btn-outline-primary px-2 py-0 form-submit-button"
                onClick={HandleCancelEmeraldChitti}
              >
                Cancel
              </button>
            )}

            {challanDetail?.length > 0 &&
              challanDetail !== null &&
              challanDetail[0]?.date ===
              new Date()?.toISOString()?.split('T')[0] && (
                <>
                  {showButton === 2 && showSaveButtonForAmendFlow === false && (
                    <>
                      <button
                        type="submit"
                        className=" btn btn-outline-primary px-2 me-2 py-0  form-submit-button"
                        onClick={HandleAmendButtonChanges}
                      >
                        Amend
                      </button>
                    </>
                  )}
                </>
              )}
            {showSaveButtonForAmendFlow &&
              stateForDocStatus &&
              readOnly === false && (
                <button
                  type="submit"
                  onClick={HandleAmendButtonForDuplicateChitti}
                  className=" btn btn-outline-primary px-2 py-0 me-2 form-submit-button"
                >
                  Save
                </button>
              )}

            {showButton === 2 && (
              <button
                type="submit"
                className=" btn btn-outline-primary px-2 py-0  form-submit-button"
                onClick={HandleDeleteEmeraldChitti}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>

      <div>
        <div>
          {/* {challanDetail?.length > 0 &&
            challanDetail !== null &&
            challanDetail.map((data: any) => {
              return (
                <> */}
          <EmeraldCreateChitti
            // defaultData={data}
            selectedDropdownValue={selectedDropdownValue}
            setSelectedDropdownValue={setSelectedDropdownValue}
            HandleClientGroup={HandleClientGroup}
            clientGroupList={clientGroupList}
            clientNameList={clientNameList}
            currentDate={currentDate}
            handleDateChange={handleDateChange}
            transactionDate={transactionDate}
            setStateForDocStatus={setStateForDocStatus}
            readOnly={readOnly}
          />

          {/* <EmeraldChittiTable
                    defaultData={data?.challan_table}
                    tableData={tableData}
                    setTableData={setTableData}
                    subCategoryList={subCategoryList}
                    productItemList={productItemList}
                    setStateForDocStatus={setStateForDocStatus}
                    readOnly={readOnly}
                  /> */}
          <EmeraldChittiTableNew
            // defaultData={data?.challan_table}
            tableData={tableData}
            setTableData={setTableData}
            subCategoryList={subCategoryList}
            productItemList={productItemList}
            setStateForDocStatus={setStateForDocStatus}
            readOnly={readOnly}

            HandleAddRow={HandleAddRow}
          />

          {/* </>
              );
            })} */}
        </div>
      </div>
    </div>
  );
};

export default EditEmeraldChitti;
