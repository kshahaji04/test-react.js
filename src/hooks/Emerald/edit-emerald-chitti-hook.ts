import { useEffect, useState } from 'react';
import UseEmeraldHook from './emrald-page-hook';
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

const UseEditEmeraldChittiHook: any = () => {
  const dispatch = useDispatch();

  const AccessToken: any = useSelector(get_access_token);
  const EmeraldChittiDataFromStore: any = useSelector(
    get_specific_emerald_chitti
  );

  const [challanDetail, setChallanDetail] = useState<any>('');

  console.log('EmeraldChittiDataFromStore', EmeraldChittiDataFromStore);
  const { id } = useParams();
  console.log('params', id);

  const {
    emeraldChittiData,
    selectedDropdownValue,
    setSelectedDropdownValue,
    productItemList,
    HandleClientGroup,
    HandleCreateEmeraldChittiSubmit,
    clientGroupList,
    clientNameList,
    currentDate,
    handleDateChange,
    transactionDate,
    tableData,
    setTableData,
    stateForDocStatus,
    setStateForDocStatus,
    HandleSubmitEmeraldChittiData,
    HandleCancelEmeraldChitti,
    HandleDeleteEmeraldChitti,
    subCategoryList,
    HandleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    HandleDeleteRow,
    HandleAddRow,
    handleKeyDown,
    handleOnFocus,
  }: any = UseEmeraldHook();

  useEffect(() => {
    const params: any = {
      token: AccessToken?.token,
      name: id,
    };
    dispatch(getSpecificEmeraldChitti(params));
  }, []);

  useEffect(() => {
    if (
      EmeraldChittiDataFromStore?.data?.length > 0 &&
      EmeraldChittiDataFromStore?.data !== null
    ) {
      setChallanDetail([...EmeraldChittiDataFromStore?.data]);
    } else {
      setChallanDetail([]);
    }
  }, [EmeraldChittiDataFromStore]);

  const HandleUpdateEmeraldChittiSubmit = async () => {
    console.log(
      'update emerald chitti',
      selectedDropdownValue,
      transactionDate,
      tableData
    );

    const reversedDate = new Date()
      ?.toISOString()
      ?.split('T')[0]
      .split('-')
      .reverse()
      .join('-');
    console.log(reversedDate);

    const BodyData: any = {
      name: id,
      clientName: selectedDropdownValue,
      date: reversedDate,
      transactionDate: transactionDate,
      // clientGroup: clientGroupName,
      challanTableData: tableData,
      token: AccessToken?.token,
    };
    let updateChittiApi: any = await UpdateEmeraldChittiApi(BodyData);
    console.log('UpdateEmeraldChittiApi', UpdateEmeraldChittiApi);

    if (
      updateChittiApi?.status === 200 &&
      updateChittiApi?.hasOwnProperty('data')
    ) {
      toast.success('Emerald Chitti Updated');
      setStateForDocStatus(false);
      await UpdateDocStatusEmeraldChittiApi(AccessToken?.token, '0', id);
    } else {
      toast.error('Failed to Update Emerald chitti');
    }
  };

  return {
    emeraldChittiData,
    selectedDropdownValue,
    setSelectedDropdownValue,
    productItemList,
    HandleClientGroup,
    HandleCreateEmeraldChittiSubmit,
    clientGroupList,
    clientNameList,
    currentDate,
    handleDateChange,
    transactionDate,
    tableData,
    setTableData,
    challanDetail,
    HandleUpdateEmeraldChittiSubmit,
    stateForDocStatus,
    setStateForDocStatus,
    HandleSubmitEmeraldChittiData,
    HandleCancelEmeraldChitti,
    HandleDeleteEmeraldChitti,
    subCategoryList,
    HandleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    HandleDeleteRow,
    HandleAddRow,
    handleKeyDown,
    handleOnFocus,
  };
};

export default UseEditEmeraldChittiHook;
