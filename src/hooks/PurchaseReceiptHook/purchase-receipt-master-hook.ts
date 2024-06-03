import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getSubCategoryList,
  get_subcategory_list,
} from '../../store/slices/Chitti/get-subcategory-slice';
import useCustomPurchaseReceiptHook from './custom-purchase-receipt-hook';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';
import { toast } from 'react-toastify';
import CreatePurchaseReceiptApi from '../../services/api/PurchaseReceipt/create-purchase-receipt-api';
import { UpdateDocStatusChallanApi } from '../../services/api/general/update-doc-status-challan--api';
import useCustomChittiHook from '../Chitti/custom-chitti-page-hook';
import {
  getChittiChallan,
  get_chitti_challan,
} from '../../store/slices/Chitti/get-chitti-challan-list-slice';

const usePurchaseReceiptMasterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken: any = useSelector(get_access_token);
  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const clientNameDataFromStore: any = useSelector(get_client_name);
  const purchaseReceiptData: any = useSelector(get_chitti_challan);

  const [subCategoryList, setSubCategoryList] = useState<any>(false);
  const [clientNameList, setClientNameList] = useState<any>([]);
  const [listingData, setListingData] = useState<any>([]);
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

  const handlePurchaseTableFieldChange: any = (
    value: any,
    fieldName: any,
    id: any
  ) => {
    console.log('field values', value, fieldName, id);
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
        return { ...item, [fieldName]: updatedValue };
      }
      return item;
    });
    setPurchaseReceiptTable(updatedTable);
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
    // console.log('clientNameDataFromStore', clientNameDataFromStore);
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
    dispatch(getChittiChallan(accessToken?.token));
    dispatch(getSubCategoryList(accessToken?.token));
    dispatch(getClientName(accessToken?.token));
  }, []);

  const handleCreatePR: any = async () => {
    const NoDataChallanTableData = purchaseReceiptTable?.some(
      (item: any) => Object?.keys(item)?.length === 0
    );

    const filteredChallanTable: any =
      checkObjectHasValues(purchaseReceiptTable);

    let errMsgList: any = [];
    // if (Object?.keys(selectedDropdownValue)?.length === 0) {
    //   errMsgList.push('Client Name');
    // }
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
          const BodyData: any = {
            // date: date,
            clientName: topSectionInputData?.client_name,
            // clientGroup: clientGroupName,
            goldRate: topSectionInputData?.gold_rate,
            remarks: topSectionInputData?.remarks,
            challanTableData: challanTableWithGrossWeight,
            token: accessToken?.token,
          };
          let CreateChittiApiRes: any =
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

          if (CreateChittiApiRes?.data?.message?.msg === 'success') {
            toast.success('Purchase Receipt Created', CreateChittiApiRes);
            navigate(`${CreateChittiApiRes?.data?.message?.data}`);

            await UpdateDocStatusChallanApi(
              accessToken?.token,
              '0',
              CreateChittiApiRes?.data?.message?.data
            );

            // dispatch(getChittiChallan(accessToken?.token));
          } else {
            toast.error('Failed to create chitti');
          }
        }
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
    handleCreatePR,
    listingData,
  };
};

export default usePurchaseReceiptMasterHook;
