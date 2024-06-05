import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getSpecificChittiChallan,
  get_specific_chitti_challan,
} from '../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import useChittiHook from './chitti-page-hook';
import { useParams } from 'react-router-dom';
import UpdateChittiApi from '../../services/api/Chitti/update-challan-chitti-api';
import { toast } from 'react-toastify';
import { UpdateDocStatusChallanApi } from '../../services/api/general/update-doc-status-challan--api';
import PrintChallanChittiApi from '../../services/api/Chitti/print-challan-chitti-api';

const useEditChallanChitti: any = () => {
  const dispatch = useDispatch();

  const accessToken: any = useSelector(get_access_token);
  const emeraldDetailDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );

  const [challanDetail, setChallanDetail] = useState<any>('');
  const { id } = useParams();

  const {
    setNarrationTableData,
    subCategoryList,
    productList,
    selectedDropdownValue,
    drowpdownlist,
    clientNameList,
    setSelectedDropdownValue,
    goldRate,
    remarks,
    narrationTableData,
    handleGoldRate,
    handleDateChange,
    handleRemarks,
    clientGroupList,
    clientGroupName,
    stateForDocStatus,
    setStateForDocStatus,
    tableData,
    setTableData,
    setRemarks,
    setGoldRate,
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
  }: any = useChittiHook();

  useEffect(() => {
    const params: any = {
      token: accessToken?.token,
      name: id,
    };
    dispatch(getSpecificChittiChallan(params));
  }, []);

  useEffect(() => {
    if (
      emeraldDetailDataFromStore?.data?.length > 0 &&
      emeraldDetailDataFromStore?.data !== null
    ) {
      setChallanDetail([...emeraldDetailDataFromStore?.data]);

      setTimeout(() => {
        setStateForDocStatus(false);
      }, 300);
    } else {
      setChallanDetail([]);
    }
  }, [emeraldDetailDataFromStore]);

  const checkObjectHasValues = (challanTableData: any) => {
    return challanTableData
      .map((item: any) => {
        // Update missing or null values to 0
        const updatedItem = {
          ...item,
          gross_weight: item.gross_weight || 0,
          net_weight: item.net_weight || 0,
          amount: item.amount || 0,
        };

        const hasSubCategory = updatedItem.hasOwnProperty('sub_category');
        const hasGrossWeight = updatedItem.gross_weight > 0;
        const hasNetWeight = updatedItem.net_weight > 0;
        const hasAmount = updatedItem.amount > 0;

        // Return the updated item if it meets the conditions
        return hasSubCategory && (hasGrossWeight || hasNetWeight || hasAmount)
          ? updatedItem
          : null;
      })
      .filter((item: any) => item !== null);
  };

  const handleUpdateChallanSubmit = async () => {
    const isHUIDHasData = narrationTableData.map((obj: any) => {
      if (obj.hasOwnProperty('product')) {
        return { ...obj, huid_pieces: 0, huid_weight: 0 };
      } else {
        return obj;
      }
    });

    const checkObjectHasValuesInHuid = () => {
      return isHUIDHasData.filter((item: any) => {
        return (
          item.hasOwnProperty('product') &&
          item.product !== null &&
          item.product !== undefined &&
          item.product !== ''
        );
      });
    };

    const filteredHuidTable: any = checkObjectHasValuesInHuid();

    const filteredChallanTable: any = checkObjectHasValues(tableData);
    const hasSubCategoryKey =
      tableData?.length > 0 &&
      tableData.every(
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
        name: id,
        // date: date,
        clientName: selectedDropdownValue,
        clientGroup: clientGroupName,
        goldRate: goldRate,
        remarks: remarks,
        challanTableData: filteredChallanTable,
        narrationTableData: filteredHuidTable,
        token: accessToken?.token,
      };
      let updateChittiApi: any = await UpdateChittiApi(BodyData);

      if (
        updateChittiApi?.status === 200 &&
        updateChittiApi?.hasOwnProperty('data')
      ) {
        toast.success('Chitti Updated');
        // setStateForDocStatus(false);
        await UpdateDocStatusChallanApi(accessToken?.token, '0', id);
        setTimeout(() => {
          const params: any = {
            token: accessToken?.token,
            name: id,
          };
          dispatch(getSpecificChittiChallan(params));
        }, 300);

        setTimeout(() => {
          setStateForDocStatus(false);
        }, 900);
      } else {
        toast.error('Failed to Update chitti');
      }
    }
  };

  const handlePrintButton: any = async () => {
    let printApiRes: any = await PrintChallanChittiApi(accessToken?.token, id);
    if (printApiRes?.status === 'success') {
      if (printApiRes?.data?.data?.length > 0) {
        window.open(printApiRes?.data?.data[0]?.print_url);
      }
    }
  };

  return {
    challanDetail,
    setNarrationTableData,
    subCategoryList,
    tableData,
    setTableData,
    productList,
    selectedDropdownValue,
    drowpdownlist,
    clientNameList,
    setSelectedDropdownValue,
    handleUpdateChallanSubmit,
    handleGoldRate,
    handleRemarks,
    handleDateChange,
    narrationTableData,
    clientGroupList,
    stateForDocStatus,
    setStateForDocStatus,
    setRemarks,
    setGoldRate,
    handleSubmitChallanChitti,
    handleCancelChallanChitti,
    handleDeleteChallanChitti,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    handleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    setCheckGrossAndNetWeight,
    handlePrintButton,
  };
};

export default useEditChallanChitti;
