import SalesReturnTable from './SalesReturnTable';
import SalesReturnTopSection from './SalesReturnTopSection';

const CreateSalesReturnMaster = ({
  salesReturnTable,
  setSalesReturnTable,
  handlePurchaseTableFieldChange,
  handleDeleteRow,
  stateForDocStatus,
  subCategoryList,
  handleAddRow,
  amountValue,
  handleKeyDown,
  handleSRTopSectionData,
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
      <SalesReturnTopSection
        handleSRTopSectionData={handleSRTopSectionData}
        clientNameList={clientNameList}
        topSectionInputData={topSectionInputData}
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
      />
    </>
  );
};

export default CreateSalesReturnMaster;
