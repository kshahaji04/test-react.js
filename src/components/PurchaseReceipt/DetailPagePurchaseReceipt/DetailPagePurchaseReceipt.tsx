import usePurchaseReceiptDetailHook from '../../../hooks/PurchaseReceiptHook/purchase-receipt-detail-hook';
import PurchaseReceiptTopSection from '../CreatePurchaseReceipt/PurchaseReceiptTopSection';
import PurchaseReceiptTable from '../CreatePurchaseReceipt/PurchaseReceiptTable';
import { get_detail_purchase_receipt } from '../../../store/slices/PurchaseReceipt/get-detail-purchase-receipt-slice';
import { useSelector } from 'react-redux';
import ButtonSectionComponent from '../../General/ButtonSectionComponent';

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
  } = usePurchaseReceiptDetailHook();

  const purchaseReceiptDetailFromStore: any = useSelector(
    get_detail_purchase_receipt
  );
  // console.log('purchaseReceiptDetails in tsx', purchaseReceiptDetailFromStore);
  return (
    <>
      <div className="container">
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
    </>
  );
};

export default DetailPagePurchaseReceipt;
