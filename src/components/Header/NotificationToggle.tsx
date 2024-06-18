import { useRef, useState } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { useSelector } from 'react-redux';
import { get_purchase_receipt_listing } from '../../store/slices/PurchaseReceipt/get-purchase-receipt-listing-slice';
import { get_sales_return_listing } from '../../store/slices/SalesReturn/get-sales-return-listing-slice';

const NotificationToggle = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const purchaseReceiptData: any = useSelector(get_purchase_receipt_listing);
  const salesReturnData: any = useSelector(get_sales_return_listing);
  console.log('data for notify PR', purchaseReceiptData);
  console.log('data for notify SR', salesReturnData);

  const checkPendingRecords = (
    purchaseReceiptData: any,
    salesReturnData: any
  ) => {
    let todayDate: any = new Date()
      .toISOString()
      .split('T')[0]
      .split('-')
      .reverse()
      .join('-');

    const pendingPRRecords =
      (purchaseReceiptData?.data?.length > 0 &&
        purchaseReceiptData?.data !== '' &&
        purchaseReceiptData?.data.filter(
          (data: any) => data.date === todayDate && data.docstatus === 0
        )) ??
      [];

    const pendingSRRecords =
      (salesReturnData?.data?.length > 0 &&
        salesReturnData?.data !== '' &&
        salesReturnData?.data.filter(
          (data: any) => data.date === todayDate && data.docstatus === 0
        )) ??
      [];

    return { pendingPRRecords, pendingSRRecords };
  };
  const { pendingPRRecords, pendingSRRecords } = checkPendingRecords(
    purchaseReceiptData,
    salesReturnData
  );

  console.log('records', pendingPRRecords, pendingSRRecords);
  return (
    <>
      <div ref={target} className="px-4" onClick={() => setShow(!show)}>
        <i className="fa-regular fa-bell fs-5 text-secondary cursor-pointer"></i>
      </div>
      <Overlay target={target.current} show={show} placement="left">
        {(props) => (
          <Tooltip
            id="overlay-example "
            className="bg-white notification-tooltip"
            {...props}
          >
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
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
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                No New notifications
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                No New notifications
              </div>
            </div>
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

export default NotificationToggle;
