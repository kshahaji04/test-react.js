import { useEffect, useState } from 'react';
import useEmeraldChittiHook from './emrald-page-hook';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  getSpecificEmeraldChitti,
  get_specific_emerald_chitti,
} from '../../store/slices/Emerald/get-specific-emrald-slice';
import UpdateEmeraldChittiApi from '../../services/api/Emerald/update-emerald-chitti-api';
import { UpdateDocStatusEmeraldChittiApi } from '../../services/api/general/update-doc-status-emrald-chitti-api';
import PrintEmeraldChittiApi from '../../services/api/Emerald/print-emerald-chitti-api';
import useCustomEmeraldChittiHook from './custom-emerald-chitti-hook';

const useEditEmeraldChittiHook: any = () => {
  const dispatch = useDispatch();

  const accessToken: any = useSelector(get_access_token);
  const emeraldChittiDataFromStore: any = useSelector(
    get_specific_emerald_chitti
  );

  const [challanDetail, setChallanDetail] = useState<any>('');

  const { id } = useParams();

  const {
    emeraldChittiData,
    selectedDropdownValue,
    setSelectedDropdownValue,
    productItemList,
    handleClientGroup,
    handleCreateEmeraldChittiSubmit,
    clientGroupList,
    clientNameList,
    currentDate,
    handleDateChange,
    transactionDate,
    tableData,
    setTableData,
    stateForDocStatus,
    setStateForDocStatus,
    handleSubmitEmeraldChittiData,
    handleCancelEmeraldChitti,
    handleDeleteEmeraldChitti,
    subCategoryList,
    handleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    handleDeleteRow,
    handleAddRow,
    handleKeyDown,
    handleOnFocus,
    topSectionInputData,
  }: any = useEmeraldChittiHook();

  const {
    findDuplicateValuesInEmeraldChittiTable,
    findDuplicateIndicesInEmeraldChittiTable,
  } = useCustomEmeraldChittiHook();

  useEffect(() => {
    const params: any = {
      token: accessToken?.token,
      name: id,
    };
    dispatch(getSpecificEmeraldChitti(params));
  }, []);

  useEffect(() => {
    if (
      emeraldChittiDataFromStore?.data?.length > 0 &&
      emeraldChittiDataFromStore?.data !== null
    ) {
      setChallanDetail([...emeraldChittiDataFromStore?.data]);
      setTimeout(() => {
        setStateForDocStatus(false);
      }, 300);
    } else {
      setChallanDetail([]);
    }
  }, [emeraldChittiDataFromStore]);

  const handleUpdateEmeraldChittiSubmit = async () => {
    const reversedDate = new Date()
      ?.toISOString()
      ?.split('T')[0]
      .split('-')
      .reverse()
      .join('-');
    const duplicateAValues = findDuplicateValuesInEmeraldChittiTable(
      tableData.map((obj: any) => obj.a && obj.gross_weight)
    );

    if (duplicateAValues.length > 0) {
      // Show indices of the rows with duplicate values
      const duplicateIndices = findDuplicateIndicesInEmeraldChittiTable(
        tableData.map((obj: any, index: any) => ({
          a: obj.a,
          gross_weight: obj.gross_weight,
          index,
        }))
      );

      if (duplicateIndices.length > 0) {
        // Collect unique row numbers with duplicate values
        const uniqueRowsWithDuplicates: { [key: string]: boolean } = {};

        duplicateIndices.forEach((indices) => {
          indices.forEach((idx) => {
            const rowNumber = idx + 1;
            uniqueRowsWithDuplicates[rowNumber] = true;
          });
        });

        const rowIndicesMsg = Object.keys(uniqueRowsWithDuplicates)
          .map((row) => `row ${row}`)
          .join(', ');

        toast.error(`Duplicate values found in column "A" in ${rowIndicesMsg}`);
        return;
      }
    }

    const updatedFilterEmeraldChitti = tableData
      .filter((obj: any) =>
        Object.keys(obj).some((key) => key !== 'idx' && obj[key] !== '')
      )
      .map((obj: any, index: any) => ({ ...obj, idx: index + 1 }));

    const BodyData: any = {
      name: id,
      clientName: topSectionInputData?.client_name,
      date: reversedDate,
      transactionDate: transactionDate,
      remarks: topSectionInputData?.remarks,
      // clientGroup: clientGroupName,
      challanTableData: updatedFilterEmeraldChitti,
      token: accessToken?.token,
    };
    let updateChittiApi: any = await UpdateEmeraldChittiApi(BodyData);

    if (
      updateChittiApi?.status === 200 &&
      updateChittiApi?.hasOwnProperty('data')
    ) {
      toast.success('Emerald Chitti Updated');

      await UpdateDocStatusEmeraldChittiApi(accessToken?.token, '0', id);
      setTimeout(() => {
        const params: any = {
          token: accessToken?.token,
          name: id,
        };
        dispatch(getSpecificEmeraldChitti(params));
      }, 300);
      setTimeout(() => {
        setStateForDocStatus(false);
      }, 400);
    } else {
      toast.error('Failed to Update Emerald chitti');
    }
  };

  const handlePrintButton: any = async () => {
    let printApiRes: any = await PrintEmeraldChittiApi(accessToken?.token, id);
    if (printApiRes?.status === 'success') {
      if (printApiRes?.data?.data?.length > 0) {
        window.open(printApiRes?.data?.data[0]?.print_url);
      }
    }
  };

  return {
    emeraldChittiData,
    selectedDropdownValue,
    setSelectedDropdownValue,
    productItemList,
    handleClientGroup,
    handleCreateEmeraldChittiSubmit,
    clientGroupList,
    clientNameList,
    currentDate,
    handleDateChange,
    transactionDate,
    tableData,
    setTableData,
    challanDetail,
    handleUpdateEmeraldChittiSubmit,
    stateForDocStatus,
    setStateForDocStatus,
    handleSubmitEmeraldChittiData,
    handleCancelEmeraldChitti,
    handleDeleteEmeraldChitti,
    subCategoryList,
    handleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    handleDeleteRow,
    handleAddRow,
    handleKeyDown,
    handleOnFocus,
    handlePrintButton,
    topSectionInputData,
  };
};

export default useEditEmeraldChittiHook;
