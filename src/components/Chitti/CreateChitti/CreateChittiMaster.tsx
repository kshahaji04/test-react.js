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
  clientGroupList,
  HandleClientGroup,
  HandleDateChange,
  date,
  setStateForDocStatus,
  HandleEmptyChallanChittiTable,
  goldRate,
  remarks
}: any) => {
  return (
    <div>
      <div className='row'>
        <div className='col-lg-10'>
        </div>
        <div className="col-lg-2">
          <div className='d-flex justify-content-end'>
            <button
              type="submit"
              onClick={HandleEmptyChallanChittiTable}
              className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
            >
              New
            </button>
            <div className="">
              <button
                type="submit"
                onClick={HandleCreateChittiSubmit}
                className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <CreateChittiForm
        currentDate={currentDate}
        selectedDropdownValue={selectedDropdownValue}
        HandleGoldRate={HandleGoldRate}
        HandleRemarks={HandleRemarks}
        setSelectedDropdownValue={setSelectedDropdownValue}
        clientNameList={clientNameList}
        clientGroupList={clientGroupList}
        HandleClientGroup={HandleClientGroup}
        HandleDateChange={HandleDateChange}
        date={date}
        goldRate={goldRate}
        remarks={remarks}
      />
      <ChallanItemsTable
        tableData={tableData}
        setTableData={setTableData}
        subCategoryList={subCategoryList}
        setStateForDocStatus={setStateForDocStatus}
      />
      <NarrationTable
        narrationTableData={narrationTableData}
        setNarrationTableData={setNarrationTableData}
        productList={productList}
        setStateForDocStatus={setStateForDocStatus}
      />
    </div>
  );
};

export default CreateChittiMaster;
