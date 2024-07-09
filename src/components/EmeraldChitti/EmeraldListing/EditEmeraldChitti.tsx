import { useState, useEffect } from 'react';
import EmeraldCreateChitti from '../CreateEmeraldChitti/EmeraldCreateChitti';
import useEditEmeraldChittiHook from '../../../hooks/Emerald/edit-emerald-chitti-hook';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get_specific_emerald_chitti } from '../../../store/slices/Emerald/get-specific-emrald-slice';
import EmeraldChittiTableNew from '../CreateEmeraldChitti/EmeraldChittiTableNew';
import { get_specific_chitti_challan } from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import Loader from '../../General/Loader';
import NoRecord from '../../NoRecord';
import DeleteAlertModal from '../../Modal/DeleteAlertModal';
import { buttonLoadingState } from '../../../store/slices/btn-loading-slice';

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
    topSectionInputData,
    handleTopSectionData,
  }: any = useEditEmeraldChittiHook();

  // console.log('details of emerald chitti', tableData, topSectionInputData);

  const emeraldDetailDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );

  const handleBackButton = () => {
    navigate(-1);
  };

  const [showButton, setShowButton] = useState<any>();
  const [readOnly, setReadOnly] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const docStatusFromStore: any = useSelector(get_specific_emerald_chitti);
  const buttonLoadingStateFromStore: any = useSelector(buttonLoadingState);

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

  const handleDeleteBtn: any = () => {
    handleDeleteEmeraldChitti();
  };

  let todayDate: any = new Date()
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('-');

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
                      disabled={buttonLoadingStateFromStore?.loading}
                      className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
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
                      className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
                      disabled={topSectionInputData?.date !== todayDate}
                      onClick={handleSubmitEmeraldChittiData}
                    >
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
                      className=" btn btn-outline-primary px-2 py-0 form-submit-button"
                      disabled={buttonLoadingStateFromStore?.loading}
                      onClick={handleCancelEmeraldChitti}
                    >
                      {buttonLoadingStateFromStore?.loading === true && (
                        <i className="fa fa-spinner fa-spin me-1"></i>
                      )}
                      Cancel
                    </button>
                  )}

                  {showButton === 2 && showSaveButtonForAmendFlow === false && (
                    <>
                      <button
                        type="submit"
                        className=" btn btn-outline-primary px-2 me-2 py-0  form-submit-button"
                        disabled={topSectionInputData?.date !== todayDate}
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
                        onClick={handleAmendButtonForDuplicateChitti}
                        disabled={buttonLoadingStateFromStore?.loading}
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
                      className=" btn btn-outline-primary px-2 py-0  form-submit-button"
                      disabled={topSectionInputData?.date !== todayDate}
                      onClick={() => setIsModalOpen(true)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>

              <EmeraldCreateChitti
                topSectionInputData={topSectionInputData}
                handleTopSectionData={handleTopSectionData}
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
                defaultData={tableData}
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
          )}
        </>
      )}
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

export default EditEmeraldChitti;
