import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CreatePurchaseReceiptApi from '../../services/api/PurchaseReceipt/create-purchase-receipt-api';
import { UpdatePurchaseReceiptDocStatusApi } from '../../services/api/PurchaseReceipt/update-docStatus-api';
import UpdatePurchaseReceiptApi from '../../services/api/PurchaseReceipt/update-purchase-receipt-api';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';
import {
  getSubCategoryList,
  get_subcategory_list,
} from '../../store/slices/Chitti/get-subcategory-slice';
import { getDetailPurchaseReceipt } from '../../store/slices/PurchaseReceipt/get-detail-purchase-receipt-slice';
import {
  getPurchaseReceiptListing,
  get_purchase_receipt_listing,
} from '../../store/slices/PurchaseReceipt/get-purchase-receipt-listing-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import useCustomChittiHook from '../Chitti/custom-chitti-page-hook';
import useCustomPurchaseReceiptHook from './custom-purchase-receipt-hook';
import getUserRoleApi from '../../services/api/general/user-role-api';
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
    checkObjectHasValues,
    // setTotalGrossWeightOfChallanTable,
    // setTotalHuidWeightOfHuidTable,
    // setCheckGrossAndNetWeight,
    // checkObjectHasValuesInHuid,
  } = useCustomChittiHook();

  useEffect(() => {
    dispatch(getPurchaseReceiptListing(accessToken?.token));
    dispatch(getSubCategoryList(accessToken?.token));
    dispatch(getClientName(accessToken?.token));
    getUserRoles();
  }, []);

  const getUserRoles: any = async () => {
    let userRolesData: any = await getUserRoleApi(accessToken?.token);
    console.log('userRoleData', userRolesData);
    if (userRolesData?.data?.message?.status === 'success') {
      setUserRolesData(userRolesData?.data?.message?.data);
    }
  };

  const handlePurchaseTableFieldChange: any = (
    value: any,
    fieldName: any,
    id: any
  ) => {
    const numericFields = [
      'gross_weight',
      'less_weight',
      'net_weight',
      'amount',
    ];

    const updatedTable = purchaseReceiptTable.map((item: any) => {
      if (item.idx === id) {
        const updatedValue = numericFields.includes(fieldName)
          ? parseFloat(value) || 0
          : value;

        let updatedItem = { ...item, [fieldName]: updatedValue };

        // If the field is 'gross_weight', recalculate 'net_weight'
        if (fieldName === 'gross_weight') {
          const lessWeight = item.less_weight || 0;
          const netWeight = updatedValue - lessWeight;
          updatedItem = { ...updatedItem, net_weight: netWeight };
        }

        // If the field is 'less_weight', recalculate 'net_weight'
        if (fieldName === 'less_weight') {
          const grossWeight = item.gross_weight || 0;
          const netWeight = grossWeight - updatedValue;
          updatedItem = { ...updatedItem, net_weight: netWeight };
        }

        // If the field is 'net_weight', recalculate 'less_weight'
        if (fieldName === 'net_weight') {
          const grossWeight = item.gross_weight || 0;
          const lessWeight = grossWeight - updatedValue;
          updatedItem = { ...updatedItem, less_weight: lessWeight };
        }

        return updatedItem;
      }
      return item;
    });

    setPurchaseReceiptTable(updatedTable);
    setStateForDocStatus(true);
  };

  useEffect(() => {
    // Calculate column totals whenever tableData changes
    const newColumnTotals = purchaseReceiptTable.reduce(
      (totals: any, row: any) => {
        totals.gross_weight += row.gross_weight || 0;
        totals.less_wt += row.less_weight || 0;
        totals.net_weight += row.net_weight || 0;
        totals.amount += row.amount || 0;
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

    const filteredChallanTable = checkObjectHasValues(purchaseReceiptTable);

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

  const handleCreatePR: any = async () => {
    const filteredChallanTable = checkObjectHasValues(purchaseReceiptTable);

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
      } else if (filteredChallanTable?.length === 0) {
        toast.error('No values inserted');
      } else {
        const addGrossWeightKey = (item: any) => {
          if (!item.hasOwnProperty('gross_weight')) {
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

          // if (
          //   Object?.keys(clientGroupName)?.length > 0 &&
          //   Object?.keys(clientNameList)?.length > 0
          // ) {
          //   await AddClientNameApi(
          //     accessToken?.token,
          //     selectedDropdownValue,
          //     clientGroupName
          //   );
          // }

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
            toast.error('Failed to create Purchase Receipt');
            dispatch(btnLoadingStop());
          }
        }
      }
    }
  };

  const handleUpdateRecord: any = async () => {
    const filteredChallanTable: any =
      checkObjectHasValues(purchaseReceiptTable);
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
    } else if (filteredChallanTable?.length === 0) {
      toast.error('No values inserted');
    } else {
      dispatch(btnLoadingStart());
      const BodyData: any = {
        name: id,
        // date: date,
        clientName: topSectionInputData?.karigar_name,
        // clientGroup: clientGroupName,
        goldRate: topSectionInputData?.gold_rate,
        check_916: topSectionInputData?.check_916,
        check_75: topSectionInputData?.check_75,
        purchaseReceiptTableData: filteredChallanTable,
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
