import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getDetailPurchaseReceipt,
  get_detail_purchase_receipt,
} from '../../store/slices/PurchaseReceipt/get-detail-purchase-receipt-slice';
import usePurchaseReceiptMasterHook from './sales-return-master-hook';
import DeletePurchaseReceiptApi from '../../services/api/PurchaseReceipt/delete-purchase-receipt-api';
import { toast } from 'react-toastify';
import { UpdatePurchaseReceiptDocStatusApi } from '../../services/api/PurchaseReceipt/update-docStatus-api';
import { AmendPurchaseReceiptApi } from '../../services/api/PurchaseReceipt/amend-purchase-receipt-api';
import {
  getDetailSalesReturn,
  get_detail_sales_return,
} from '../../store/slices/SalesReturn/get-detail-sales-return-slice';
import { AmendSalesReturnApi } from '../../services/api/SalesReturn/amend-sales-return-api';
import { UpdateSalesReturnDocStatusApi } from '../../services/api/SalesReturn/update-docStatus-api';
import DeleteSalesReturnApi from '../../services/api/SalesReturn/delete-sales-return-api';

const useSalesReturnDetailHook: any = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const accessToken: any = useSelector(get_access_token);
  const salesReturnDetailFromStore: any = useSelector(get_detail_sales_return);

  const [readOnlyFields, setReadOnlyFields] = useState<boolean>(false);

  const {
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
  } = usePurchaseReceiptMasterHook();

  useEffect(() => {
    const params: any = {
      token: accessToken?.token,
      name: id,
    };
    dispatch(getDetailSalesReturn(params));
  }, []);

  useEffect(() => {
    if (
      salesReturnDetailFromStore?.data?.length > 0 &&
      salesReturnDetailFromStore?.data !== null
    ) {
      if (salesReturnDetailFromStore?.data?.length > 0) {
        setPurchaseReceiptTable([
          ...salesReturnDetailFromStore?.data[0]?.sales_return_table,
        ]);
      }
      setTopSectionInputData(salesReturnDetailFromStore?.data[0]);
      // setTimeout(() => {
      //   setStateForDocStatus(false);
      // }, 300);
    } else {
      setPurchaseReceiptTable([]);
      setTopSectionInputData([]);
    }
  }, [salesReturnDetailFromStore]);

  const handleAmendRecord: any = async () => {
    const reqParams: any = {
      amended_from: id,
      name: id,
      date: topSectionInputData?.date,
      client_name: topSectionInputData?.client_name,
      // client_group: topSectionInputData?.karigar_name,
      gold_rate: topSectionInputData?.karigar_name,
      remarks: topSectionInputData?.remarks,
      sales_return_table: purchaseReceiptTable,
    };
    let amendApi: any = await AmendSalesReturnApi(
      accessToken?.token,
      reqParams
    );

    if (
      amendApi?.data?.hasOwnProperty('data') &&
      Object?.keys(amendApi?.data?.data)?.length > 0
    ) {
      navigate(`/sales-return/${amendApi?.data?.data?.name}`);

      const params: any = {
        token: accessToken?.token,
        name: amendApi?.data?.data?.name,
      };
      dispatch(getDetailSalesReturn(params));
      setTimeout(() => {
        setStateForDocStatus(false);
      }, 300);
    }
  };

  const handleUpdateDocstatusBtn: any = async (value: any) => {
    let updateDocStatus: any = await UpdateSalesReturnDocStatusApi(
      accessToken?.token,
      id,
      value
    );

    if (Object.keys(updateDocStatus?.data)?.length > 0) {
      setStateForDocStatus(false);
      // setShowSaveButtonForAmendFlow(false);
      const params: any = {
        token: accessToken?.token,
        name: id,
      };
      dispatch(getDetailSalesReturn(params));
    }
  };
  const handleDeleteRecord: any = async () => {
    let deleteChallanApiRes: any = await DeleteSalesReturnApi(
      accessToken?.token,
      id
    );

    if (deleteChallanApiRes?.message?.status === 'success') {
      navigate('/sales-return');
    } else {
      toast.error(deleteChallanApiRes?.message?.message);
    }
  };

  const handlePrintRecord: any = () => {};

  return {
    // purchaseReceiptDetails,
    readOnlyFields,
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
    setReadOnlyFields,
    handleUpdateRecord,
    handleUpdateDocstatusBtn,
    handleDeleteRecord,
    handlePrintRecord,
    handleAmendRecord,
  };
};

export default useSalesReturnDetailHook;
