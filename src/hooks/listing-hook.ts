import { toast } from 'react-toastify';
import PrintChallanChittiApi from '../services/api/Chitti/print-challan-chitti-api';
import DeleteEmeraldChittiApi from '../services/api/Emerald/delete-emerald-chitti-api';
import PrintEmeraldChittiApi from '../services/api/Emerald/print-emerald-chitti-api';
import { UpdateDocStatusChallanApi } from '../services/api/general/update-doc-status-challan--api';
import { UpdateDocStatusEmeraldChittiApi } from '../services/api/general/update-doc-status-emrald-chitti-api';
import { getChittiChallan } from '../store/slices/Chitti/get-chitti-challan-list-slice';
import { getEmeraldChallan } from '../store/slices/Emerald/get-emerald-list-slice';
import DeleteChallanChittiApi from '../services/api/Chitti/delete-challan-chitti-api';
import {
  getSpecificEmeraldChitti,
  get_specific_emerald_chitti,
} from '../store/slices/Emerald/get-specific-emrald-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { get_access_token } from '../store/slices/auth/token-login-slice';
import { useEffect, useState } from 'react';
import { UpdatePurchaseReceiptDocStatusApi } from '../services/api/PurchaseReceipt/update-docStatus-api';
import DeletePurchaseReceiptApi from '../services/api/PurchaseReceipt/delete-purchase-receipt-api';
import { getPurchaseReceiptListing } from '../store/slices/PurchaseReceipt/get-purchase-receipt-listing-slice';
import DeleteSalesReturnApi from '../services/api/SalesReturn/delete-sales-return-api';
import { getSalesReturnListing } from '../store/slices/SalesReturn/get-sales-return-listing-slice';
import { UpdateSalesReturnDocStatusApi } from '../services/api/SalesReturn/update-docStatus-api';
import PrintPurchaseReceiptApi from '../services/api/PurchaseReceipt/print-purchase-receipt-api';
import PrintSalesReturnApi from '../services/api/SalesReturn/print-sales-return-api';

