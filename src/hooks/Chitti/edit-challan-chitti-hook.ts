import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getSpecificChittiChallan, get_specific_chitti_challan } from '../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import UseChittiHook from './chitti-page-hook';
import { useParams } from 'react-router-dom';
import UpdateChittiApi from '../../services/api/Chitti/update-challan-chitti-api';
import { toast } from 'react-toastify';

const UseEditChallanChitti: any = () => {
    const dispatch = useDispatch();

    const AccessToken: any = useSelector(get_access_token);
    const ChallanDetailDataFromStore: any = useSelector(get_specific_chitti_challan);

    const [challanDetail, setChallanDetail] = useState<any>("");
    const [tableData, setTableData] = useState<any>([{ id: 1 }]);
    console.log("ChallanDetailDataFromStore", ChallanDetailDataFromStore)
    const { id } = useParams();
    console.log("params", id)

    const { setNarrationTableData, subCategoryList, productList, selectedDropdownValue, drowpdownlist, clientNameList, setSelectedDropdownValue, goldRate,
        remarks, date, challanTableData,
        narrationUpdatedTableData, HandleGoldRate, HandleDateChange,
        HandleRemarks, }: any = UseChittiHook();

    console.log("selectedDropdownValue", selectedDropdownValue)
    useEffect(() => {

        const params: any = {
            token: AccessToken?.token,
            name: id
        }
        dispatch(getSpecificChittiChallan(params))
    }, [])

    useEffect(() => {
        if (
            ChallanDetailDataFromStore?.data?.length > 0 &&
            ChallanDetailDataFromStore?.data !== null
        ) {
            setChallanDetail([...ChallanDetailDataFromStore?.data]);
        } else {
            setChallanDetail([]);
        }
    }, [ChallanDetailDataFromStore]);


    const HandleUpdateChallanSubmit = async () => {

        console.log("edited data", tableData, challanTableData)

        console.log(
            'submit create chitti',
            selectedDropdownValue,
            goldRate,
            remarks,
            challanTableData,
            narrationUpdatedTableData,
            date
        );

        const BodyData: any = {
            name: id,
            date: date,
            clientName: selectedDropdownValue,
            // clientGroup: clientGroupName,
            goldRate: goldRate,
            remarks: remarks,
            challanTableData: challanTableData,
            narrationTableData: challanTableData,
            token: AccessToken?.token,
        };
        let updateChittiApi: any = await UpdateChittiApi(BodyData);
        console.log('updateChittiApi', updateChittiApi);

        if (
            updateChittiApi?.status === 200 &&
            updateChittiApi?.hasOwnProperty('data')
        ) {
            toast.success('Chitti Updated');
        } else {
            toast.error('Failed to Update chitti');
        }
    }

    return {
        challanDetail, setNarrationTableData, subCategoryList, setTableData, productList, selectedDropdownValue, drowpdownlist, clientNameList, setSelectedDropdownValue, HandleUpdateChallanSubmit, HandleGoldRate,
        HandleRemarks, HandleDateChange
    };
};

export default UseEditChallanChitti;