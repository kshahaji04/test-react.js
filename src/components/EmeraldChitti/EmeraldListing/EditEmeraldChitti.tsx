import { useState, useEffect } from 'react';
import EmeraldCreateChitti from '../CreateEmeraldChitti/EmeraldCreateChitti';
import useEditEmeraldChittiHook from '../../../hooks/Emerald/edit-emerald-chitti-hook';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get_specific_emerald_chitti } from '../../../store/slices/Emerald/get-specific-emrald-slice';
import EmeraldChittiTableNew from '../CreateEmeraldChitti/EmeraldChittiTableNew';
import { get_specific_chitti_challan } from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import Loader from '../../Loader';
import NoRecord from '../../NoRecord';

const EditEmeraldChitti = () => {
  const navigate = useNavigate();

  const {
    selectedDropdownValue,
    setSelectedDropdownValue,
    productItemList,
    handleClientGroup,
    clientGroupList,
    clientNameList,
    currentDate,
    handleDateChange,
    transactionDate,
    tableData,
    setTableData,
    challanDetail,
    handleUpdateEmeraldChittiSubmit,
    stateForDocStatus,
    setStateForDocStatus,
    showSaveButtonForAmendFlow,
    handleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    handleSubmitEmeraldChittiData,
    handleCancelEmeraldChitti,
    handleDeleteEmeraldChitti,
    subCategoryList,
    handleAddRow,
    handleKeyDown,
    handleOnFocus,
    handlePrintButton,
  }: any = useEditEmeraldChittiHook();

  const emeraldDetailDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );

  const handleBackButton = () => {
    navigate(-1);
  };

  const [showButton, setShowButton] = useState<any>();
  const [readOnly, setReadOnly] = useState<boolean>(false);

  const docStatusFromStore: any = useSelector(get_specific_emerald_chitti);

  useEffect(() => {
    setShowButton(docStatusFromStore?.docStatus);
    if (docStatusFromStore?.docStatus > 0) {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
  }, [docStatusFromStore]);

  const handleAmendButtonChanges: any = async () => {
    setShowSaveButtonForAmendFlow(true);
    setStateForDocStatus(true);
    setReadOnly(false);
  };

  return (
    <div className="container">
      {emeraldDetailDataFromStore?.isLoading === 'pending' ? (
        <Loader />
      ) : (
        <>
          {Object?.keys(emeraldDetailDataFromStore?.data)?.length === 0 &&
            emeraldDetailDataFromStore?.isLoading === 'succeeded' ? (
            <NoRecord />
          ) : (
            <>
              <div className="d-flex justify-content-between my-3">
                <div className="d-flex align-items-center">
                  <div>
                    <button
                      type="submit"
                      onClick={handleBackButton}
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
                      onClick={handleUpdateEmeraldChittiSubmit}
                      className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
                    >
                      Save
                    </button>
                  )}
                  {stateForDocStatus === false && showButton === 0 && (
                    <button
                      type="submit"
                      className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
                      onClick={handleSubmitEmeraldChittiData}
                    >
                      Submit
                    </button>
                  )}
                  {showButton === 1 && (
                    <button
                      type="submit"
                      className=" btn btn-outline-primary me-2 px-2 py-0 form-submit-button"
                      onClick={handlePrintButton}
                    >
                      Print
                    </button>
                  )}
                  {showButton === 1 && (
                    <button
                      type="submit"
                      className=" btn btn-outline-primary px-2 py-0 form-submit-button"
                      onClick={handleCancelEmeraldChitti}
                    >
                      Cancel
                    </button>
                  )}

                  {challanDetail?.length > 0 &&
                    challanDetail !== null &&
                    challanDetail[0]?.date ===
                    new Date()?.toISOString()?.split('T')[0] && (
                      <>
                        {showButton === 2 &&
                          showSaveButtonForAmendFlow === false && (
                            <>
                              <button
                                type="submit"
                                className=" btn btn-outline-primary px-2 me-2 py-0  form-submit-button"
                                onClick={handleAmendButtonChanges}
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
                        onClick={handleAmendButtonForDuplicateChitti}
                        className=" btn btn-outline-primary px-2 py-0 me-2 form-submit-button"
                      >
                        Save
                      </button>
                    )}

                  {showButton === 2 && (
                    <button
                      type="submit"
                      className=" btn btn-outline-primary px-2 py-0  form-submit-button"
                      onClick={handleDeleteEmeraldChitti}
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
                      return (
                        <>
                          <EmeraldCreateChitti
                            defaultData={data}
                            selectedDropdownValue={selectedDropdownValue}
                            setSelectedDropdownValue={setSelectedDropdownValue}
                            handleClientGroup={handleClientGroup}
                            clientGroupList={clientGroupList}
                            clientNameList={clientNameList}
                            currentDate={currentDate}
                            handleDateChange={handleDateChange}
                            transactionDate={transactionDate}
                            setStateForDocStatus={setStateForDocStatus}
                            readOnly={readOnly}
                          />

                          <EmeraldChittiTableNew
                            defaultData={data?.challan_table}
                            tableData={tableData}
                            setTableData={setTableData}
                            subCategoryList={subCategoryList}
                            productItemList={productItemList}
                            setStateForDocStatus={setStateForDocStatus}
                            readOnly={readOnly}
                            handleAddRow={handleAddRow}
                            handleKeyDown={handleKeyDown}
                            handleOnFocus={handleOnFocus}
                          />
                        </>
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default EditEmeraldChitti;
