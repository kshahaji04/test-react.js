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
import {
  btnLoadingStart,
  btnLoadingStop,
} from '../../store/slices/btn-loading-slice';

const useEditChallanChitti: any = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const accessToken: any = useSelector(get_access_token);
  const challanChittiDetailDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );

  const [challanDetail, setChallanDetail] = useState<any>('');

  const {
    setNarrationTableData,
    subCategoryList,
    productList,
    drowpdownlist,
    clientNameList,
    setSelectedDropdownValue,
    narrationTableData,
    clientGroupList,
    clientGroupName,
    stateForDocStatus,
    setStateForDocStatus,
    tableData,
    setTableData,
    topSectionInputData,
    setTopSectionInputData,
    handleTopSectionData,
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
      challanChittiDetailDataFromStore?.data?.length > 0 &&
      challanChittiDetailDataFromStore?.data !== null
    ) {
      setChallanDetail([...challanChittiDetailDataFromStore?.data]);
      setTopSectionInputData({ ...challanChittiDetailDataFromStore?.data[0] });
      setTimeout(() => {
        setStateForDocStatus(false);
      }, 300);
    } else {
      setChallanDetail([]);
    }
  }, [challanChittiDetailDataFromStore]);

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
    const checkObjectHasValuesInHuid = () => {
      return narrationTableData.filter((item: any) => {
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
      dispatch(btnLoadingStart());
      const bodyData: any = {
        name: id,
        clientName: topSectionInputData.client_name,
        clientGroup: clientGroupName,
        goldRate: topSectionInputData.gold_rate,
        remarks: topSectionInputData.remarks,
        challanTableData: filteredChallanTable,
        narrationTableData: filteredHuidTable,
        token: accessToken?.token,
      };
      let updateChittiApi: any = await UpdateChittiApi(bodyData);

      if (
        updateChittiApi?.status === 200 &&
        updateChittiApi?.hasOwnProperty('data')
      ) {
        toast.success('Chitti Updated');
        dispatch(btnLoadingStop());
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
        dispatch(btnLoadingStop());
        toast.error('Failed to Update chitti');
      }
    }
  };

  const handlePrintButton: any = async () => {
    dispatch(btnLoadingStart());
    let printApiRes: any = await PrintChallanChittiApi(accessToken?.token, id);
    if (printApiRes?.status === 'success') {
      if (printApiRes?.data?.data?.length > 0) {
        window.open(printApiRes?.data?.data[0]?.print_url);
      }
      dispatch(btnLoadingStop());
    } else {
      dispatch(btnLoadingStop());
    }
  };

  return {
    challanDetail,
    setNarrationTableData,
    subCategoryList,
    tableData,
    setTableData,
    productList,
    drowpdownlist,
    clientNameList,
    setSelectedDropdownValue,
    handleUpdateChallanSubmit,
    narrationTableData,
    clientGroupList,
    stateForDocStatus,
    setStateForDocStatus,
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
    topSectionInputData,
    handleTopSectionData,
  };
};

export default useEditChallanChitti;
