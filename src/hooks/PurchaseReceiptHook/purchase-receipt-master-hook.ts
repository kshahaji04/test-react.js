import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CreatePurchaseReceiptApi from '../../services/api/PurchaseReceipt/create-purchase-receipt-api';
import { UpdatePurchaseReceiptDocStatusApi } from '../../services/api/PurchaseReceipt/update-docStatus-api';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import useCustomChittiHook from '../Chitti/custom-chitti-page-hook';
import useCustomPurchaseReceiptHook from './custom-purchase-receipt-hook';
import getUserRoleApi from '../../services/api/general/user-role-api';
import UpdatePurchaseReceiptApi from '../../services/api/PurchaseReceipt/update-purchase-receipt-api';
import { getDetailPurchaseReceipt } from '../../store/slices/PurchaseReceipt/get-detail-purchase-receipt-slice';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';
import {
  getSubCategoryList,
  get_subcategory_list,
} from '../../store/slices/Chitti/get-subcategory-slice';
import {
  getPurchaseReceiptListing,
  get_purchase_receipt_listing,
} from '../../store/slices/PurchaseReceipt/get-purchase-receipt-listing-slice';
import {
  btnLoadingStart,
  btnLoadingStop,
} from '../../store/slices/btn-loading-slice';

const usePurchaseReceiptMasterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const accessToken: any = useSelector(get_access_token);
  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const clientNameDataFromStore: any = useSelector(get_client_name);
  const purchaseReceiptData: any = useSelector(get_purchase_receipt_listing);

  const [subCategoryList, setSubCategoryList] = useState<any>(false);
  const [clientNameList, setClientNameList] = useState<any>([]);
  const [listingData, setListingData] = useState<any>([]);
  const [userRolesData, setUserRolesData] = useState<any>([]);

  const {
    purchaseReceiptTable,
    setPurchaseReceiptTable,
    handleAddRow,
    stateForDocStatus,
    handleKeyDown,
    amountValue,
    setStateForDocStatus,
    setamountValue,
    topSectionInputData,
    setTopSectionInputData,
    handlePRTopSectionData,
    handleDeleteRow,
  } = useCustomPurchaseReceiptHook();

  const {
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    checkGrossAndNetWeight,
    checkObjectHasValuesForPR,
  } = useCustomChittiHook();

  useEffect(() => {
    dispatch(getPurchaseReceiptListing(accessToken?.token));
    dispatch(getSubCategoryList(accessToken?.token));
    dispatch(getClientName(accessToken?.token));
    getUserRoles();
  }, []);

  const getUserRoles: any = async () => {
    let userRolesData: any = await getUserRoleApi(accessToken?.token);

    if (userRolesData?.data?.message?.status === 'success') {
      setUserRolesData(userRolesData?.data?.message?.data);
    }
  };

  const handlePurchaseTableFieldChange: any = (
    value: any,
    fieldName: any,
    id: any
  ) => {
    // Convert value to a number or default to 0 if it's invalid
    const updatedValue = fieldName !== "sub_category" ? Number(value) || 0 : value;

    const updatedTable = purchaseReceiptTable.map((item: any) => {
      if (item.idx === id) {
        let updatedItem = { ...item, [fieldName]: updatedValue };

        // Recalculate related fields based on updated field
        if (
          fieldName === 'gross_weight' ||
          fieldName === 'less_weight' ||
          fieldName === 'net_weight'
        ) {
          const grossWeight = Number(item.gross_weight) || 0;
          const lessWeight = Number(item.less_weight) || 0;
          let netWeight;

          // If gross_weight is updated, recalculate net_weight
          if (fieldName === 'gross_weight') {
            netWeight = updatedValue - lessWeight;
            updatedItem = {
              ...updatedItem,
              net_weight: Number(netWeight.toFixed(3)),
            };
          }
          // If less_weight is updated, recalculate net_weight
          else if (fieldName === 'less_weight') {
            netWeight = grossWeight - updatedValue;
            updatedItem = {
              ...updatedItem,
              net_weight: Number(netWeight.toFixed(3)),
            };
          }
          // If net_weight is updated, recalculate less_weight
          else if (fieldName === 'net_weight') {
            const newLessWeight = grossWeight - updatedValue;
            updatedItem = {
              ...updatedItem,
              less_weight: Number(newLessWeight.toFixed(3)),
            };
          }
        }

        return updatedItem;
      }
      return item;
    });

    setPurchaseReceiptTable(updatedTable);
    setStateForDocStatus(true);
  };

  useEffect(() => {
    const newColumnTotals = purchaseReceiptTable.reduce(
      (totals: any, row: any) => {
        // Ensure row values are numbers and handle negative values correctly
        const grossWeight = Number(row.gross_weight) || 0;
        const lessWeight = Number(row.less_weight) || 0;
        const netWeight = Number(row.net_weight) || 0;
        const amount = Number(row.amount) || 0;

        totals.gross_weight += grossWeight;
        totals.less_wt += lessWeight;
        totals.net_weight += netWeight;
        totals.amount += amount;

        return totals;
      },
      { gross_weight: 0, less_wt: 0, net_weight: 0, amount: 0 }
    );

    setamountValue(newColumnTotals);
  }, [purchaseReceiptTable]);

  useEffect(() => {
    if (
      purchaseReceiptData?.data?.length > 0 &&
      purchaseReceiptData?.data !== null
    ) {
      setListingData([...purchaseReceiptData?.data]);
    } else {
      setListingData([]);
    }
  }, [purchaseReceiptData]);

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
      clientNameDataFromStore?.data?.length > 0 &&
      clientNameDataFromStore?.data !== null
    ) {
      setClientNameList([...clientNameDataFromStore?.data]);
    } else {
      setClientNameList([]);
    }
  }, [clientNameDataFromStore]);

  const validateForm = (
    topSectionInputData: any,
    purchaseReceiptTable: any
  ) => {
    const NoDataChallanTableData = purchaseReceiptTable?.some(
      (item: any) => Object?.keys(item)?.length === 0
    );

    const filteredChallanTable =
      checkObjectHasValuesForPR(purchaseReceiptTable);

    let errMsgList = [];

    if (NoDataChallanTableData) {
      errMsgList.push('Challan Table');
    }

    const hasSubCategoryKey =
      filteredChallanTable?.length > 0 &&
      filteredChallanTable.every(
        (obj: any) => 'sub_category' in obj && obj.sub_category !== ''
      );

    if (!hasSubCategoryKey && errMsgList.length === 0) {
      errMsgList.push('Sub Category in Challan table');
    }

    if (!topSectionInputData?.check_75 || !topSectionInputData.check_916) {
      if (
        topSectionInputData.check_75 === 1 ||
        topSectionInputData.check_916 === 1
      ) {
        return;
      } else {
        errMsgList.push('Category');
      }
    }

    return errMsgList;
  };

  console.log('purchase table data', purchaseReceiptTable);
  const handleCreatePR: any = async () => {
    const filteredPRTable = checkObjectHasValuesForPR(purchaseReceiptTable);

    const errMsgList: any = validateForm(
      topSectionInputData,
      purchaseReceiptTable
    );

    if (errMsgList?.length > 0 && errMsgList !== null) {
      toast.error(`Mandatory fields ${errMsgList.join(', ')}`);
    } else {
      if (totalGrossWeightOfChallanTable < totalHuidWeightOfHuidTable) {
        toast.error('Huid weight cannot be greater than Gross weight');
      } else if (
        checkGrossAndNetWeight.gross_weight < checkGrossAndNetWeight.net_weight
      ) {
        toast.error('Net weight cannot be greater than Gross weight');
      } else if (filteredPRTable?.length === 0) {
        toast.error('No values inserted');
      } else {
        const addGrossWeightKey = (item: any) => {
          if (!item.hasOwnProperty('gross_weight')) {
            item.gross_weight = 0;
          }
          return item;
        };

        const challanTableWithGrossWeight =
          filteredPRTable.map(addGrossWeightKey);

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
            // date: date,
            clientName: topSectionInputData?.client_name,
            // clientGroup: clientGroupName,
            goldRate: topSectionInputData?.gold_rate,
            check_916: topSectionInputData?.check_916,
            check_75: topSectionInputData?.check_75,
            challanTableData: challanTableWithGrossWeight,
            token: accessToken?.token,
          };
          let purchaseReceiptApiRes: any =
            await CreatePurchaseReceiptApi(BodyData);

          if (purchaseReceiptApiRes?.data?.message?.status === 'success') {
            toast.success('Purchase Receipt Created', purchaseReceiptApiRes);
            navigate(`${purchaseReceiptApiRes?.data?.message?.data}`);

            await UpdatePurchaseReceiptDocStatusApi(
              accessToken?.token,
              purchaseReceiptApiRes?.data?.message?.data,
              '0'
            );

            dispatch(btnLoadingStop());
          } else {
            toast.error(`${purchaseReceiptApiRes?.data?.message?.error}`);
            dispatch(btnLoadingStop());
          }
        }
      }
    }
  };

  const handleUpdateRecord: any = async () => {
    const filterPRTable: any = checkObjectHasValuesForPR(purchaseReceiptTable);
    const hasSubCategoryKey =
      purchaseReceiptTable?.length > 0 &&
      purchaseReceiptTable.every(
        (obj: any) => 'sub_category' in obj && obj.sub_category !== ''
      );

    if (totalGrossWeightOfChallanTable < totalHuidWeightOfHuidTable) {
      toast.error('Huid weight cannot be greater than Gross weight');
    } else if (
      checkGrossAndNetWeight.gross_weight < checkGrossAndNetWeight.net_weight
    ) {
      toast.error('Net weight cannot be greater than Gross weight');
    } else if (!hasSubCategoryKey) {
      toast.error('Sub Category in Challan table');
    } else if (filterPRTable?.length === 0) {
      toast.error('No values inserted');
    } else {
      dispatch(btnLoadingStart());
      const BodyData: any = {
        name: id,
        clientName: topSectionInputData?.karigar_name,
        // clientGroup: clientGroupName,
        goldRate: topSectionInputData?.gold_rate,
        check_916: topSectionInputData?.check_916,
        check_75: topSectionInputData?.check_75,
        purchaseReceiptTableData: filterPRTable,
        token: accessToken?.token,
      };
      let updateChittiApi: any = await UpdatePurchaseReceiptApi(BodyData);

      if (
        updateChittiApi?.status === 200 &&
        updateChittiApi?.hasOwnProperty('data')
      ) {
        toast.success('Purchase Receipt Updated');
        dispatch(btnLoadingStop());
        await UpdatePurchaseReceiptDocStatusApi(accessToken?.token, id, '0');
        setTimeout(() => {
          const params: any = {
            token: accessToken?.token,
            name: id,
          };
          dispatch(getDetailPurchaseReceipt(params));
        }, 300);

        setTimeout(() => {
          setStateForDocStatus(false);
        }, 900);
      } else {
        toast.error('Failed to Update Purchase Receipt');
        dispatch(btnLoadingStop());
      }
    }
  };

  return {
    purchaseReceiptTable,
    setPurchaseReceiptTable,
    handlePurchaseTableFieldChange,
    handleDeleteRow,
    stateForDocStatus,
    setStateForDocStatus,
    subCategoryList,
    handleAddRow,
    amountValue,
    handleKeyDown,
    handlePRTopSectionData,
    clientNameList,
    topSectionInputData,
    setTopSectionInputData,
    handleCreatePR,
    listingData,
    handleUpdateRecord,
    userRolesData,
  };
};

export default usePurchaseReceiptMasterHook;
