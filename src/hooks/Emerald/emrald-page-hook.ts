import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { getSubCategoryList } from '../../store/slices/Chitti/get-subcategory-slice';
import {
  getClientGroupList,
  get_client_group,
} from '../../store/slices/Chitti/get-client-group-list-slice';
import {
  getEmeraldChallan,
  get_Emerald_challan,
} from '../../store/slices/Emerald/get-emerald-list-slice';
import { toast } from 'react-toastify';
import {
  getProductItem,
  get_product_item,
} from '../../store/slices/Emerald/get-product-item-slice';
import CreateEmeraldChittiApi from '../../services/api/Emerald/create-emerald-chitti-api';

const UseEmeraldHook = () => {
  const dispatch = useDispatch();

  const AccessToken: any = useSelector(get_access_token);
  const EmeraldChittiDataFromStore: any = useSelector(get_Emerald_challan);
  const ClientNameDataFromStore: any = useSelector(get_client_name);
  const ClientGroupDataFromStore: any = useSelector(get_client_group);

  const ProductItemDataFromStore: any = useSelector(get_product_item);
  const [clientNameList, setClientNameList] = useState<any>([]);
  const [emeraldChittiData, setEmeraldChittiData] = useState<any>([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');

  const [clientGroupList, setClientGroupList] = useState<any>([]);
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [transactionDate, setTransactionDate] = useState<any>(
    new Date()?.toISOString()?.split('T')[0]
  );
  const [productItemList, setProductItemList] = useState<any>([]);

  const [tableData, setTableData] = useState<any>([{ id: 1 }]);
  const [emeraldChittiTableData, setEmeraldChittiTableData] = useState<any>([]);
  const [stateForDocStatus, setStateForDocStatus] = useState<boolean>(false);
  console.log('ProductItemDataFromStore', ProductItemDataFromStore);
  useEffect(() => {
    dispatch(getEmeraldChallan(AccessToken?.token));
    dispatch(getClientName(AccessToken?.token));
    dispatch(getSubCategoryList(AccessToken?.token));
    dispatch(getProductItem(AccessToken?.token));
    dispatch(getClientGroupList(AccessToken?.token));
    setCurrentDate(new Date());
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

  useEffect(() => {
    if (
      ProductItemDataFromStore?.data?.length > 0 &&
      ProductItemDataFromStore?.data !== null
    ) {
      setProductItemList([...ProductItemDataFromStore?.data]);
    } else {
      setProductItemList([]);
    }
  }, [ProductItemDataFromStore]);

  const HandleClientGroup: any = (e: any) => {
    console.log('clientgro', e.target.value);

    setStateForDocStatus(true);
  };

  const handleDateChange: any = (e: any) => {
    console.log('clientgro', e.target.value);
    setTransactionDate(e.target.value);
    setStateForDocStatus(true);
  };

  useEffect(() => {
    if (tableData?.length > 0 && tableData !== null) {
      let modifiedList: any = tableData.map((obj: any) => {
        const { id, ...rest } = obj;
        return rest;
      });
      setEmeraldChittiTableData(modifiedList);
    }
  }, [tableData]);

  const HandleCreateEmeraldChittiSubmit: any = async () => {
    console.log(
      'submit create emerald chitti',
      selectedDropdownValue,
      transactionDate,
      emeraldChittiTableData
    );
    const NoDataEmeraldTableData = emeraldChittiTableData.some(
      (item: any) => Object?.keys(item)?.length === 0
    );

    if (
      Object?.keys(selectedDropdownValue)?.length > 0 &&
      NoDataEmeraldTableData === false
    ) {
      const BodyData: any = {
        clientName: selectedDropdownValue,
        date: transactionDate,
        emeraldChittiTableData: emeraldChittiTableData,
        token: AccessToken?.token,
      };
      let createEmeraldChittiApiRes: any =
        await CreateEmeraldChittiApi(BodyData);
      console.log('Createchittiapires', createEmeraldChittiApiRes);

      if (
        createEmeraldChittiApiRes?.status === 200 &&
        createEmeraldChittiApiRes?.hasOwnProperty('data')
      ) {
        setTableData([{id:-1}])
        toast.success('Emerald Chitti Created');
        dispatch(getEmeraldChallan(AccessToken?.token));
      } else {
        toast.error('Failed to Create Emerald Chitti');
      }
    } else {
      console.log('select elss');
      toast.error('Mandatory fields Client name, Emerald Table ');
    }

    // const BodyData: any = {
    //   clientName: selectedDropdownValue,
    //   date: transactionDate,
    //   emeraldChittiTableData: emeraldChittiTableData,
    //   token: AccessToken?.token,
    // };
    // let createEmeraldChittiApiRes: any = await CreateEmeraldChittiApi(BodyData);
    // console.log('Createchittiapires', createEmeraldChittiApiRes);

    // if (
    //   createEmeraldChittiApiRes?.status === 200 &&
    //   createEmeraldChittiApiRes?.hasOwnProperty('data')
    // ) {
    //   toast.success('Emerald Chitti Created');
    //   dispatch(getEmeraldChallan(AccessToken?.token));
    // } else {
    //   toast.error('Failed to Create Emerald Chitti');
    // }
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
    tableData,
    setTableData,
    transactionDate,
    stateForDocStatus,
    setStateForDocStatus,
  };
};

export default UseEmeraldHook;
