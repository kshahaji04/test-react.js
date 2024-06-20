import { useRef, useState } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { useSelector } from 'react-redux';
import pendingSubmissionRecords from '../../services/api/general/pending-submission-records-api';
import { get_access_token } from '../../store/slices/auth/token-login-slice';

const NotificationToggle = () => {
  const [show, setShow] = useState<boolean>(false);
  const [pendingSubmission, setPendingSubmission] = useState<any>({});
  const target = useRef(null);

  const accessToken: any = useSelector(get_access_token);

  const handleNotificationClick = async () => {
    setShow(!show);
    let pendingRecords: any = await pendingSubmissionRecords(accessToken.token);
    if (pendingRecords?.data?.message?.status === 'success') {
      setPendingSubmission(pendingRecords?.data?.message?.data);
    }
  };

  return (
    <>
      <div
        ref={target}
        className="pe-4 notification-icon"
        onClick={handleNotificationClick}
      >
        <i className="fa-regular fa-bell fs-5 text-secondary cursor-pointer"></i>
        {(pendingSubmission?.PR?.length > 0 ||
          pendingSubmission?.SR?.length > 0) && (
          <span className="notification-alert"></span>
        )}
      </div>
      <div className="">
        <Overlay target={target.current} show={show} placement="left">
          {(props) => (
            <Tooltip
              id="overlay-example "
              className="bg-white notification-tooltip"
              {...props}
            >
              <nav>
                <div className="nav nav-tabs " id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Purchase Receipt
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Sales Return
                  </button>
                </div>
              </nav>
              <div
                className="tab-content notification-tooltip-container"
                id="nav-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="text-start py-3">
                    <span className="fw-bold fs-6">Pending Submissions</span>
                    {pendingSubmission?.PR?.length > 0 ? (
                      pendingSubmission?.PR.map((data: any, index: any) => {
                        return (
                          <ul key={index} className="py-3">
                            <li className="fs-6">{data}</li>
                          </ul>
                        );
                      })
                    ) : (
                      <div className="py-3">
                        No pending submissions for today!
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="text-start py-3">
                    <span className="fw-bold fs-6">Pending Submissions</span>
                    {pendingSubmission?.SR?.length > 0 ? (
                      pendingSubmission?.SR.map((data: any, index: any) => {
                        return (
                          <ul key={index} className="py-3">
                            <li className="fs-6">{data}</li>
                          </ul>
                        );
                      })
                    ) : (
                      <div className="py-3">
                        No pending submissions for today!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Tooltip>
          )}
        </Overlay>
      </div>
    </>
  );
};

export default NotificationToggle;
