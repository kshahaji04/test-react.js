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
  getSalesReturnListing,
  get_sales_return_listing,
} from '../../store/slices/SalesReturn/get-sales-return-listing-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import useCustomChittiHook from '../Chitti/custom-chitti-page-hook';
import useCustomPurchaseReceiptHook from './custom-sales-return-hook';
import CreateSalesReturnApi from '../../services/api/SalesReturn/create-sales-return-api';
import { UpdateSalesReturnDocStatusApi } from '../../services/api/SalesReturn/update-docStatus-api';
import UpdateSalesReturnApi from '../../services/api/SalesReturn/update-sales-return-api';
import { getDetailSalesReturn } from '../../store/slices/SalesReturn/get-detail-sales-return-slice';

const useSalesReturnMasterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const accessToken: any = useSelector(get_access_token);
  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const clientNameDataFromStore: any = useSelector(get_client_name);
  const salesReturnData: any = useSelector(get_sales_return_listing);

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
    setTopSectionInputData,
    handlePRTopSectionData,
    handleDeleteRow,
  } = useCustomPurchaseReceiptHook();

  const {
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    checkGrossAndNetWeight,
    checkObjectHasValues,
  } = useCustomChittiHook();

  const handlePurchaseTableFieldChange: any = (
    value: any,
    fieldName: any,
    id: any
  ) => {
    // console.log('field values', value, fieldName, id);
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
    if (salesReturnData?.data?.length > 0 && salesReturnData?.data !== null) {
      setListingData([...salesReturnData?.data]);
    } else {
      setListingData([]);
    }
  }, [salesReturnData]);

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
    dispatch(getSalesReturnListing(accessToken?.token));
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
            token: accessToken?.token,
            // date: date,
            clientName: topSectionInputData?.client_name,
            // clientGroup: clientGroupName,
            goldRate: topSectionInputData?.gold_rate,
            remarks: topSectionInputData?.remarks,
            challanTableData: challanTableWithGrossWeight,
          };
          let purchaseReceiptApiRes: any = await CreateSalesReturnApi(BodyData);

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
            toast.success('Sales Return Created', purchaseReceiptApiRes);
            navigate(`${purchaseReceiptApiRes?.data?.message?.data}`);

            await UpdateSalesReturnDocStatusApi(
              accessToken?.token,
              purchaseReceiptApiRes?.data?.message?.data,
              '0'
            );
          } else {
            toast.error('Failed to create chitti');
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
      const BodyData: any = {
        token: accessToken?.token,
        name: id,
        // date: date,
        clientName: topSectionInputData?.client_name,
        // clientGroup: clientGroupName,
        goldRate: topSectionInputData?.gold_rate,
        remarks: topSectionInputData?.remarks,
        salesReturnTableData: filteredChallanTable,
      };
      let updateSalesReturn: any = await UpdateSalesReturnApi(BodyData);

      if (
        updateSalesReturn?.status === 200 &&
        updateSalesReturn?.hasOwnProperty('data')
      ) {
        toast.success('Sales Return Updated');
        // setStateForDocStatus(false);
        await UpdatePurchaseReceiptDocStatusApi(accessToken?.token, id, '0');
        setTimeout(() => {
          const params: any = {
            token: accessToken?.token,
            name: id,
          };
          dispatch(getDetailSalesReturn(params));
        }, 300);

        setTimeout(() => {
          setStateForDocStatus(false);
        }, 900);
      } else {
        toast.error('Failed to Update Sales Return');
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
  };
};

export default useSalesReturnMasterHook;
