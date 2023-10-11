import React, { useState, useEffect } from 'react';
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

const UseChittiHook = () => {
  const dispatch = useDispatch();
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
  const [challanTableData, setChallanTableData] = useState<any>([{ id: 1 }]);
  const [narrationUpdatedTableData, setNarrationUpdatedTableData] =
    useState<any>([]);
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [goldRate, setGoldRate] = useState<any>('');
  const [remarks, setRemarks] = useState<any>('');
  const [clientGroupName, setClientGroupName] = useState<any>('');
  const [date, setDate] = useState<any>(new Date());
  const [stateForDocStatus, setStateForDocStatus] = useState<boolean>(false);

  let modifiedList: any;

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const now = new Date();
  //     const day = String(now.getDate()).padStart(2, '0');
  //     const month = String(now.getMonth() + 1).padStart(2, '0');
  //     const year = now.getFullYear();
  //     const formattedDate: any = `${day}-${month}-${year}`;
  //     setCurrentDate(formattedDate);
  //   }, 1000); // Update the date every second
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  useEffect(() => {
    dispatch(getChittiChallan(AccessToken?.token));
    dispatch(getClientName(AccessToken?.token));
    dispatch(getSubCategoryList(AccessToken?.token));
    dispatch(getProductList(AccessToken?.token));
    dispatch(getClientGroupList(AccessToken?.token));
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
    console.log('clientgro', e.target.value);
    setClientGroupName(e.target.value);
    setStateForDocStatus(true);
  };

  const HandleDateChange: any = (e: any) => {
    console.log('HandleDateChange', e.target.value);
    setDate(e.target.value);
    setStateForDocStatus(true);
  };

  console.log('setTableData', tableData);

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

  const HandleCreateChittiSubmit: any = async () => {
    const NoDataChallanTableData = challanTableData.some(
      (item: any) => Object?.keys(item)?.length === 0
    );
    const NoDataNarrationTableData = narrationUpdatedTableData.some(
      (item: any) => Object?.keys(item)?.length === 0
    );

    console.log(
      'selectt',
      selectedDropdownValue,
      NoDataChallanTableData,
      NoDataNarrationTableData
    );

    if (
      Object?.keys(selectedDropdownValue)?.length > 0 &&
      NoDataChallanTableData === false &&
      NoDataNarrationTableData === false
    ) {
      const BodyData: any = {
        date: date,
        clientName: selectedDropdownValue,
        clientGroup: clientGroupName,
        goldRate: goldRate,
        remarks: remarks,
        challanTableData: challanTableData,
        narrationTableData: narrationUpdatedTableData,
        token: AccessToken?.token,
      };
      let CreateChittiApiRes: any = await CreateChittiApi(BodyData);
      console.log('Createchittiapires', CreateChittiApiRes);

      if (
        CreateChittiApiRes?.status === 200 &&
        CreateChittiApiRes?.hasOwnProperty('data')
      ) {
        toast.success('Chitti Created');
        dispatch(getChittiChallan(AccessToken?.token));
      } else {
        toast.error('Failed to created chitti');
      }
    } else {
      console.log('select elss');
      toast.error('Mandatory fields Client name, challan Table , HUID Table');

      // if (Object.keys(selectedDropdownValue)?.length === 0 && !NoDataChallanTableData ) {
      //   toast.error('Please add Client name');
      // }
      // if (
      //   NoDataChallanTableData &&
      //   Object.keys(selectedDropdownValue)?.length === 0
      // ) {
      //   toast.error('Please add Client Name and Challan Table');
      // }
      // if (
      //   NoDataNarrationTableData === true &&
      //   Object.keys(selectedDropdownValue)?.length === 0
      // ) {
      //   toast.error('Please add Client name and Narration Table');
      // }
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
  };
};

export default UseChittiHook;
