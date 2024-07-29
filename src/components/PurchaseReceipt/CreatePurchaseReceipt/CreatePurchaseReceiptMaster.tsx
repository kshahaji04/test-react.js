import { useSelector } from 'react-redux';
import PurchaseReceiptTopSection from './PurchaseReceiptTopSection';
import PurchaseReceiptTable from './PurchaseReceiptTable';
import { buttonLoadingState } from '../../../store/slices/btn-loading-slice';

const CreatePurchaseReceiptMaster = ({
  purchaseReceiptTable,
  setPurchaseReceiptTable,
  handlePurchaseTableFieldChange,
  handleDeleteRow,
  stateForDocStatus,
  subCategoryList,
  handleAddRow,
  amountValue,
  handleKeyDown,
  handlePRTopSectionData,
  clientNameList,
  topSectionInputData,
  handleCreatePR,
}: any) => {
  const buttonLoadingStateFromStore: any = useSelector(buttonLoadingState);

  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          onClick={handleCreatePR}
          disabled={buttonLoadingStateFromStore.loading}
          className="btn btn-outline-primary px-2 py-0 form-submit-button"
        >
          {buttonLoadingStateFromStore?.loading === true && (
            <i className="fa fa-spinner fa-spin me-1"></i>
          )}
          Save
        </button>
      </div>
      <PurchaseReceiptTopSection
        handlePRTopSectionData={handlePRTopSectionData}
        clientNameList={clientNameList}
        topSectionInputData={topSectionInputData}
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
      />
    </>
  );
};

export default CreatePurchaseReceiptMaster;
