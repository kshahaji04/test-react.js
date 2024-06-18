import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getDetailPurchaseReceipt,
  get_detail_purchase_receipt,
} from '../../store/slices/PurchaseReceipt/get-detail-purchase-receipt-slice';
import usePurchaseReceiptMasterHook from './purchase-receipt-master-hook';
import DeletePurchaseReceiptApi from '../../services/api/PurchaseReceipt/delete-purchase-receipt-api';
import { toast } from 'react-toastify';
import { UpdatePurchaseReceiptDocStatusApi } from '../../services/api/PurchaseReceipt/update-docStatus-api';
import { AmendPurchaseReceiptApi } from '../../services/api/PurchaseReceipt/amend-purchase-receipt-api';
import PrintPurchaseReceiptApi from '../../services/api/PurchaseReceipt/print-purchase-receipt-api';

const usePurchaseReceiptDetailHook: any = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const accessToken: any = useSelector(get_access_token);
  const purchaseReceiptDetailFromStore: any = useSelector(
    get_detail_purchase_receipt
  );

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
    userRolesData,
  } = usePurchaseReceiptMasterHook();

  useEffect(() => {
    const params: any = {
      token: accessToken?.token,
      name: id,
    };
    dispatch(getDetailPurchaseReceipt(params));
  }, []);

  useEffect(() => {
    if (
      purchaseReceiptDetailFromStore?.data?.length > 0 &&
      purchaseReceiptDetailFromStore?.data !== null
    ) {
      if (purchaseReceiptDetailFromStore?.data?.length > 0) {
        setPurchaseReceiptTable([
          ...purchaseReceiptDetailFromStore?.data[0]?.purchase_receipt_table,
        ]);
      }
      setTopSectionInputData(purchaseReceiptDetailFromStore?.data[0]);
    } else {
      setPurchaseReceiptTable([]);
      setTopSectionInputData([]);
    }
  }, [purchaseReceiptDetailFromStore]);

  const reverseDate = (dateString: string) => {
    const [day, month, year] = dateString.split('-');
    return `${year}-${month}-${day}`;
  };
  const handleAmendRecord: any = async () => {
    let updatedDate: any = reverseDate(topSectionInputData?.date);
    const reqParams: any = {
      amended_from: id,
      name: id,
      date: updatedDate,
      karigar_name: topSectionInputData?.karigar_name,
      // client_group: topSectionInputData?.karigar_name,
      gold_rate: topSectionInputData?.karigar_name,
      check_916: topSectionInputData?.check_916,
      check_75: topSectionInputData?.check_75,
      purchase_receipt_table: purchaseReceiptTable,
    };
    let amendApi: any = await AmendPurchaseReceiptApi(
      accessToken?.token,
      reqParams
    );

    if (
      amendApi?.data?.hasOwnProperty('data') &&
      Object?.keys(amendApi?.data?.data)?.length > 0
    ) {
      navigate(`/purchase-receipt/${amendApi?.data?.data?.name}`);

      const params: any = {
        token: accessToken?.token,
        name: amendApi?.data?.data?.name,
      };
      dispatch(getDetailPurchaseReceipt(params));
      setTimeout(() => {
        setStateForDocStatus(false);
      }, 300);
    }
  };

  const handleUpdateDocstatusBtn: any = async (value: any) => {
    let updateDocStatus: any = await UpdatePurchaseReceiptDocStatusApi(
      accessToken?.token,
      id,
      value
    );

    if (Object.keys(updateDocStatus?.data)?.length > 0) {
      setStateForDocStatus(false);

      const params: any = {
        token: accessToken?.token,
        name: id,
      };
      dispatch(getDetailPurchaseReceipt(params));
    }
  };
  const handleDeleteRecord: any = async () => {
    let deleteChallanApiRes: any = await DeletePurchaseReceiptApi(
      accessToken?.token,
      id
    );

    if (deleteChallanApiRes?.message?.status === 'success') {
      navigate('/purchase-receipt');
    } else {
      toast.error(deleteChallanApiRes?.message?.message);
    }
  };

  const handlePrintRecord: any = async () => {
    let printApiRes: any = await PrintPurchaseReceiptApi(
      accessToken?.token,
      id
    );
    if (printApiRes?.status === 'success') {
      if (printApiRes?.data?.data?.length > 0) {
        window.open(printApiRes?.data?.data[0]?.print_url);
      }
    }
  };

  return {
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
    userRolesData,
  };
};

export default usePurchaseReceiptDetailHook;
