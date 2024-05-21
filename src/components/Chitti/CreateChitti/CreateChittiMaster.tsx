import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChallanItemsTable from './ChallanItemsTable';
import CreateChittiForm from './CreateChittiForm';
import NarrationTable from './NarrationTable';
import { get_specific_chitti_challan } from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import HandleButtonsDisplayInChitti from '../../HandleButtonsDisplayInChitti';

const CreateChittiMaster = ({
  handleCreateChittiSubmit,
  currentDate,
  selectedDropdownValue,
  handleGoldRate,
  handleRemarks,
  tableData,
  setTableData,
  narrationTableData,
  setNarrationTableData,
  setSelectedDropdownValue,
  clientNameList,
  subCategoryList,
  productList,
  clientGroupList,
  handleClientGroup,
  handleDateChange,
  date,
  setStateForDocStatus,
  goldRate,
  remarks,
  showSubmitButtonAfterCreateChitti,
  handleSubmitChallanChitti,
  handleCancelChallanChitti,
  handleDeleteChallanChitti,
  setTotalGrossWeightOfChallanTable,
  setTotalHuidWeightOfHuidTable,
  checkGrossAndNetWeight,
  setCheckGrossAndNetWeight,
}: any) => {
  const docStatusFromStore: any = useSelector(get_specific_chitti_challan);

  const [showButton, setShowButton] = useState<any>();

  useEffect(() => {
    setShowButton(docStatusFromStore?.docStatus);
  }, [docStatusFromStore]);

  return (
    <>
      <div className="row">
        <div className="col-lg-10"></div>
        <div className="col-lg-2">
          <div className="d-flex justify-content-end">
            <HandleButtonsDisplayInChitti
              handleCreateChittiSubmit={handleCreateChittiSubmit}
              showButton={showButton}
              showSubmitButtonAfterCreateChitti={
                showSubmitButtonAfterCreateChitti
              }
              handleSubmitChittiData={handleSubmitChallanChitti}
              handleCancelChitti={handleCancelChallanChitti}
              handleDeleteChitti={handleDeleteChallanChitti}
            />
          </div>
        </div>
      </div>
      <CreateChittiForm
        currentDate={currentDate}
        selectedDropdownValue={selectedDropdownValue}
        handleGoldRate={handleGoldRate}
        handleRemarks={handleRemarks}
        setSelectedDropdownValue={setSelectedDropdownValue}
        clientNameList={clientNameList}
        clientGroupList={clientGroupList}
        handleClientGroup={handleClientGroup}
        handleDateChange={handleDateChange}
        date={date}
        goldRate={goldRate}
        remarks={remarks}
      />
      <ChallanItemsTable
        tableData={tableData}
        setTableData={setTableData}
        subCategoryList={subCategoryList}
        setStateForDocStatus={setStateForDocStatus}
        setTotalGrossWeightOfChallanTable={setTotalGrossWeightOfChallanTable}
        checkGrossAndNetWeight={checkGrossAndNetWeight}
        setCheckGrossAndNetWeight={setCheckGrossAndNetWeight}
      />
      <NarrationTable
        narrationTableData={narrationTableData}
        setNarrationTableData={setNarrationTableData}
        productList={productList}
        setStateForDocStatus={setStateForDocStatus}
        setTotalHuidWeightOfHuidTable={setTotalHuidWeightOfHuidTable}
      />
    </>
  );
};

export default CreateChittiMaster;
