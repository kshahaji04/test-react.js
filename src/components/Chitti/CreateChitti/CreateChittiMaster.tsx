import ChallanItemsTable from './ChallanItemsTable';
import CreateChittiForm from './CreateChittiForm';
import NarrationTable from './NarrationTable';

const CreateChittiMaster = ({
  HandleCreateChittiSubmit,
  currentDate,
  selectedDropdownValue,
  HandleGoldRate,
  HandleRemarks,
  tableData,
  setTableData,
  narrationTableData,
  setNarrationTableData,
  setSelectedDropdownValue,
  clientNameList,
  subCategoryList,
  productList,
}: any) => {
  // const HandleCreateChittiSubmit: any = () => {};

  return (
    <div>
      <div className="d-flex justify-content-end ">
        <button
          type="submit"
          onClick={HandleCreateChittiSubmit}
          className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
        >
          Submit
        </button>
      </div>
      <CreateChittiForm
        currentDate={currentDate}
        selectedDropdownValue={selectedDropdownValue}
        HandleGoldRate={HandleGoldRate}
        HandleRemarks={HandleRemarks}
        setSelectedDropdownValue={setSelectedDropdownValue}
        clientNameList={clientNameList}
      />
      <ChallanItemsTable
        tableData={tableData}
        setTableData={setTableData}
        subCategoryList={subCategoryList}
      />
      <NarrationTable
        narrationTableData={narrationTableData}
        setNarrationTableData={setNarrationTableData}
        productList={productList}
      />
    </div>
  );
};

export default CreateChittiMaster;
