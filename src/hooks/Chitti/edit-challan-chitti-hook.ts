import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getSpecificChittiChallan,
  get_specific_chitti_challan,
} from '../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import UseChittiHook from './chitti-page-hook';
import { useParams } from 'react-router-dom';
import UpdateChittiApi from '../../services/api/Chitti/update-challan-chitti-api';
import { toast } from 'react-toastify';
import { UpdateDocStatusChallanApi } from '../../services/api/general/update-doc-status-challan--api';

const UseEditChallanChitti: any = () => {
  const dispatch = useDispatch();

  const AccessToken: any = useSelector(get_access_token);
  const emeraldDetailDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );

  const [challanDetail, setChallanDetail] = useState<any>('');
  // const [tableData, setTableData] = useState<any>([{ id: 1 }]);

  console.log('emeraldDetailDataFromStore', emeraldDetailDataFromStore);
  const { id } = useParams();
  console.log('params', id);

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
    HandleGoldRate,
    HandleDateChange,
    HandleRemarks,
    clientGroupList,
    clientGroupName,
    stateForDocStatus,
    setStateForDocStatus,
    tableData,
    setTableData,
    setRemarks,
    setGoldRate,
    HandleSubmitChallanChitti,
    HandleCancelChallanChitti,
    HandleDeleteChallanChitti,
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    HandleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    checkGrossAndNetWeight,
    setCheckGrossAndNetWeight,
  }: any = UseChittiHook();

  console.log('selectedDropdownValue', selectedDropdownValue);
  useEffect(() => {
    const params: any = {
      token: AccessToken?.token,
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
    } else {
      setChallanDetail([]);
    }
  }, [emeraldDetailDataFromStore]);

  const HandleUpdateChallanSubmit = async () => {
    console.log('narration update', narrationTableData);
    const isHUIDHasData = narrationTableData.map((obj: any) => {
      if (Object.keys(obj).length === 1 && obj.hasOwnProperty('id')) {
        return { ...obj, huid_pieces: 0, huid_weight: 0 };
      } else {
        return obj;
      }
    });

    const CheckObjectHasValuesInHuid = () => {
      return isHUIDHasData.filter((item: any) => {
        return (
          item.hasOwnProperty('product') &&
          item.product !== null &&
          item.product !== undefined &&
          item.product !== ''
        );
      });
    };
    const filteredHuidTable: any = CheckObjectHasValuesInHuid();

    const CheckObjectHasValues = () => {
      return tableData.filter((item: any) => {
        const hasSubCategory = item.hasOwnProperty('sub_category');
        const hasGrossWeight =
          (item.hasOwnProperty('gross_weight') && item.gross_weight > 0) || 0;
        const hasNetWeight =
          item.hasOwnProperty('net_weight') && item.net_weight > 0;
        const hasAmount =
          (item.hasOwnProperty('amount') && item.amount > 0) || 0;

        // Include a check for sub_category and exclude rows where sub_category has data but others don't
        return (
          (hasSubCategory && (hasGrossWeight || hasNetWeight || hasAmount)) ||
          hasGrossWeight ||
          hasNetWeight ||
          hasAmount
        );
      });
    };
    const filteredChallanTable: any = CheckObjectHasValues();
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
        token: AccessToken?.token,
      };
      let updateChittiApi: any = await UpdateChittiApi(BodyData);
      console.log('updateChittiApi', updateChittiApi);

      if (
        updateChittiApi?.status === 200 &&
        updateChittiApi?.hasOwnProperty('data')
      ) {
        toast.success('Chitti Updated');
        // setStateForDocStatus(false);
        await UpdateDocStatusChallanApi(AccessToken?.token, '0', id);
        setTimeout(() => {
          const params: any = {
            token: AccessToken?.token,
            name: id,
          };
          dispatch(getSpecificChittiChallan(params));
        }, 300);
        setTimeout(() => {
          setStateForDocStatus(false);
        }, 400);
      } else {
        toast.error('Failed to Update chitti');
      }
    }
  };

  console.log('setStateForDocStatus in hook', stateForDocStatus);

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
    HandleUpdateChallanSubmit,
    HandleGoldRate,
    HandleRemarks,
    HandleDateChange,
    narrationTableData,
    clientGroupList,
    stateForDocStatus,
    setStateForDocStatus,
    setRemarks,
    setGoldRate,
    HandleSubmitChallanChitti,
    HandleCancelChallanChitti,
    HandleDeleteChallanChitti,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    HandleAmendButtonForDuplicateChitti,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    setCheckGrossAndNetWeight,
  };
};

export default UseEditChallanChitti;
