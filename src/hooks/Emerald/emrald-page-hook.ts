import react, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getSubCategoryList,
  get_subcategory_list,
} from '../../store/slices/Chitti/get-subcategory-slice';
import {
  getProductList,
  get_product_list,
} from '../../store/slices/Chitti/get-product-list-slice';
import {
  getClientGroupList,
  get_client_group,
} from '../../store/slices/Chitti/get-client-group-list-slice';
import { getEmeraldChallan, get_Emerald_challan } from '../../store/slices/Emerald/get-emerald-list-slice';
import { toast } from 'react-toastify';

const UseEmeraldHook = () => {
  const dispatch = useDispatch();

  const AccessToken: any = useSelector(get_access_token);
  const EmeraldChittiDataFromStore: any = useSelector(get_Emerald_challan);
  const ClientNameDataFromStore: any = useSelector(get_client_name);
  const ClientGroupDataFromStore: any = useSelector(get_client_group);
  const SubCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const ProductListDataFromStore: any = useSelector(get_product_list);
  const [clientNameList, setClientNameList] = useState<any>([]);
  const [emeraldChittiData, setEmeraldChittiData] = useState<any>([])
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [clientGroupName, setClientGroupName] = useState<any>('');
  const [clientGroupList, setClientGroupList] = useState<any>([]);
  useEffect(() => {
    dispatch(getEmeraldChallan(AccessToken?.token));
    dispatch(getClientName(AccessToken?.token));
    dispatch(getSubCategoryList(AccessToken?.token));
    dispatch(getProductList(AccessToken?.token));
    dispatch(getClientGroupList(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      EmeraldChittiDataFromStore?.data?.length > 0 &&
      EmeraldChittiDataFromStore?.data !== null
    ) {
      setEmeraldChittiData([...EmeraldChittiDataFromStore?.data]);
    } else {
      setEmeraldChittiData([]);
    }
  }, [EmeraldChittiDataFromStore]);

  useEffect(() => {
    if (
      ClientNameDataFromStore?.data?.length > 0 &&
      ClientNameDataFromStore?.data !== null
    ) {
      setClientNameList([...ClientNameDataFromStore?.data]);
    } else {
      setClientNameList([]);
    }
  }, [ClientNameDataFromStore]);

  useEffect(() => {
    if (
      ClientGroupDataFromStore?.data?.length > 0 &&
      ClientGroupDataFromStore?.data !== null
    ) {
      setClientGroupList([...ClientGroupDataFromStore?.data]);
    } else {
      setClientGroupList([]);
    }
  }, [ClientGroupDataFromStore]);


  const HandleClientGroup: any = (e: any) => {
    console.log('clientgro', e.target.value);
    setClientGroupName(e.target.value);
  };

  const HandleCreateChittiSubmit: any = async () => {
    console.log(
      'submit create chitti',
      selectedDropdownValue,

      clientGroupName
    );
    console.log(
      'submit create chitti challan table',
      // challanTableData,
      // narrationUpdatedTableData
    );
    const BodyData: any = {
      clientName: selectedDropdownValue,
      clientGroup: clientGroupName,

      // challanTableData: challanTableData,
      // narrationTableData: narrationUpdatedTableData,
      token: AccessToken?.token,
    };
    let CreateChittiApiRes: any = await (BodyData);
    console.log('Createchittiapires', CreateChittiApiRes);

    if (
      CreateChittiApiRes?.status === 200 &&
      CreateChittiApiRes?.hasOwnProperty('data')
    ) {
      toast.success('Chitti Created');
    } else {
      toast.error('Failed to created chitti');
    }
  };
  return { emeraldChittiData, selectedDropdownValue, setSelectedDropdownValue, HandleClientGroup, HandleCreateChittiSubmit, clientGroupList, clientNameList };
};

export default UseEmeraldHook;
