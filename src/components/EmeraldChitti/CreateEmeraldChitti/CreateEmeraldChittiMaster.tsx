import { useState, useEffect } from 'react';
import EmeraldCreateChitti from './EmeraldCreateChitti';
import { useSelector } from 'react-redux';
import { get_specific_emerald_chitti } from '../../../store/slices/Emerald/get-specific-emrald-slice';

import HandleButtonsDisplayInChitti from '../../HandleButtonsDisplayInChitti';
import EmeraldChittiTableNew from './EmeraldChittiTableNew';

const CreateEmeraldChittiMaster = ({
  selectedDropdownValue,
  setSelectedDropdownValue,
  handleClientGroup,
  handleCreateEmeraldChittiSubmit,
  clientGroupList,
  clientNameList,
  clientGroupName,
  currentDate,
  handleDateChange,
  transactionDate,
  tableData,
  setTableData,
  handleAddRow,
  handleDeleteRow,
  subCategoryList,
  productItemList,
  showSubmitButtonAfterCreateChitti,
  handleSubmitEmeraldChittiData,
  handleCancelEmeraldChitti,
  handleDeleteEmeraldChitti,
  handleEmptyEmeraldChitti,
  setStateForDocStatus,
  handleKeyDown,
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
          handleCreateChittiSubmit={handleCreateEmeraldChittiSubmit}
          showButton={showButton}
          showSubmitButtonAfterCreateChitti={showSubmitButtonAfterCreateChitti}
          handleSubmitChittiData={handleSubmitEmeraldChittiData}
          handleCancelChitti={handleCancelEmeraldChitti}
          handleDeleteChitti={handleDeleteEmeraldChitti}
          handleEmptyChitti={handleEmptyEmeraldChitti}
        />
      </div>
      <EmeraldCreateChitti
        selectedDropdownValue={selectedDropdownValue}
        setSelectedDropdownValue={setSelectedDropdownValue}
        handleClientGroup={handleClientGroup}
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
        handleAddRow={handleAddRow}
        handleDeleteRow={handleDeleteRow}
        setStateForDocStatus={setStateForDocStatus}
        handleKeyDown={handleKeyDown}
      />
    </>
  );
};

export default CreateEmeraldChittiMaster;
