import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChallanItemsTable from './ChallanItemsTable';
import CreateChittiForm from './CreateChittiForm';
import NarrationTable from './NarrationTable';
import { get_specific_chitti_challan } from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import HandleButtonsDisplayInChitti from '../../HandleButtonsDisplayInChitti';

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
  remarks,
  showSubmitButtonAfterCreateChitti,
  HandleSubmitChallanChitti,
  HandleCancelChallanChitti,
  HandleDeleteChallanChitti,
  setTotalGrossWeightOfChallanTable,
  setTotalHuidWeightOfHuidTable,
}: any) => {
  const docStatusFromStore: any = useSelector(get_specific_chitti_challan);

  const [showButton, setShowButton] = useState<any>();

  useEffect(() => {
    setShowButton(docStatusFromStore?.docStatus);
  }, [docStatusFromStore]);

  return (
    <div>
      <div className="row">
        <div className="col-lg-10"></div>
        <div className="col-lg-2">
          <div className="d-flex justify-content-end">
            {/* {HandleButtonsDisplay()} */}
            <HandleButtonsDisplayInChitti
              HandleCreateChittiSubmit={HandleCreateChittiSubmit}
              showButton={showButton}
              showSubmitButtonAfterCreateChitti={
                showSubmitButtonAfterCreateChitti
              }
              HandleSubmitChittiData={HandleSubmitChallanChitti}
              HandleCancelChitti={HandleCancelChallanChitti}
              HandleDeleteChitti={HandleDeleteChallanChitti}
              HandleEmptyChitti={HandleEmptyChallanChittiTable}
            />
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
        setTotalGrossWeightOfChallanTable={setTotalGrossWeightOfChallanTable}
      />
      <NarrationTable
        narrationTableData={narrationTableData}
        setNarrationTableData={setNarrationTableData}
        productList={productList}
        setStateForDocStatus={setStateForDocStatus}
        setTotalHuidWeightOfHuidTable={setTotalHuidWeightOfHuidTable}
      />
    </div>
  );
};

export default CreateChittiMaster;
