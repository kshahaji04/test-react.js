import { useSelector } from 'react-redux';
import useSalesReturnDetailHook from '../../../hooks/SalesReturn/sales-return-detail-hook';
import { get_detail_sales_return } from '../../../store/slices/SalesReturn/get-detail-sales-return-slice';

import SalesReturnTable from '../CreateSalesReturn/SalesReturnTable';
import PurchaseReceiptTopSection from '../CreateSalesReturn/SalesReturnTopSection';
import ButtonSectionComponent from '../../General/ButtonSectionComponent';

const DetailPageSalesReturn = () => {
  const {
    salesReturnTable,
    setSalesReturnTable,
    handleSRTopSectionData,
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

  const salesReturnDetailFromStore: any = useSelector(get_detail_sales_return);
  // console.log('purchaseReceiptDetails in tsx', purchaseReceiptDetailFromStore);
  return (
    <>
      <div className="container">
        <div className='col-lg-9 col-12 mx-auto mt-2"'>
          <ButtonSectionComponent
            stateForDocStatus={stateForDocStatus}
            setStateForDocStatus={setStateForDocStatus}
            docStatus={salesReturnDetailFromStore?.docStatus}
            readOnly={readOnlyFields}
            setReadOnlyFields={setReadOnlyFields}
            handleUpdateRecordBtn={handleUpdateRecord}
            handleUpdateDocstatusBtn={handleUpdateDocstatusBtn}
            handleDeleteBtn={handleDeleteRecord}
            handleAmendBtn={handleAmendRecord}
            handlePrintBtn={handlePrintRecord}
            details={salesReturnDetailFromStore?.data}
          />

          <PurchaseReceiptTopSection
            handleSRTopSectionData={handleSRTopSectionData}
            clientNameList={clientNameList}
            topSectionInputData={topSectionInputData}
            readOnlyFields={readOnlyFields}
          />

          <SalesReturnTable
            salesReturnTable={salesReturnTable}
            setSalesReturnTable={setSalesReturnTable}
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

export default DetailPageSalesReturn;
