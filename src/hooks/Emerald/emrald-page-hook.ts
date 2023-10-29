import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { getSubCategoryList, get_subcategory_list } from '../../store/slices/Chitti/get-subcategory-slice';
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
import UpdateDocStatusEmeraldChittiApi from '../../services/api/general/update-doc-status-emrald-chitti-api';
import { getSpecificEmeraldChitti } from '../../store/slices/Emerald/get-specific-emrald-slice';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteEmeraldChittiApi from '../../services/api/Emerald/delete-emerald-chitti-api';
import AddClientNameApi from '../../services/api/Master/add-client-name-api';

const UseEmeraldHook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const AccessToken: any = useSelector(get_access_token);
  const EmeraldChittiDataFromStore: any = useSelector(get_Emerald_challan);
  const ClientNameDataFromStore: any = useSelector(get_client_name);
  const ClientGroupDataFromStore: any = useSelector(get_client_group);
  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const ProductItemDataFromStore: any = useSelector(get_product_item);
  const [clientNameList, setClientNameList] = useState<any>([]);
  const [emeraldChittiData, setEmeraldChittiData] = useState<any>([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [subCategoryList, setSubCategoryList] = useState<any>([]);
  const [clientGroupList, setClientGroupList] = useState<any>([]);
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [transactionDate, setTransactionDate] = useState<any>(
    new Date()?.toISOString()?.split('T')[0]
  );
  const [productItemList, setProductItemList] = useState<any>([]);
  const [clientGroupName, setClientGroupName] = useState<any>('');
  const [tableData, setTableData] = useState<any>([{ id: 1 }]);
  const [emeraldChittiTableData, setEmeraldChittiTableData] = useState<any>([]);
  const [stateForDocStatus, setStateForDocStatus] = useState<boolean>(false);
  const [
    showSubmitButtonAfterCreateChitti,
    setShowSubmitButtonAfterCreateChitti,
  ] = useState<any>('');
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

  useEffect(() => {
    if (
      subCategoryDataFromStore?.data?.length > 0 &&
      subCategoryDataFromStore?.data !== null
    ) {
      setSubCategoryList([...subCategoryDataFromStore?.data]);
    } else {
      setSubCategoryList([]);
    }
  }, [subCategoryDataFromStore]);

  const HandleClientGroup: any = (e: any) => {
    setClientGroupName(e?.target?.value);
    setStateForDocStatus(true);
  };

  const handleDateChange: any = (e: any) => {
    console.log('clientgro', e.target.value);
    setTransactionDate(e.target.value);
    setStateForDocStatus(true);
  };

  const HandleEmptyEmeraldChitti: any = () => {
    console.log('new emerald chitti');
    setTableData([{ id: 1 }]);
    setSelectedDropdownValue('');
    setShowSubmitButtonAfterCreateChitti('');
    // Set the value of the select tag to an empty string
    const selectElements: any = document?.querySelectorAll(
      '.custom-input-field'
    );
    selectElements.forEach((selectElement: any) => {
      selectElement.value = '';
    });
  };

  const HandleSubmitEmeraldChittiData: any = async () => {
    let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
      AccessToken?.token,
      '1',
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );
    console.log('update doc', updateDocStatus);
    if (Object.keys(updateDocStatus?.data)?.length > 0) {
      const params: any = {
        token: AccessToken?.token,
        name:
          showSubmitButtonAfterCreateChitti?.length > 0
            ? showSubmitButtonAfterCreateChitti
            : id,
      };
      dispatch(getSpecificEmeraldChitti(params));
    }
  };

  const HandleCancelEmeraldChitti = async () => {
    let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
      AccessToken?.token,
      '2',
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );
    console.log('update doc', updateDocStatus);
    if (Object.keys(updateDocStatus?.data)?.length > 0) {
      const params: any = {
        token: AccessToken?.token,
        name:
          showSubmitButtonAfterCreateChitti?.length > 0
            ? showSubmitButtonAfterCreateChitti
            : id,
      };
      dispatch(getSpecificEmeraldChitti(params));
    }
  };

  const HandleDeleteEmeraldChitti = async () => {
    let deleteChallanApiRes: any = await DeleteEmeraldChittiApi(
      AccessToken?.token,
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );
    console.log('deletec', deleteChallanApiRes);
    if (deleteChallanApiRes?.message?.status === 'success') {
      navigate(-1);
    }
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

    let errMsgList: any = [];
    if (Object?.keys(selectedDropdownValue)?.length === 0) {
      errMsgList.push('Client Name');
    }
    if (NoDataEmeraldTableData) {
      errMsgList.push('Emerald Chitti Table');
    }
    console.log('show err msg', errMsgList);

    if (errMsgList?.length > 0 && errMsgList !== null) {
      // const concatenatedErrMsg:any = errMsgList?.join(", ");
      toast.error(`Mandatory fields ${errMsgList.join(', ')}`);
    } else {
      const BodyData: any = {
        clientName: selectedDropdownValue,
        clientGroup: clientGroupName,
        date: transactionDate,
        emeraldChittiTableData: emeraldChittiTableData,
        token: AccessToken?.token,
      };
      let createEmeraldChittiApiRes: any =
        await CreateEmeraldChittiApi(BodyData);
      console.log('Createchittiapires', createEmeraldChittiApiRes);
      if (
        Object?.keys(clientGroupName)?.length > 0 &&
        Object?.keys(clientNameList)?.length > 0
      ) {
        await AddClientNameApi(
          AccessToken?.token,
          selectedDropdownValue,
          clientGroupName
        );
      }

      if (
        createEmeraldChittiApiRes?.status === 200 &&
        createEmeraldChittiApiRes?.hasOwnProperty('data')
      ) {
        toast.success('Emerald Chitti Created');
        navigate(`${createEmeraldChittiApiRes?.data?.data?.name}`);
        await UpdateDocStatusEmeraldChittiApi(
          AccessToken?.token,
          '0',
          createEmeraldChittiApiRes?.data?.data?.name
        );

        setShowSubmitButtonAfterCreateChitti(
          createEmeraldChittiApiRes?.data?.data?.name
        );
        dispatch(getEmeraldChallan(AccessToken?.token));
      } else {
        toast.error('Failed to Create Emerald Chitti');
      }
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
    tableData,
    setTableData,
    transactionDate,
    stateForDocStatus,
    setStateForDocStatus,
    HandleEmptyEmeraldChitti,
    HandleSubmitEmeraldChittiData,
    HandleCancelEmeraldChitti,
    HandleDeleteEmeraldChitti,
    showSubmitButtonAfterCreateChitti,
    subCategoryList
  };
};

export default UseEmeraldHook;
