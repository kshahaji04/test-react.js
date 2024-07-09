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
import useCustomChittiHook from './custom-chitti-page-hook';
import { challanAmendApi } from '../../services/api/general/amend-api';
import {
  btnLoadingStart,
  btnLoadingStop,
} from '../../store/slices/btn-loading-slice';

const useChittiHook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const accessToken: any = useSelector(get_access_token);
  const chittiChallanData: any = useSelector(get_chitti_challan);
  const clientNameDataFromStore: any = useSelector(get_client_name);
  const clientGroupDataFromStore: any = useSelector(get_client_group);
  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const productListDataFromStore: any = useSelector(get_product_list);
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
    checkObjectHasValuesInHuid,
    checkObjectHasValues,
  } = useCustomChittiHook();

  useEffect(() => {
    dispatch(getChittiChallan(accessToken?.token));
    dispatch(getClientName(accessToken?.token));
    dispatch(getSubCategoryList(accessToken?.token));
    dispatch(getProductList(accessToken?.token));
    dispatch(getClientGroupList(accessToken?.token));
    setCurrentDate(new Date());
  }, []);

  useEffect(() => {
    if (
      chittiChallanData?.data?.length > 0 &&
      chittiChallanData?.data !== null
    ) {
      setChittiListingData([...chittiChallanData?.data]);
    } else {
      setChittiListingData([]);
    }
  }, [chittiChallanData]);

  useEffect(() => {
    if (
      clientNameDataFromStore?.data?.length > 0 &&
      clientNameDataFromStore?.data !== null
    ) {
      setClientNameList([...clientNameDataFromStore?.data]);
    } else {
      setClientNameList([]);
    }
  }, [clientNameDataFromStore]);

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

  useEffect(() => {
    if (
      productListDataFromStore?.data?.length > 0 &&
      productListDataFromStore?.data !== null
    ) {
      setProductList([...productListDataFromStore?.data]);
    } else {
      setProductList([]);
    }
  }, [productListDataFromStore]);

  useEffect(() => {
    if (
      clientGroupDataFromStore?.data?.length > 0 &&
      clientGroupDataFromStore?.data !== null
    ) {
      setClientGroupList([...clientGroupDataFromStore?.data]);
    } else {
      setClientGroupList([]);
    }
  }, [clientGroupDataFromStore]);

  const handleGoldRate: any = (e: any) => {
    setGoldRate(e.target.value);
    setStateForDocStatus(true);
  };

  const handleRemarks: any = (e: any) => {
    setRemarks(e.target.value);
    setStateForDocStatus(true);
  };

  const handleClientGroup: any = (e: any) => {
    setClientGroupName(e.target.value);
    setStateForDocStatus(true);
  };

  const handleDateChange: any = (e: any) => {
    setDate(e.target.value);
    setStateForDocStatus(true);
  };

  const handleEmptyChallanChittiTable: any = () => {
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

  const handleSubmitChallanChitti: any = async () => {
    dispatch(btnLoadingStart());
    let updateDocStatus: any = await UpdateDocStatusWithSubmittedChallanApi(
      accessToken?.token,
      '1',
      new Date()?.toISOString()?.split('T')[0],
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );

    if (Object?.keys(updateDocStatus?.data)?.length > 0) {
      const params: any = {
        token: accessToken?.token,
        name:
          showSubmitButtonAfterCreateChitti?.length > 0
            ? showSubmitButtonAfterCreateChitti
            : id,
      };
      dispatch(getSpecificChittiChallan(params));
      dispatch(btnLoadingStop());
    } else {
      dispatch(btnLoadingStop());
    }
  };

  const handleCancelChallanChitti = async () => {
    dispatch(btnLoadingStart());
    let updateDocStatus: any = await UpdateDocStatusChallanApi(
      accessToken?.token,
      '2',
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );

    if (Object.keys(updateDocStatus?.data)?.length > 0) {
      const params: any = {
        token: accessToken?.token,
        name:
          showSubmitButtonAfterCreateChitti?.length > 0
            ? showSubmitButtonAfterCreateChitti
            : id,
      };
      dispatch(btnLoadingStop());
      setStateForDocStatus(false);
      setShowSaveButtonForAmendFlow(false);
      dispatch(getSpecificChittiChallan(params));
    } else {
      dispatch(btnLoadingStop());
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

  const handleAmendButtonForDuplicateChitti: any = async () => {
    dispatch(btnLoadingStart());
    const reqParams: any = {
      token: accessToken?.token,
      client_name: selectedDropdownValue,
      gold_rate: goldRate,
      remarks: remarks,
      name: id,
      challan_data: challanTableData,
      narration_data: narrationTableData,
    };
    let amendApi: any = await challanAmendApi(reqParams);

    if (
      amendApi?.data?.hasOwnProperty('data') &&
      Object?.keys(amendApi?.data?.data)?.length > 0
    ) {
      navigate(`/chitti/${amendApi?.data?.data?.name}`);

      const params: any = {
        token: accessToken?.token,
        name: amendApi?.data?.data?.name,
      };
      dispatch(getSpecificChittiChallan(params));
      setTimeout(() => {
        setStateForDocStatus(false);
      }, 300);
      dispatch(btnLoadingStop());
    }
    dispatch(btnLoadingStop());
  };

  const handleDeleteChallanChitti = async () => {
    let deleteChallanApiRes: any = await DeleteChallanChittiApi(
      accessToken?.token,
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );

    if (deleteChallanApiRes?.message?.status === 'success') {
      navigate('/chitti');
    } else {
      toast.error(deleteChallanApiRes?.message?.message);
    }
  };

  const handleCreateChittiSubmit: any = async () => {
    const NoDataChallanTableData = challanTableData?.some(
      (item: any) => Object?.keys(item)?.length === 0
    );

    const filteredChallanTable: any = checkObjectHasValues(challanTableData);

    const filteredHuidTable = checkObjectHasValuesInHuid(narrationTableData);

    let errMsgList: any = [];
    if (Object?.keys(selectedDropdownValue)?.length === 0) {
      errMsgList.push('Client Name');
    }
    if (NoDataChallanTableData) {
      errMsgList.push('Challan Table');
    }
    const hasSubCategoryKey =
      filteredChallanTable?.length > 0 &&
      filteredChallanTable.every(
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
      } else if (filteredChallanTable?.length === 0) {
        toast.error('No values inserted');
      } else {
        const addGrossWeightKey = (item: any) => {
          // Check if the item has the "gross_weight" key
          if (!item.hasOwnProperty('gross_weight')) {
            // If not, add "gross_weight" key with a value of 0
            item.gross_weight = 0;
          }
          return item;
        };

        const challanTableWithGrossWeight =
          filteredChallanTable.map(addGrossWeightKey);

        // Additional check for gross_weight less than net_weight
        const hasGrossWeightLessThanNetWeight =
          challanTableWithGrossWeight.some(
            (item: any) => item.gross_weight < item.net_weight
          );

        if (hasGrossWeightLessThanNetWeight) {
          toast.error('Gross weight cannot be less than Net weight');
        } else {
          dispatch(btnLoadingStart());
          const BodyData: any = {
            date: date,
            clientName: selectedDropdownValue,
            clientGroup: clientGroupName,
            goldRate: goldRate,
            remarks: remarks,
            challanTableData: challanTableWithGrossWeight,
            narrationTableData: filteredHuidTable,
            token: accessToken?.token,
          };
          let CreateChittiApiRes: any = await CreateChittiApi(BodyData);

          if (
            Object?.keys(clientGroupName)?.length > 0 &&
            Object?.keys(clientNameList)?.length > 0
          ) {
            await AddClientNameApi(
              accessToken?.token,
              selectedDropdownValue,
              clientGroupName
            );
          }

          if (CreateChittiApiRes?.data?.message?.msg === 'success') {
            toast.success('Chitti Created', CreateChittiApiRes);
            navigate(`${CreateChittiApiRes?.data?.message?.data}`);

            await UpdateDocStatusChallanApi(
              accessToken?.token,
              '0',
              CreateChittiApiRes?.data?.message?.data
            );

            dispatch(btnLoadingStop());
            setShowSubmitButtonAfterCreateChitti(
              CreateChittiApiRes?.data?.message?.data
            );
            dispatch(getChittiChallan(accessToken?.token));
          } else {
            dispatch(btnLoadingStop());
            toast.error('Failed to create chitti');
          }
        }
      }
    }
  };

  return {
    chittiListingData,
    currentDate,
    selectedDropdownValue,
    setSelectedDropdownValue,
    handleGoldRate,
    handleRemarks,
    tableData,
    setTableData,
    narrationTableData,
    setNarrationTableData,
    handleCreateChittiSubmit,
    clientNameList,
    subCategoryList,
    productList,
    clientGroupList,
    handleClientGroup,
    handleDateChange,
    date,
    goldRate,
    remarks,
    challanTableData,
    clientGroupName,
    stateForDocStatus,
    setStateForDocStatus,
    setRemarks,
    setGoldRate,
    handleEmptyChallanChittiTable,
    showSubmitButtonAfterCreateChitti,
    handleSubmitChallanChitti,
    handleCancelChallanChitti,
    handleDeleteChallanChitti,
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    handleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    checkGrossAndNetWeight,
    setCheckGrossAndNetWeight,
    narrationUpdatedTableData,
  };
};
export default useChittiHook;
