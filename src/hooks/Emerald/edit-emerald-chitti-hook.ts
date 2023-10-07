import React, { useEffect, useState } from "react";
import { getSpecificChittiChallan, get_specific_chitti_challan } from "../../store/slices/Chitti/get-specific-chitti-listing-data-slice";
import UseEmeraldHook from "./emrald-page-hook";
import { get_access_token } from "../../store/slices/auth/token-login-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const UseEmeraldChittiHook: any = () => {
    const dispatch = useDispatch();

    const AccessToken: any = useSelector(get_access_token);
    const ChallanDetailDataFromStore: any = useSelector(get_specific_chitti_challan);

    const [challanDetail, setChallanDetail] = useState<any>("");

    console.log("ChallanDetailDataFromStore", ChallanDetailDataFromStore)
    const { id } = useParams();
    console.log("params", id)

    const { emeraldChittiData, selectedDropdownValue, setSelectedDropdownValue, productItemList, HandleClientGroup, HandleCreateEmeraldChittiSubmit, clientGroupList,
        clientNameList, currentDate, handleDateChange, transactionDate, tableData, setTableData }: any = UseEmeraldHook();

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


    return {
        emeraldChittiData, selectedDropdownValue, setSelectedDropdownValue, productItemList, HandleClientGroup, HandleCreateEmeraldChittiSubmit, clientGroupList,
        clientNameList, currentDate, handleDateChange, transactionDate, tableData, setTableData, challanDetail
    }
}

export default UseEmeraldChittiHook;