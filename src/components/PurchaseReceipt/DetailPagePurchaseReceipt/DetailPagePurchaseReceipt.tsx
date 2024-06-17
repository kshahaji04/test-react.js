import usePurchaseReceiptDetailHook from '../../../hooks/PurchaseReceiptHook/purchase-receipt-detail-hook';
import PurchaseReceiptTopSection from '../CreatePurchaseReceipt/PurchaseReceiptTopSection';
import PurchaseReceiptTable from '../CreatePurchaseReceipt/PurchaseReceiptTable';
import { get_detail_purchase_receipt } from '../../../store/slices/PurchaseReceipt/get-detail-purchase-receipt-slice';
import { useSelector } from 'react-redux';
import ButtonSectionComponent from '../../General/ButtonSectionComponent';
import { useEffect } from 'react';

const DetailPagePurchaseReceipt = () => {
  const {
    purchaseReceiptTable,
    setPurchaseReceiptTable,
    handlePRTopSectionData,
    clientNameList,
    topSectionInputData,
    handlePurchaseTableFieldChange,
    handleDeleteRow,
    stateForDocStatus,
    setStateForDocStatus,
    subCategoryList,
    handleAddRow,
    amountValue,
    handleKeyDown,
    readOnlyFields,
    setReadOnlyFields,
    handleUpdateRecord,
    handleUpdateDocstatusBtn,
    handleDeleteRecord,
    handlePrintRecord,
    handleAmendRecord,
    userRolesData,
  } = usePurchaseReceiptDetailHook();

  const purchaseReceiptDetailFromStore: any = useSelector(
    get_detail_purchase_receipt
  );

  useEffect(() => {
    if (purchaseReceiptDetailFromStore?.docStatus > 0) {
      setReadOnlyFields(true);
    } else {
      setReadOnlyFields(false);
    }
  }, [purchaseReceiptDetailFromStore]);

  return (
    <>
      <div className="container">
        <div className='col-lg-9 col-12 mx-auto mt-2"'>
          <ButtonSectionComponent
            stateForDocStatus={stateForDocStatus}
            setStateForDocStatus={setStateForDocStatus}
            docStatus={purchaseReceiptDetailFromStore?.docStatus}
            readOnly={readOnlyFields}
            setReadOnlyFields={setReadOnlyFields}
            handleUpdateRecordBtn={handleUpdateRecord}
            handleUpdateDocstatusBtn={handleUpdateDocstatusBtn}
            handleDeleteBtn={handleDeleteRecord}
            handleAmendBtn={handleAmendRecord}
            handlePrintBtn={handlePrintRecord}
            details={purchaseReceiptDetailFromStore?.data}
            userRolesData={userRolesData}
          />

          <PurchaseReceiptTopSection
            handlePRTopSectionData={handlePRTopSectionData}
            clientNameList={clientNameList}
            topSectionInputData={topSectionInputData}
            readOnlyFields={readOnlyFields}
          />

          <PurchaseReceiptTable
            purchaseReceiptTable={purchaseReceiptTable}
            setPurchaseReceiptTable={setPurchaseReceiptTable}
            handlePurchaseTableFieldChange={handlePurchaseTableFieldChange}
            handleDeleteRow={handleDeleteRow}
            stateForDocStatus={stateForDocStatus}
            subCategoryList={subCategoryList}
            handleAddRow={handleAddRow}
            amountValue={amountValue}
            handleKeyDown={handleKeyDown}
            readOnlyFields={readOnlyFields}
          />
        </div>
      </div>
    </>
  );
};

export default DetailPagePurchaseReceipt;
