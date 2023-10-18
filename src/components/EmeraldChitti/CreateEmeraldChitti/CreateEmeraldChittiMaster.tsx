import EmeraldCreateChitti from './EmeraldCreateChitti';
import EmeraldChittiTable from './EmeraldChittiTable';

const CreateEmeraldChittiMaster = ({
  selectedDropdownValue,
  setSelectedDropdownValue,
  HandleClientGroup,
  HandleCreateEmeraldChittiSubmit,
  clientGroupList,
  clientNameList,
  currentDate,
  handleDateChange,
  transactionDate,
  tableData,
  setTableData,
  subCategoryList,
  productItemList,
}: any) => {
  return (
    <>
      <div className="d-flex justify-content-end ">
        <button
          type="submit"
          className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
          onClick={HandleCreateEmeraldChittiSubmit}
        >
          Save
        </button>
      </div>
      <EmeraldCreateChitti
        selectedDropdownValue={selectedDropdownValue}
        setSelectedDropdownValue={setSelectedDropdownValue}
        HandleClientGroup={HandleClientGroup}
        clientGroupList={clientGroupList}
        clientNameList={clientNameList}
        currentDate={currentDate}
        handleDateChange={handleDateChange}
        transactionDate={transactionDate}
      />

      <EmeraldChittiTable
        tableData={tableData}
        setTableData={setTableData}
        subCategoryList={subCategoryList}
        productItemList={productItemList}
      />
    </>
  );
};

export default CreateEmeraldChittiMaster;
