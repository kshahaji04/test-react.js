import React from 'react';
import PurchaseReceiptTopSection from './PurchaseReceiptTopSection';
import PurchaseReceiptTable from './PurchaseReceiptTable';

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
  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          onClick={handleCreatePR}
          className="btn btn-outline-primary  px-2 py-0 form-submit-button"
        >
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
