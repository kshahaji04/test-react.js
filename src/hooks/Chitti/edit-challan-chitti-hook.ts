import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getSpecificChittiChallan,
  get_specific_chitti_challan,
} from '../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import UseChittiHook from './chitti-page-hook';
import { useParams } from 'react-router-dom';
import UpdateChittiApi from '../../services/api/Chitti/update-challan-chitti-api';
import { toast } from 'react-toastify';
import UpdateDocStatusChallanApi from '../../services/api/general/update-doc-status-challan--api';

const UseEditChallanChitti: any = () => {
  const dispatch = useDispatch();

  const AccessToken: any = useSelector(get_access_token);
  const emeraldDetailDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );

  const [challanDetail, setChallanDetail] = useState<any>('');
  const [tableData, setTableData] = useState<any>([{ id: 1 }]);

  console.log('emeraldDetailDataFromStore', emeraldDetailDataFromStore);
  const { id } = useParams();
  console.log('params', id);

  const {
    setNarrationTableData,
    subCategoryList,
    productList,
    selectedDropdownValue,
    drowpdownlist,
    clientNameList,
    setSelectedDropdownValue,
    goldRate,
    remarks,
    date,
    challanTableData,
    narrationTableData,
    narrationUpdatedTableData,
    HandleGoldRate,
    HandleDateChange,
    HandleRemarks,
    clientGroupList,
    clientGroupName,
    stateForDocStatus,
    setStateForDocStatus,
    setRemarks,
    setGoldRate,
  }: any = UseChittiHook();

  console.log('selectedDropdownValue', selectedDropdownValue);
  useEffect(() => {
    const params: any = {
      token: AccessToken?.token,
      name: id,
    };
    dispatch(getSpecificChittiChallan(params));
  }, []);

  useEffect(() => {
    if (
      emeraldDetailDataFromStore?.data?.length > 0 &&
      emeraldDetailDataFromStore?.data !== null
    ) {
      setChallanDetail([...emeraldDetailDataFromStore?.data]);
    } else {
      setChallanDetail([]);
    }
  }, [emeraldDetailDataFromStore]);

  const HandleUpdateChallanSubmit = async () => {
    console.log('edited data', challanTableData);
    console.log('edited narrationUpdatedTableData,', narrationUpdatedTableData);

    console.log(
      'submit create chitti',
      tableData,
      narrationTableData,
      selectedDropdownValue,
      goldRate,
      remarks,

      date
    );

    const BodyData: any = {
      name: id,
      // date: date,
      clientName: selectedDropdownValue,
      clientGroup: clientGroupName,
      goldRate: goldRate,
      remarks: remarks,
      challanTableData: tableData,
      narrationTableData: narrationTableData,
      token: AccessToken?.token,
    };
    let updateChittiApi: any = await UpdateChittiApi(BodyData);
    console.log('updateChittiApi', updateChittiApi);

    if (
      updateChittiApi?.status === 200 &&
      updateChittiApi?.hasOwnProperty('data')
    ) {
      toast.success('Chitti Updated');
      setStateForDocStatus(false);
      await UpdateDocStatusChallanApi(AccessToken?.token, '0', id);
    } else {
      toast.error('Failed to Update chitti');
    }
  };

  return {
    challanDetail,
    setNarrationTableData,
    subCategoryList,
    tableData,
    setTableData,
    productList,
    selectedDropdownValue,
    drowpdownlist,
    clientNameList,
    setSelectedDropdownValue,
    HandleUpdateChallanSubmit,
    HandleGoldRate,
    HandleRemarks,
    HandleDateChange,
    narrationTableData,
    clientGroupList,
    stateForDocStatus,
    setStateForDocStatus,
    setRemarks,
    setGoldRate,
  };
};

export default UseEditChallanChitti;
