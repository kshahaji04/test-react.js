import { useEffect, useState } from 'react';
import useEditChallanChitti from '../../../hooks/Chitti/edit-challan-chitti-hook';
import CreateChittiForm from '../CreateChitti/CreateChittiForm';
import ChallanItemsTable from '../CreateChitti/ChallanItemsTable';
import NarrationTable from '../CreateChitti/NarrationTable';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get_specific_chitti_challan } from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import Loader from '../../Loader';
import NoRecord from '../../NoRecord';

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
  }: any = useEditChallanChitti();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState<any>();
  const [readOnly, setReadOnly] = useState<boolean>(false);

  const HandleBackButton = () => {
    navigate(-1);
  };

  console.log(
    'challan detail current date',
    new Date()?.toISOString()?.split('T')[0]
  );

  const challanDetailDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );
  console.log(
    'challanDetailDataFromStore from store',
    challanDetailDataFromStore
  );

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
                        className=" btn btn-outline-primary px-2 py-0 form-submit-button"
                      >
                        Save
                      </button>
                    )}
                    {stateForDocStatus === false && showButton === 0 && (
                      <button
                        type="submit"
                        className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
                        onClick={handleSubmitChallanChitti}
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
                        className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
                        onClick={handleCancelChallanChitti}
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
                        onClick={handleDeleteChallanChitti}
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
    </div>
  );
};

export default EditChallanChitti;
