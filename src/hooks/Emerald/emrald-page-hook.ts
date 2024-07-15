import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CreateEmeraldChittiApi from '../../services/api/Emerald/create-emerald-chitti-api';
import DeleteEmeraldChittiApi from '../../services/api/Emerald/delete-emerald-chitti-api';
import { EmeraldChittiAmendApi } from '../../services/api/Emerald/emerald-chitti-amend-api';
import AddClientNameApi from '../../services/api/Master/add-client-name-api';
import {
  UpdateDocStatusEmeraldChittiApi,
  UpdateDocStatusWithSubmittedEmeraldChittiApi,
} from '../../services/api/general/update-doc-status-emrald-chitti-api';
import {
  getClientGroupList,
  get_client_group,
} from '../../store/slices/Chitti/get-client-group-list-slice';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';
import {
  getSubCategoryList,
  get_subcategory_list,
} from '../../store/slices/Chitti/get-subcategory-slice';
import {
  getEmeraldChallan,
  get_Emerald_challan,
} from '../../store/slices/Emerald/get-emerald-list-slice';
import {
  getProductItem,
  get_product_item,
} from '../../store/slices/Emerald/get-product-item-slice';
import { getSpecificEmeraldChitti } from '../../store/slices/Emerald/get-specific-emrald-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import UseCustomEmeraldChittiHook from './custom-emerald-chitti-hook';
import {
  btnLoadingStart,
  btnLoadingStop,
} from '../../store/slices/btn-loading-slice';

