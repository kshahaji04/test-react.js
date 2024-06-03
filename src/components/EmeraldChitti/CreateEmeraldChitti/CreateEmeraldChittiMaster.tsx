import { useState, useEffect } from 'react';
import EmeraldCreateChitti from './EmeraldCreateChitti';
import { useSelector } from 'react-redux';
import { get_specific_emerald_chitti } from '../../../store/slices/Emerald/get-specific-emrald-slice';
import HandleButtonsDisplayInChitti from '../../HandleButtonsDisplayInChitti';
import EmeraldChittiTableNew from './EmeraldChittiTableNew';

const CreateEmeraldChittiMaster = ({
  topSectionInputData,
  handleClientGroup,
  handleCreateEmeraldChittiSubmit,
  clientGroupList,
  clientNameList,
  clientGroupName,
  currentDate,
  handleTopSectionData,
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
  setStateForDocStatus,
  handleKeyDown,
}: any) => {
  const [showButton, setShowButton] = useState<any>();

  const docStatusFromStore: any = useSelector(get_specific_emerald_chitti);

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
        />
      </div>
      <EmeraldCreateChitti
        topSectionInputData={topSectionInputData}
        handleClientGroup={handleClientGroup}
        clientGroupList={clientGroupList}
        clientNameList={clientNameList}
        currentDate={currentDate}
        handleTopSectionData={handleTopSectionData}
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
