import { useEffect, useState } from 'react';
import useEditChallanChitti from '../../../hooks/Chitti/edit-challan-chitti-hook';
import CreateChittiForm from '../CreateChitti/CreateChittiForm';
import ChallanItemsTable from '../CreateChitti/ChallanItemsTable';
import NarrationTable from '../CreateChitti/NarrationTable';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get_specific_chitti_challan } from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import Loader from '../../General/Loader';
import NoRecord from '../../NoRecord';
import DeleteAlertModal from '../../Modal/DeleteAlertModal';
import { buttonLoadingState } from '../../../store/slices/btn-loading-slice';

const EditChallanChitti = () => {
  const {
    challanDetail,
    setNarrationTableData,
    subCategoryList,
    productList,
    selectedDropdownValue,
    setTableData,
    handleDateChange,
    clientNameList,
    setSelectedDropdownValue,
    handleUpdateChallanSubmit,
    handleGoldRate,
    handleRemarks,
    tableData,
    narrationTableData,
    clientGroupList,
    stateForDocStatus,
    setStateForDocStatus,
    setRemarks,
    setGoldRate,
    handleSubmitChallanChitti,
    handleCancelChallanChitti,
    handleDeleteChallanChitti,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    handleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    setCheckGrossAndNetWeight,
    handlePrintButton,
    currentDate,
  }: any = useEditChallanChitti();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState<any>();
  const [readOnly, setReadOnly] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const HandleBackButton = () => {
    navigate(-1);
  };

  const challanDetailDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );
  const buttonLoadingStateFromStore: any = useSelector(buttonLoadingState);
  const handleDeleteBtn: any = () => {
    handleDeleteChallanChitti();
  };

  useEffect(() => {
    setShowButton(challanDetailDataFromStore?.docStatus);
    if (challanDetailDataFromStore?.docStatus > 0) {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
  }, [challanDetailDataFromStore]);

  const handleAmendButtonChanges: any = async () => {
    setShowSaveButtonForAmendFlow(true);
    setStateForDocStatus(true);
    setReadOnly(false);
  };

  // console.log("stateForDocStatus in btn section", stateForDocStatus)
  let todayDate: any = new Date()
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('-');

  return (
    <div className="container">
      <div className="col-lg-9 col-12 mx-auto mt-2">
        {challanDetailDataFromStore?.isLoading === 'pending' ? (
          <Loader />
        ) : (
          <>
            {Object.keys(challanDetailDataFromStore?.data)?.length === 0 &&
            challanDetailDataFromStore?.isLoading === 'succeeded' ? (
              <NoRecord />
            ) : (
              <>
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
                        onClick={handleUpdateChallanSubmit}
                        disabled={buttonLoadingStateFromStore?.loading}
                        className=" btn btn-outline-primary px-2 py-0 form-submit-button"
                      >
                        {buttonLoadingStateFromStore?.loading === true && (
                          <i className="fa fa-spinner fa-spin me-1"></i>
                        )}
                        Save
                      </button>
                    )}
                    {stateForDocStatus === false && showButton === 0 && (
                      <button
                        type="submit"
                        className=" btn btn-outline-primary px-2 py-0 form-submit-button"
                        disabled={
                          challanDetail?.length > 0 &&
                          challanDetail !== null &&
                          challanDetail[0]?.date !== todayDate
                        }
                        onClick={handleSubmitChallanChitti}
                      >
                        {buttonLoadingStateFromStore?.loading === true && (
                          <i className="fa fa-spinner fa-spin me-1"></i>
                        )}
                        Submit
                      </button>
                    )}
                    {showButton === 1 && (
                      <button
                        type="submit"
                        className=" btn btn-outline-primary me-2 px-2 py-0 form-submit-button"
                        disabled={buttonLoadingStateFromStore?.loading}
                        onClick={handlePrintButton}
                      >
                        {buttonLoadingStateFromStore?.loading === true && (
                          <i className="fa fa-spinner fa-spin me-1"></i>
                        )}
                        Print
                      </button>
                    )}
                    {showButton === 1 && (
                      <button
                        type="submit"
                        className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
                        disabled={buttonLoadingStateFromStore?.loading}
                        onClick={handleCancelChallanChitti}
                      >
                        {buttonLoadingStateFromStore?.loading === true && (
                          <i className="fa fa-spinner fa-spin me-1"></i>
                        )}
                        Cancel
                      </button>
                    )}

                    {showButton === 2 &&
                      showSaveButtonForAmendFlow === false && (
                        <>
                          <button
                            type="submit"
                            className=" btn btn-outline-primary px-2 me-2 py-0 form-submit-button"
                            disabled={
                              challanDetail?.length > 0 &&
                              challanDetail !== null &&
                              challanDetail[0]?.date !== todayDate
                            }
                            onClick={handleAmendButtonChanges}
                          >
                            Amend
                          </button>
                        </>
                      )}

                    {showSaveButtonForAmendFlow &&
                      stateForDocStatus &&
                      readOnly === false && (
                        <button
                          type="submit"
                          disabled={buttonLoadingStateFromStore?.loading}
                          onClick={handleAmendButtonForDuplicateChitti}
                          className=" btn btn-outline-primary px-2 py-0 me-2 form-submit-button"
                        >
                          {buttonLoadingStateFromStore?.loading === true && (
                            <i className="fa fa-spinner fa-spin me-1"></i>
                          )}
                          Save
                        </button>
                      )}

                    {showButton === 2 && (
                      <button
                        type="submit"
                        className="btn btn-outline-primary px-2 py-0  form-submit-button"
                        disabled={
                          challanDetail?.length > 0 &&
                          challanDetail !== null &&
                          challanDetail[0]?.date !== todayDate
                        }
                        onClick={() => setIsModalOpen(true)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
                <div className="">
                  {challanDetail?.length > 0 && challanDetail !== null
                    ? challanDetail.map((data: any) => {
                        return (
                          <>
                            <CreateChittiForm
                              defaultData={data}
                              handleDateChange={handleDateChange}
                              selectedDropdownValue={selectedDropdownValue}
                              clientNameList={clientNameList}
                              setSelectedDropdownValue={
                                setSelectedDropdownValue
                              }
                              handleGoldRate={handleGoldRate}
                              handleRemarks={handleRemarks}
                              clientGroupList={clientGroupList}
                              setStateForDocStatus={setStateForDocStatus}
                              setRemarks={setRemarks}
                              setGoldRate={setGoldRate}
                              readOnly={readOnly}
                              currentDate={currentDate}
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
                              setCheckGrossAndNetWeight={
                                setCheckGrossAndNetWeight
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
              </>
            )}
          </>
        )}
      </div>
      {isModalOpen && (
        <DeleteAlertModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleDeleteBtn={handleDeleteBtn}
        />
      )}
    </div>
  );
};

export default EditChallanChitti;