const useEmeraldHook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const accessToken: any = useSelector(get_access_token);
  const emeraldChittiDataFromStore: any = useSelector(get_Emerald_challan);
  const clientNameDataFromStore: any = useSelector(get_client_name);
  const clientGroupDataFromStore: any = useSelector(get_client_group);
  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const productItemDataFromStore: any = useSelector(get_product_item);
  const [clientNameList, setClientNameList] = useState<any>([]);
  const [emeraldChittiData, setEmeraldChittiData] = useState<any>([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [subCategoryList, setSubCategoryList] = useState<any>([]);
  const [clientGroupList, setClientGroupList] = useState<any>([]);
  const [topSectionInputData, setTopSectionInputData] = useState<any>({});
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [transactionDate, setTransactionDate] = useState<any>(
    new Date()?.toISOString()?.split('T')[0]
  );
  console.log(setTransactionDate);
  const [productItemList, setProductItemList] = useState<any>([]);
  const [clientGroupName, setClientGroupName] = useState<any>('');
  const initialTableData = [
    {
      idx: 1,
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      gross_weight: '',
      stn_wt: '',
      h: '',
      i: '',
      j: '',
      k: '',
      net_weight: '',
      project: '',
      product: '',
      o: '',
      p: '',
      q: '',
      r: '',
      sub_category: '',
      category: '',
      // cz_amt: '',
      // cs_amt: '',
      amount: '',
      custom_hm_pcs: '',
    },
  ];

  const [tableData, setTableData] = useState<any>(initialTableData);
  const [emeraldChittiTableData, setEmeraldChittiTableData] = useState<any>([]);
  const [stateForDocStatus, setStateForDocStatus] = useState<boolean>(false);
  const [
    showSubmitButtonAfterCreateChitti,
    setShowSubmitButtonAfterCreateChitti,
  ] = useState<any>('');
  const [showSaveButtonForAmendFlow, setShowSaveButtonForAmendFlow] =
    useState<any>(false);

  const {
    findDuplicateValuesInEmeraldChittiTable,
    findDuplicateIndicesInEmeraldChittiTable,
  } = UseCustomEmeraldChittiHook();

  useEffect(() => {
    dispatch(getEmeraldChallan(accessToken?.token));
    dispatch(getClientName(accessToken?.token));
    dispatch(getSubCategoryList(accessToken?.token));
    dispatch(getProductItem(accessToken?.token));
    dispatch(getClientGroupList(accessToken?.token));
    setCurrentDate(new Date());
  }, []);

  useEffect(() => {
    if (
      emeraldChittiDataFromStore?.data?.length > 0 &&
      emeraldChittiDataFromStore?.data !== null
    ) {
      setEmeraldChittiData([...emeraldChittiDataFromStore?.data]);
    } else {
      setEmeraldChittiData([]);
    }
  }, [emeraldChittiDataFromStore]);

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
      clientGroupDataFromStore?.data?.length > 0 &&
      clientGroupDataFromStore?.data !== null
    ) {
      setClientGroupList([...clientGroupDataFromStore?.data]);
    } else {
      setClientGroupList([]);
    }
  }, [clientGroupDataFromStore]);

  useEffect(() => {
    if (
      productItemDataFromStore?.data?.length > 0 &&
      productItemDataFromStore?.data !== null
    ) {
      setProductItemList([...productItemDataFromStore?.data]);
    } else {
      setProductItemList([]);
    }
  }, [productItemDataFromStore]);

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

  const handleClientGroup: any = (e: any) => {
    setClientGroupName(e?.target?.value);
    setStateForDocStatus(true);
  };

  const handleAddRow: any = () => {
    const newRow = {
      idx: tableData?.length + 1,
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      gross_weight: '',
      stn_wt: '',
      h: '',
      i: '',
      j: '',
      k: '',
      net_weight: '',
      project: '',
      product: '',
      o: '',
      p: '',
      q: '',
      r: '',
      sub_category: '',
      category: '',
      // cz_amt: '',
      // cs_amt: '',
      amount: '',
      custom_hm_pcs: '',
    };

    // Add the new row to the tableData
    setTableData([...tableData, newRow]);
  };

  const handleDeleteRow: any = (id: any) => {
    if (tableData?.length > 1) {
      const updatedData = tableData.filter((row: any) => row.idx !== id);
      // .map((row: any, index: number) => ({ ...row, id: index + 1 }));
      setTableData(updatedData);
      //   setStateForDocStatus(true);
    }
  };
  const handleTopSectionData: any = (value: any, fieldName: any) => {
    setTopSectionInputData((prevState: any) => ({
      ...prevState,
      [fieldName]: value,
    }));
    setStateForDocStatus(true);
  };

  const handleEmptyEmeraldChitti: any = () => {
    setTableData([{ idx: 1 }]);
    setSelectedDropdownValue('');
    setShowSubmitButtonAfterCreateChitti('');
    // Set the value of the select tag to an empty string
    const selectElements: any = document?.querySelectorAll(
      '.custom-input-field'
    );
    selectElements.forEach((selectElement: any) => {
      selectElement.value = '';
    });
  };

  const handleSubmitEmeraldChittiData: any = async () => {
    const updatedFilterEmeraldChitti = emeraldChittiTableData
      .filter((obj: any) =>
        Object.keys(obj).some((key) => key !== 'idx' && obj[key] !== '')
      )
      .map((obj: any, index: any) => ({ ...obj, idx: index + 1 }));

    const hasEmptySubCategory = updatedFilterEmeraldChitti.some(
      (obj: any) => !obj.sub_category
    );

    if (hasEmptySubCategory) {
      toast.error('Please Select Sub Category');
    } else {
      let updateDocStatus: any =
        await UpdateDocStatusWithSubmittedEmeraldChittiApi(
          accessToken?.token,
          '1',
          new Date()?.toISOString()?.split('T')[0],
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
        dispatch(getSpecificEmeraldChitti(params));
      }
    }
  };

  const handleCancelEmeraldChitti = async () => {
    let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
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
      setShowSaveButtonForAmendFlow(false);
      dispatch(getSpecificEmeraldChitti(params));
    }
  };

  const handleDeleteEmeraldChitti = async () => {
    let deleteChallanApiRes: any = await DeleteEmeraldChittiApi(
      accessToken?.token,
      showSubmitButtonAfterCreateChitti?.length > 0
        ? showSubmitButtonAfterCreateChitti
        : id
    );
    if (deleteChallanApiRes?.message?.status === 'success') {
      navigate('/emeraldchitti');
    } else {
      toast.error(deleteChallanApiRes?.message?.message);
    }
  };

  useEffect(() => {
    if (tableData?.length > 0 && tableData !== null) {
      let modifiedList: any = tableData.map((obj: any) => {
        const { id, ...rest } = obj;
        return rest;
      });
      setEmeraldChittiTableData(modifiedList);
    }
  }, [tableData]);

  // amend create duplicate chitti
  const handleAmendButtonForDuplicateChitti: any = async () => {
    const reqParams: any = {
      clientName: topSectionInputData?.client_name,
      remarks: topSectionInputData?.remarks,
      goldRate: topSectionInputData?.gold_rate,
      clientGroup: clientGroupName,
      date: transactionDate,
      name: id,
      emeraldChittiTableData: emeraldChittiTableData,
      token: accessToken?.token,
    };
    let amendApi: any = await EmeraldChittiAmendApi(reqParams);

    if (
      amendApi?.data?.hasOwnProperty('data') &&
      Object?.keys(amendApi?.data?.data)?.length > 0
    ) {
      navigate(`/emeraldchitti/${amendApi?.data?.data?.name}`);

      const params: any = {
        token: accessToken?.token,
        name: amendApi?.data?.data?.name,
      };
      dispatch(getSpecificEmeraldChitti(params));
      setTimeout(() => {
        setStateForDocStatus(false);
      }, 250);
    }
  };

  const handleCreateEmeraldChittiSubmit: any = async () => {
    const reversedDate = new Date()
      ?.toISOString()
      ?.split('T')[0]
      .split('-')
      .reverse()
      .join('-');
    const duplicateAValues = findDuplicateValuesInEmeraldChittiTable(
      emeraldChittiTableData.map((obj: any) => obj.a && obj.gross_weight)
    );

    if (duplicateAValues.length > 0) {
      // Show indices of the rows with duplicate values
      const duplicateIndices = findDuplicateIndicesInEmeraldChittiTable(
        emeraldChittiTableData.map((obj: any, index: any) => ({
          a: obj.a,
          gross_weight: obj.gross_weight,
          index,
        }))
      );

      if (duplicateIndices.length > 0) {
        // Collect unique row numbers with duplicate values
        const uniqueRowsWithDuplicates: { [key: string]: boolean } = {};

        duplicateIndices.forEach((indices) => {
          indices.forEach((idx) => {
            const rowNumber = idx + 1;
            uniqueRowsWithDuplicates[rowNumber] = true;
          });
        });

        const rowIndicesMsg = Object.keys(uniqueRowsWithDuplicates)
          .map((row) => `row ${row}`)
          .join(', ');
        toast.error(`Duplicate values found in column "A" in ${rowIndicesMsg}`);
        return;
      }
    }

    const updatedFilterEmeraldChitti = emeraldChittiTableData
      .filter((obj: any) =>
        Object.keys(obj).some((key) => key !== 'idx' && obj[key] !== '')
      )
      .map((obj: any, index: any) => ({ ...obj, idx: index + 1 }));
    let errMsgList: any = [];
    if (Object?.keys(topSectionInputData?.client_name)?.length === 0) {
      errMsgList.push('Client Name');
    }
    if (updatedFilterEmeraldChitti?.length === 0) {
      errMsgList.push('Emerald Chitti Table');
    }

    if (errMsgList?.length > 0 && errMsgList !== null) {
      toast.error(`Mandatory fields ${errMsgList.join(', ')}`);
    } else {
      dispatch(btnLoadingStart());

      const BodyData: any = {
        clientName: topSectionInputData?.client_name,
        date: reversedDate,
        transactionDate: transactionDate,
        remarks: topSectionInputData?.remarks,
        goldRate: topSectionInputData?.gold_rate,
        clientGroup: clientGroupName,
        emeraldChittiTableData: updatedFilterEmeraldChitti,
        token: accessToken?.token,
      };
      let createEmeraldChittiApiRes: any =
        await CreateEmeraldChittiApi(BodyData);

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

      if (createEmeraldChittiApiRes?.data?.message?.msg === 'success') {
        toast.success('Emerald Chitti Created');
        dispatch(btnLoadingStop());
        navigate(`${createEmeraldChittiApiRes?.data?.message?.data}`);
        await UpdateDocStatusEmeraldChittiApi(
          accessToken?.token,
          '0',
          createEmeraldChittiApiRes?.data?.message?.data
        );

        setShowSubmitButtonAfterCreateChitti(
          createEmeraldChittiApiRes?.data?.message?.data?.name
        );
        dispatch(getEmeraldChallan(accessToken?.token));
      } else {
        dispatch(btnLoadingStop());
        toast.error('Failed to Create Emerald Chitti');
      }
    }
  };

  return {
    emeraldChittiData,
    selectedDropdownValue,
    setSelectedDropdownValue,
    productItemList,
    handleClientGroup,
    handleCreateEmeraldChittiSubmit,
    clientGroupList,
    clientNameList,
    currentDate,
    handleTopSectionData,
    tableData,
    setTableData,
    transactionDate,
    stateForDocStatus,
    setStateForDocStatus,
    handleEmptyEmeraldChitti,
    handleSubmitEmeraldChittiData,
    handleCancelEmeraldChitti,
    handleDeleteEmeraldChitti,
    showSubmitButtonAfterCreateChitti,
    subCategoryList,
    handleAmendButtonForDuplicateChitti,
    showSaveButtonForAmendFlow,
    setShowSaveButtonForAmendFlow,
    handleDeleteRow,
    handleAddRow,
    topSectionInputData,
    setTopSectionInputData,
    findDuplicateValuesInEmeraldChittiTable,
    findDuplicateIndicesInEmeraldChittiTable,
  };
};

export default useEmeraldHook;
