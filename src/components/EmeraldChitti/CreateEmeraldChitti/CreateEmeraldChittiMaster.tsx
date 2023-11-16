import { useState, useEffect } from 'react';
import EmeraldCreateChitti from './EmeraldCreateChitti';
import { useSelector } from 'react-redux';
import { get_specific_emerald_chitti } from '../../../store/slices/Emerald/get-specific-emrald-slice';

import HandleButtonsDisplayInChitti from '../../HandleButtonsDisplayInChitti';
import EmeraldChittiTableNew from './EmeraldChittiTableNew';

const CreateEmeraldChittiMaster = ({
  selectedDropdownValue,
  setSelectedDropdownValue,
  HandleClientGroup,
  HandleCreateEmeraldChittiSubmit,
  clientGroupList,
  clientNameList,
  clientGroupName,
  currentDate,
  handleDateChange,
  transactionDate,
  tableData,
  setTableData,
  HandleAddRow,
  HandleDeleteRow,
  subCategoryList,
  productItemList,
  showSubmitButtonAfterCreateChitti,
  HandleSubmitEmeraldChittiData,
  HandleCancelEmeraldChitti,
  HandleDeleteEmeraldChitti,
  HandleEmptyEmeraldChitti,
  setStateForDocStatus,
  handleKeyDown,
  handleOnFocus
}: any) => {
  const [showButton, setShowButton] = useState<any>();

  const docStatusFromStore: any = useSelector(get_specific_emerald_chitti);
  console.log('docStatus', docStatusFromStore?.docStatus);

  useEffect(() => {
    setShowButton(docStatusFromStore?.docStatus);
  }, [docStatusFromStore]);

  return (
    <>
      <div className="d-flex justify-content-end ">
        <HandleButtonsDisplayInChitti
          HandleCreateChittiSubmit={HandleCreateEmeraldChittiSubmit}
          showButton={showButton}
          showSubmitButtonAfterCreateChitti={showSubmitButtonAfterCreateChitti}
          HandleSubmitChittiData={HandleSubmitEmeraldChittiData}
          HandleCancelChitti={HandleCancelEmeraldChitti}
          HandleDeleteChitti={HandleDeleteEmeraldChitti}
          HandleEmptyChitti={HandleEmptyEmeraldChitti}
        />
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
        clientGroupName={clientGroupName}
      />

      <EmeraldChittiTableNew
        tableData={tableData}
        setTableData={setTableData}
        subCategoryList={subCategoryList}
        productItemList={productItemList}
        HandleAddRow={HandleAddRow}
        HandleDeleteRow={HandleDeleteRow}
        setStateForDocStatus={setStateForDocStatus}
        handleKeyDown={handleKeyDown}
        handleOnFocus={handleOnFocus}
      />
      {/* <EmeraldChittiTable
        tableData={tableData}
        setTableData={setTableData}
        subCategoryList={subCategoryList}
        productItemList={productItemList}
      /> */}
    </>
  );
};

export default CreateEmeraldChittiMaster;
