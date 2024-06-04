import { useSelector } from 'react-redux';
import useSalesReturnDetailHook from '../../../hooks/SalesReturn/sales-return-detail-hook';
import { get_detail_purchase_receipt } from '../../../store/slices/PurchaseReceipt/get-detail-purchase-receipt-slice';
import ButtonSectionComponent from '../../ButtonSectionComponent';
import PurchaseReceiptTable from '../CreateSalesReturn/SalesReturnTable';
import PurchaseReceiptTopSection from '../CreateSalesReturn/SalesReturnTopSection';

const DetailPageSalesReturn = () => {
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
  } = useSalesReturnDetailHook();

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

export default DetailPageSalesReturn;