const useListingHook: any = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [receiptId, setReceiptId] = useState('');

  const emeraldChittiDataFromStore: any = useSelector(
    get_specific_emerald_chitti
  );

  const storedNumberOfRows = sessionStorage.getItem('numberOfRows');
  let pathName: any = window?.location?.pathname;

  const [headingData, setHeadingData] = useState<any>('');
  const [tableViewData, setTableViewData] = useState<number>(
    storedNumberOfRows ? parseInt(storedNumberOfRows) : 5
  );

  const HandleTableViewRows: any = (rows: any) => {
    sessionStorage.setItem('numberOfRows', rows);
    setTableViewData(rows);
  };

  useEffect(() => {
    sessionStorage.removeItem('numberOfRows');
  }, [pathName]);

  const handleSubmitChittiData: any = async (name: any) => {
    if (pathName === '/chitti') {
      let updateDocStatus: any = await UpdateDocStatusChallanApi(
        accessToken?.token,
        '1',
        name
      );

      if (
        updateDocStatus?.status === 200 &&
        Object.keys(updateDocStatus?.data)?.length > 0
      ) {
        dispatch(getChittiChallan(accessToken?.token));
      }
    } else if (pathName === '/emeraldchitti') {
      const params: any = {
        token: accessToken?.token,
        name: name,
      };
      dispatch(getSpecificEmeraldChitti(params));

      if (emeraldChittiDataFromStore?.data?.length > 0) {
        const hasEmptySubCategory =
          emeraldChittiDataFromStore?.data[0]?.challan_table?.some(
            (obj: any) => !obj.sub_category
          );

        if (hasEmptySubCategory) {
          toast.error('Please Select Sub Category');
        } else {
          let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
            accessToken?.token,
            '1',
            name
          );
          if (
            updateDocStatus?.status === 200 &&
            Object.keys(updateDocStatus?.data)?.length > 0
          ) {
            dispatch(getEmeraldChallan(accessToken?.token));
          }
        }
      }
    } else if (pathName === '/purchase-receipt') {
      let updateDocStatus: any = await UpdatePurchaseReceiptDocStatusApi(
        accessToken?.token,
        name,
        '1'
      );

      if (Object.keys(updateDocStatus?.data)?.length > 0) {
        dispatch(getPurchaseReceiptListing(accessToken?.token));
      }
    } else if (pathName === '/sales-return') {
      let updateDocStatus: any = await UpdateSalesReturnDocStatusApi(
        accessToken?.token,
        name,
        '1'
      );

      if (Object.keys(updateDocStatus?.data)?.length > 0) {
        dispatch(getSalesReturnListing(accessToken?.token));
      }
    }
  };

  const handleDeleteChitti: any = async (name: any) => {
    setIsModalOpen(true);
    setReceiptId(name);
  };

  const handleDeleteBtn = async () => {
    if (receiptId) {
      if (pathName === '/chitti') {
        let deleteChallanApiRes: any = await DeleteChallanChittiApi(
          accessToken?.token,
          receiptId
        );

        if (deleteChallanApiRes?.message?.status === 'success') {
          toast.success('Chitti Deleted');
          dispatch(getChittiChallan(accessToken?.token));
        } else {
          toast.error(deleteChallanApiRes?.message?.message);
        }
      } else if (pathName === '/emeraldchitti') {
        let deleteEmeraldApiRes: any = await DeleteEmeraldChittiApi(
          accessToken?.token,
          receiptId
        );

        if (deleteEmeraldApiRes?.message?.status === 'success') {
          toast.success('Chitti Deleted');
          dispatch(getEmeraldChallan(accessToken?.token));
        } else {
          toast.error(deleteEmeraldApiRes?.message?.message);
        }
      } else if (pathName === '/purchase-receipt') {
        let deleteApiRes: any = await DeletePurchaseReceiptApi(
          accessToken?.token,
          receiptId
        );

        if (deleteApiRes?.message?.status === 'success') {
          toast.success('Purchase Receipt Deleted');
          dispatch(getPurchaseReceiptListing(accessToken?.token));
        } else {
          toast.error(deleteApiRes?.message?.message);
        }
      } else if (pathName === '/sales-return') {
        let deleteApiRes: any = await DeleteSalesReturnApi(
          accessToken?.token,
          receiptId
        );

        if (deleteApiRes?.message?.status === 'success') {
          toast.success('Sales Return Deleted');
          dispatch(getSalesReturnListing(accessToken?.token));
        } else {
          toast.error(deleteApiRes?.message?.message);
        }
      }
      setIsModalOpen(false);
    }
  };

  const handleCancelChitti: any = async (name: any) => {
    if (pathName === '/chitti') {
      let updateDocStatus: any = await UpdateDocStatusChallanApi(
        accessToken?.token,
        '2',
        name
      );
      if (
        updateDocStatus?.status === 200 &&
        Object.keys(updateDocStatus?.data)?.length > 0
      ) {
        dispatch(getChittiChallan(accessToken?.token));
      }
    } else if (pathName === '/emeraldchitti') {
      let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
        accessToken?.token,
        '2',
        name
      );
      if (
        updateDocStatus?.status === 200 &&
        Object.keys(updateDocStatus?.data)?.length > 0
      ) {
        dispatch(getEmeraldChallan(accessToken?.token));
      }
    } else if (pathName === '/purchase-receipt') {
      let updateDocStatus: any = await UpdatePurchaseReceiptDocStatusApi(
        accessToken?.token,
        name,
        '2'
      );

      if (Object.keys(updateDocStatus?.data)?.length > 0) {
        dispatch(getPurchaseReceiptListing(accessToken?.token));
      }
    } else if (pathName === '/sales-return') {
      let updateDocStatus: any = await UpdateSalesReturnDocStatusApi(
        accessToken?.token,
        name,
        '2'
      );

      if (Object.keys(updateDocStatus?.data)?.length > 0) {
        dispatch(getSalesReturnListing(accessToken?.token));
      }
    }
  };

  const handlePrint = async (name: any) => {
    if (window?.location?.pathname === '/chitti') {
      let printApiRes: any = await PrintChallanChittiApi(
        accessToken?.token,
        name
      );
      if (printApiRes?.status === 'success') {
        if (printApiRes?.data?.data?.length > 0) {
          window.open(printApiRes?.data?.data[0]?.print_url);
        }
      }
    } else if (window?.location?.pathname === '/emeraldchitti') {
      let printApiRes: any = await PrintEmeraldChittiApi(
        accessToken?.token,
        name
      );
      if (printApiRes?.status === 'success') {
        if (printApiRes?.data?.data?.length > 0) {
          window.open(printApiRes?.data?.data[0]?.print_url);
        }
      }
    } else if (window?.location?.pathname === '/purchase-receipt') {
      let printApiRes: any = await PrintPurchaseReceiptApi(
        accessToken?.token,
        name
      );
      if (printApiRes?.status === 'success') {
        if (printApiRes?.data?.data?.length > 0) {
          window.open(printApiRes?.data?.data[0]?.print_url);
        }
      }
    } else if (window?.location?.pathname === '/sales-return') {
      let printApiRes: any = await PrintSalesReturnApi(
        accessToken?.token,
        name
      );
      if (printApiRes?.status === 'success') {
        if (printApiRes?.data?.data?.length > 0) {
          window.open(printApiRes?.data?.data[0]?.print_url);
        }
      }
    }
  };

  return {
    headingData,
    tableViewData,
    handleSubmitChittiData,
    handlePrint,
    handleCancelChitti,
    handleDeleteChitti,
    HandleTableViewRows,
    isModalOpen,
    setIsModalOpen,
    handleDeleteBtn,
    setHeadingData,
  };
};

export default useListingHook;
