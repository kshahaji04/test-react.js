import { useState } from 'react';
import DeleteAlertModal from './Modal/DeleteAlertModal';
import { useNavigate } from 'react-router-dom';

const ButtonSectionComponent = ({
  stateForDocStatus,
  setStateForDocStatus,
  docStatus,
  readOnly,
  setReadOnlyFields,
  handleDeleteBtn,
  handleUpdateDocstatusBtn,
  handleAmendBtn,
  handlePrintBtn,
  handleUpdateRecordBtn,
}: any) => {
  const navigate: any = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showSaveButtonForAmendFlow, setShowSaveButtonForAmendFlow] =
    useState<boolean>(false);

  const handleAmendButtonChanges: any = async () => {
    setShowSaveButtonForAmendFlow(true);
    setStateForDocStatus(true);
    setReadOnlyFields(false);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="d-flex justify-content-between  my-3">
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
        {stateForDocStatus === true && docStatus === 0 && (
          <button type="button" className="btn docstatus-button">
            Not Saved
          </button>
        )}
        {stateForDocStatus === false && docStatus === 0 && (
          <button type="button" className="btn docstatus-button">
            Draft
          </button>
        )}
        {docStatus === 1 && (
          <button type="button" className="btn docstatus-button">
            Submit
          </button>
        )}
        {docStatus === 2 && readOnly && (
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
        {stateForDocStatus === true && docStatus === 0 && (
          <button
            type="submit"
            onClick={handleUpdateRecordBtn}
            className=" btn btn-outline-primary px-2 py-0 form-submit-button"
          >
            Save
          </button>
        )}
        {stateForDocStatus === false && docStatus === 0 && (
          <button
            type="submit"
            className=" btn btn-outline-primary px-2 py-0 form-submit-button"
            // disabled={
            //   challanDetail?.length > 0 &&
            //   challanDetail !== null &&
            //   challanDetail[0]?.date !==
            //     new Date()?.toISOString()?.split('T')[0]
            // }
            onClick={() => handleUpdateDocstatusBtn('1')}
          >
            Submit
          </button>
        )}
        {docStatus === 1 && (
          <button
            type="submit"
            className=" btn btn-outline-primary me-2 px-2 py-0 form-submit-button"
            onClick={handlePrintBtn}
          >
            Print
          </button>
        )}
        {docStatus === 1 && (
          <button
            type="submit"
            className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
            onClick={() => handleUpdateDocstatusBtn('2')}
          >
            Cancel
          </button>
        )}

        {docStatus === 2 && showSaveButtonForAmendFlow === false && (
          <>
            <button
              type="submit"
              className=" btn btn-outline-primary px-2 me-2 py-0 form-submit-button"
              //   disabled={
              //     challanDetail?.length > 0 &&
              //     challanDetail !== null &&
              //     challanDetail[0]?.date !==
              //       new Date()?.toISOString()?.split('T')[0]
              //   }
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
              onClick={handleAmendBtn}
              className=" btn btn-outline-primary px-2 py-0 me-2 form-submit-button"
            >
              Save
            </button>
          )}

        {docStatus === 2 && (
          <button
            type="submit"
            className="btn btn-outline-primary px-2 py-0  form-submit-button"
            // disabled={
            //   challanDetail?.length > 0 &&
            //   challanDetail !== null &&
            //   challanDetail[0]?.date !==
            //     new Date()?.toISOString()?.split('T')[0]
            // }
            onClick={() => setIsModalOpen(true)}
          >
            Delete
          </button>
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

export default ButtonSectionComponent;
