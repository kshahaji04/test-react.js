import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import DeleteAlertModal from '../Modal/DeleteAlertModal';
import { buttonLoadingState } from '../../store/slices/btn-loading-slice';
import { useSelector } from 'react-redux';

const ButtonSectionComponent = ({
  stateForDocStatus,
  setStateForDocStatus,
  docStatus,
  readOnly,
  setReadOnlyFields,
  handleDeleteBtn,
  handleUpdateDocstatusBtn,
  handleAmendBtn,
  details,
  handleUpdateRecordBtn,
  userRolesData,
  handlePrintBtn,
}: any) => {
  const navigate: any = useNavigate();
  let pathname: any = window.location.pathname;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const buttonLoadingStateFromStore: any = useSelector(buttonLoadingState);

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

  let todayDate: any = new Date()
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('-');

  const userRoleWiseShow: any = () => {
    let userRoleHasSubmitAccess: any =
      userRolesData?.length > 0 &&
      userRolesData.some((roles: any) => roles.includes('Submit Access'));
    let userRoleHasSaveSubmitAccess: any =
      userRolesData?.length > 0 &&
      userRolesData.some((roles: any) => roles.includes('Save Submit Access'));
    if (
      pathname.includes('/purchase-receipt') ||
      pathname.includes('/sales-return')
    ) {
      if (userRoleHasSubmitAccess || userRoleHasSaveSubmitAccess) {
        return (
          <button
            type="submit"
            className=" btn btn-outline-primary px-2 py-0 form-submit-button"
            disabled={
              details?.length > 0 &&
              details !== null &&
              details[0]?.date !== todayDate
            }
            onClick={() => handleUpdateDocstatusBtn('1')}
          >
            {buttonLoadingStateFromStore?.loading === true && (
              <i className="fa fa-spinner fa-spin me-1"></i>
            )}
            Submit
          </button>
        );
      }
    } else {
      return (
        <button
          type="submit"
          className=" btn btn-outline-primary px-2 py-0 form-submit-button"
          disabled={
            details?.length > 0 &&
            details !== null &&
            details[0]?.date !== todayDate
          }
          onClick={() => handleUpdateDocstatusBtn('1')}
        >
          {buttonLoadingStateFromStore?.loading === true && (
            <i className="fa fa-spinner fa-spin me-1"></i>
          )}
          Submit
        </button>
      );
    }
  };

  return (
    <>
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
              disabled={buttonLoadingStateFromStore?.loading}
              className=" btn btn-outline-primary px-2 py-0 form-submit-button"
            >
              {buttonLoadingStateFromStore?.loading === true && (
                <i className="fa fa-spinner fa-spin me-1"></i>
              )}
              Save
            </button>
          )}
          {stateForDocStatus === false && docStatus === 0 && (
            <>{userRoleWiseShow(details)}</>
          )}
          {docStatus === 1 && (
            <button
              type="submit"
              className=" btn btn-outline-primary me-2 px-2 py-0 form-submit-button"
              disabled={buttonLoadingStateFromStore?.loading}
              onClick={handlePrintBtn}
            >
              Print
            </button>
          )}
          {docStatus === 1 && (
            <button
              type="submit"
              className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
              disabled={buttonLoadingStateFromStore?.loading}
              onClick={() => handleUpdateDocstatusBtn('2')}
            >
              {buttonLoadingStateFromStore?.loading === true && (
                <i className="fa fa-spinner fa-spin me-1"></i>
              )}
              Cancel
            </button>
          )}

          {docStatus === 2 && showSaveButtonForAmendFlow === false && (
            <>
              <button
                type="submit"
                className=" btn btn-outline-primary px-2 me-2 py-0 form-submit-button"
                disabled={
                  details?.length > 0 &&
                  details !== null &&
                  details[0]?.date !== todayDate
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
                onClick={handleAmendBtn}
                disabled={buttonLoadingStateFromStore?.loading}
                className=" btn btn-outline-primary px-2 py-0 me-2 form-submit-button"
              >
                {buttonLoadingStateFromStore?.loading === true && (
                  <i className="fa fa-spinner fa-spin me-1"></i>
                )}
                Save
              </button>
            )}

          {docStatus === 2 && (
            <button
              type="submit"
              className="btn btn-outline-primary px-2 py-0  form-submit-button"
              disabled={
                details?.length > 0 &&
                details !== null &&
                details[0]?.date !== todayDate
              }
              onClick={() => setIsModalOpen(true)}
            >
              Delete
            </button>
          )}
          {userRolesData?.length > 0 &&
            userRolesData.some((roles: any) =>
              roles.includes('Save Submit Access')
            ) && (
              <button
                type="submit"
                onClick={handleBackButton}
                className=" btn btn-primary ms-2 px-2 py-0 form-submit-button"
              >
                Create New{' '}
                {pathname?.includes('/purchase-receipt') ? 'PR' : 'SR'}
              </button>
            )}
        </div>
      </div>

      {isModalOpen && (
        <DeleteAlertModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleDeleteBtn={handleDeleteBtn}
        />
      )}
    </>
  );
};

export default ButtonSectionComponent;
