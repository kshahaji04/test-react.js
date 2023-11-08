import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getChittiChallan,
  get_chitti_challan,
} from '../../store/slices/Chitti/get-chitti-challan-list-slice';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import CreateChittiApi from '../../services/api/Chitti/create-chitti-api';
import { toast } from 'react-toastify';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';
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
import AddClientNameApi from '../../services/api/Master/add-client-name-api';
import {
  UpdateDocStatusChallanApi,
  UpdateDocStatusWithSubmittedChallanApi,
} from '../../services/api/general/update-doc-status-challan--api';
import { getSpecificChittiChallan } from '../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteChallanChittiApi from '../../services/api/Chitti/delete-challan-chitti-api';
import UseCustomChittiHook from './custom-chitti-page-hook';
import { challanAmendApi } from '../../services/api/general/amend-api';

const UseChittiHook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const AccessToken: any = useSelector(get_access_token);
  const ChittiChallanData: any = useSelector(get_chitti_challan);
  const ClientNameDataFromStore: any = useSelector(get_client_name);
  const ClientGroupDataFromStore: any = useSelector(get_client_group);
  const SubCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const ProductListDataFromStore: any = useSelector(get_product_list);
  console.log('ChittiChallanData in hook', ChittiChallanData);
  const [chittiListingData, setChittiListingData] = useState<any>([]);
  const [subCategoryList, setSubCategoryList] = useState<any>([]);
  const [productList, setProductList] = useState<any>([]);
  const [clientNameList, setClientNameList] = useState<any>([]);

  const [clientGroupList, setClientGroupList] = useState<any>([]);
  const [tableData, setTableData] = useState<any>([{ id: 1 }]);
  const [narrationTableData, setNarrationTableData] = useState<any>([
    { id: 1 },
  ]);
  const [challanTableData, setChallanTableData] = useState<any>([]);
  const [narrationUpdatedTableData, setNarrationUpdatedTableData] =
    useState<any>([]);
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [goldRate, setGoldRate] = useState<any>('');
  const [remarks, setRemarks] = useState<any>('');
  const [clientGroupName, setClientGroupName] = useState<any>('');
  const [date, setDate] = useState<any>(
    new Date().toLocaleDateString('en-GB').split('/').join('-')
  );
  const [stateForDocStatus, setStateForDocStatus] = useState<boolean>(false);
  const [
    showSubmitButtonAfterCreateChitti,
    setShowSubmitButtonAfterCreateChitti,
  ] = useState<any>('');
  const [showSaveButtonForAmendFlow, setShowSaveButtonForAmendFlow] =
    useState<any>(false);

  const {
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    checkGrossAndNetWeight,
    setCheckGrossAndNetWeight,
  } = UseCustomChittiHook();

  useEffect(() => {
    dispatch(getChittiChallan(AccessToken?.token));
    dispatch(getClientName(AccessToken?.token));
    dispatch(getSubCategoryList(AccessToken?.token));
    dispatch(getProductList(AccessToken?.token));
    dispatch(getClientGroupList(AccessToken?.token));
    setCurrentDate(new Date());
  }, []);

  useEffect(() => {
    if (
      ChittiChallanData?.data?.length > 0 &&
      ChittiChallanData?.data !== null
    ) {
      setChittiListingData([...ChittiChallanData?.data]);
    } else {
      setChittiListingData([]);
    }
  }, [ChittiChallanData]);

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
      SubCategoryDataFromStore?.data?.length > 0 &&
      SubCategoryDataFromStore?.data !== null
    ) {
      setSubCategoryList([...SubCategoryDataFromStore?.data]);
    } else {
      setSubCategoryList([]);
    }
  }, [SubCategoryDataFromStore]);

  useEffect(() => {
    if (
      ProductListDataFromStore?.data?.length > 0 &&
      ProductListDataFromStore?.data !== null
    ) {
      setProductList([...ProductListDataFromStore?.data]);
    } else {
      setProductList([]);
    }
  }, [ProductListDataFromStore]);

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

  const HandleGoldRate: any = (e: any) => {
    setGoldRate(e.target.value);
    setStateForDocStatus(true);
  };

  const HandleRemarks: any = (e: any) => {
    setRemarks(e.target.value);
    setStateForDocStatus(true);
  };

  const HandleClientGroup: any = (e: any) => {
    setClientGroupName(e.target.value);
    setStateForDocStatus(true);
  };

  const HandleDateChange: any = (e: any) => {
    setDate(e.target.value);
    setStateForDocStatus(true);
  };

  const HandleEmptyChallanChittiTable: any = () => {
    setTableData([{ id: 1 }]);
    setNarrationTableData([{ id: 1 }]);
    setSelectedDropdownValue('');
    setGoldRate('');
    setRemarks('');
    setShowSubmitButtonAfterCreateChitti('');
    // Set the value of the select tag to an empty string
    const selectElements: any = document?.querySelectorAll(
      '.custom-input-field'
    );
    selectElements.forEach((selectElement: any) => {
      selectElement.value = '';
    });
  };

  const HandleSubmitChallanChitti: any = async () => {
    let updateDocStatus: any = await UpdateDocStatusWithSubmittedChallanApi(
      AccessToken?.token,
      '1',
      new Date()?.toISOString()?.split('T')[0],
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );
    console.log('update doc', updateDocStatus);
    if (Object?.keys(updateDocStatus?.data)?.length > 0) {
      const params: any = {
        token: AccessToken?.token,
        name:
          showSubmitButtonAfterCreateChitti?.length > 0
            ? showSubmitButtonAfterCreateChitti
            : id,
      };
      dispatch(getSpecificChittiChallan(params));
    }
  };

  const HandleCancelChallanChitti = async () => {
    let updateDocStatus: any = await UpdateDocStatusChallanApi(
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
      setStateForDocStatus(false);
      setShowSaveButtonForAmendFlow(false);
      dispatch(getSpecificChittiChallan(params));
    }
  };

  // for removing id key from list
  useEffect(() => {
    if (tableData?.length > 0 && tableData !== null) {
      let modifiedList: any = tableData.map((obj: any) => {
        const { id, ...rest } = obj;
        return rest;
      });
      setChallanTableData(modifiedList);
    }
    if (narrationTableData?.length > 0 && narrationTableData !== null) {
      let narrationmodifiedList: any = narrationTableData.map((obj: any) => {
        const { id, ...rest } = obj;
        return rest;
      });
      setNarrationUpdatedTableData(narrationmodifiedList);
    }
  }, [tableData, narrationTableData]);

  console.log('amend before', tableData, challanTableData, narrationTableData);

  const HandleAmendButtonForDuplicateChitti: any = async () => {
    console.log('amend ', tableData, challanTableData, narrationTableData);
    const reqParams: any = {
      token: AccessToken?.token,
      client_name: selectedDropdownValue,
      gold_rate: goldRate,
      remarks: remarks,
      name: id,
      challan_data: challanTableData,
      narration_data: narrationTableData,
    };
    let amendApi: any = await challanAmendApi(reqParams);
    console.log('challan amend api res', amendApi);
    if (
      amendApi?.data?.hasOwnProperty('data') &&
      Object?.keys(amendApi?.data?.data)?.length > 0
    ) {
      navigate(`/chitti/${amendApi?.data?.data?.name}`);
      // await UpdateDocStatusChallanApi(
      //   AccessToken?.token,
      //   '0',
      //   amendApi?.data?.data?.name
      // );
      const params: any = {
        token: AccessToken?.token,
        name: amendApi?.data?.data?.name,
      };
      dispatch(getSpecificChittiChallan(params));
      setTimeout(() => {
        setStateForDocStatus(false);
      }, 300);
      // dispatch(getChittiChallan(AccessToken?.token));
    }
  };

  const HandleDeleteChallanChitti = async () => {
    let deleteChallanApiRes: any = await DeleteChallanChittiApi(
      AccessToken?.token,
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );

    if (deleteChallanApiRes?.message?.status === 'success') {
      navigate('/chitti');
      // window?.location?.reload();
    } else {
      toast.error(deleteChallanApiRes?.message?.message);
    }
  };

  const HandleCreateChittiSubmit: any = async () => {
    console.log('submit values', challanTableData, narrationTableData);
    const NoDataChallanTableData = challanTableData?.some(
      (item: any) => Object?.keys(item)?.length === 0
    );

    const CheckObjectHasValues = () => {
      return challanTableData.filter((item: any) => {
        return (
          (item.hasOwnProperty('gross_weight') && item.gross_weight > 0) ||
          (item.hasOwnProperty('net_weight') && item.net_weight > 0) ||
          (item.hasOwnProperty('amount') && item.amount > 0)
        );
      });
    };
    const filteredChallanTable: any = CheckObjectHasValues();

    const CheckObjectHasValuesInHuid = () => {
      return narrationTableData.filter((item: any) => {
        return (
          (item.hasOwnProperty('huid_pieces') && item.huid_pieces > 0) ||
          (item.hasOwnProperty('huid_pieces') && item.huid_pieces > 0)
        );
      });
    };
    const filteredHuidTable: any = CheckObjectHasValuesInHuid();

    console.log('checkobject values', filteredChallanTable, filteredHuidTable);

    let errMsgList: any = [];
    if (Object?.keys(selectedDropdownValue)?.length === 0) {
      errMsgList.push('Client Name');
    }
    if (NoDataChallanTableData) {
      errMsgList.push('Challan Table');
    }
    const hasSubCategoryKey =
      challanTableData?.length > 0 &&
      challanTableData.every(
        (obj: any) => 'sub_category' in obj && obj.sub_category !== ''
      );

    if (!hasSubCategoryKey && errMsgList?.length === 0) {
      errMsgList.push('Sub Category in Challan table');
    }
    if (errMsgList?.length > 0 && errMsgList !== null) {
      toast.error(`Mandatory fields ${errMsgList.join(', ')}`);
    } else {
      if (totalGrossWeightOfChallanTable < totalHuidWeightOfHuidTable) {
        toast.error('Huid weight cannot be greater than Gross weight');
      } else if (
        checkGrossAndNetWeight.gross_weight < checkGrossAndNetWeight.net_weight
      ) {
        toast.error('Net weight cannot be greater than Gross weight');
      } else {
        const BodyData: any = {
          date: date,
          clientName: selectedDropdownValue,
          clientGroup: clientGroupName,
          goldRate: goldRate,
          remarks: remarks,
          challanTableData: filteredChallanTable,
          narrationTableData: filteredHuidTable,
          token: AccessToken?.token,
        };
        let CreateChittiApiRes: any = await CreateChittiApi(BodyData);
        console.log('Createchittiapires', CreateChittiApiRes);

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

        if (CreateChittiApiRes?.data?.message?.msg === 'success') {
          toast.success('Chitti Created');
          navigate(`${CreateChittiApiRes?.data?.message?.data}`);

          await UpdateDocStatusChallanApi(
            AccessToken?.token,
            '0',
            CreateChittiApiRes?.data?.message?.data
          );

          setShowSubmitButtonAfterCreateChitti(
            CreateChittiApiRes?.data?.message?.data
          );
          dispatch(getChittiChallan(AccessToken?.token));
        } else {
          toast.error('Failed to create chitti');
        }
      }
    }
  };
  console.log('chittiListingData in hook end', chittiListingData);
  return {
    chittiListingData,
    currentDate,
    selectedDropdownValue,
    setSelectedDropdownValue,
    HandleGoldRate,
    HandleRemarks,
    tableData,
    setTableData,
    narrationTableData,
    setNarrationTableData,
    HandleCreateChittiSubmit,
    clientNameList,
    subCategoryList,
    productList,
    clientGroupList,
    HandleClientGroup,
    HandleDateChange,
    date,
    goldRate,
    remarks,
    challanTableData,
    clientGroupName,
    stateForDocStatus,
    setStateForDocStatus,
    setRemarks,
    setGoldRate,
    HandleEmptyChallanChittiTable,
    showSubmitButtonAfterCreateChitti,
    HandleSubmitChallanChitti,
    HandleCancelChallanChitti,
    HandleDeleteChallanChitti,
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    HandleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    checkGrossAndNetWeight,
    setCheckGrossAndNetWeight,
  };
};

export default UseChittiHook;
