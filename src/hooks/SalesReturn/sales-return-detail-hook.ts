import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AmendSalesReturnApi } from '../../services/api/SalesReturn/amend-sales-return-api';
import DeleteSalesReturnApi from '../../services/api/SalesReturn/delete-sales-return-api';
import { UpdateSalesReturnDocStatusApi } from '../../services/api/SalesReturn/update-docStatus-api';
import {
  getDetailSalesReturn,
  get_detail_sales_return,
} from '../../store/slices/SalesReturn/get-detail-sales-return-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import useSalesReturnMasterHook from './sales-return-master-hook';

const useSalesReturnDetailHook: any = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const accessToken: any = useSelector(get_access_token);
  const salesReturnDetailFromStore: any = useSelector(get_detail_sales_return);
  const [readOnlyFields, setReadOnlyFields] = useState<boolean>(false);

  const {
    salesReturnTable,
    setSalesReturnTable,
    handlePurchaseTableFieldChange,
    handleDeleteRow,
    stateForDocStatus,
    setStateForDocStatus,
    subCategoryList,
    handleAddRow,
    amountValue,
    handleKeyDown,
    handleSRTopSectionData,
    clientNameList,
    topSectionInputData,
    setTopSectionInputData,
    handleCreatePR,
    listingData,
    handleUpdateRecord,
    userRolesData
  } = useSalesReturnMasterHook();

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
        setSalesReturnTable([
          ...salesReturnDetailFromStore?.data[0]?.sales_return_table,
        ]);
      }
      setTopSectionInputData(salesReturnDetailFromStore?.data[0]);
    } else {
      setSalesReturnTable([]);
      setTopSectionInputData([]);
    }

    if (salesReturnDetailFromStore?.docStatus > 0) {
      setReadOnlyFields(true);
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
      sales_return_table: salesReturnTable,
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

  const handlePrintRecord: any = () => { };

  return {
    readOnlyFields,
    salesReturnTable,
    setSalesReturnTable,
    handlePurchaseTableFieldChange,
    handleDeleteRow,
    stateForDocStatus,
    setStateForDocStatus,
    subCategoryList,
    handleAddRow,
    amountValue,
    handleKeyDown,
    handleSRTopSectionData,
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
    userRolesData
  };
};

export default useSalesReturnDetailHook;
