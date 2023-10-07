import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getSpecificChittiChallan, get_specific_chitti_challan } from '../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import UseChittiHook from './chitti-page-hook';

const UseEditChallanChitti: any = () => {
    const dispatch = useDispatch();

    const AccessToken: any = useSelector(get_access_token);
    const ChallanDetailDataFromStore: any = useSelector(get_specific_chitti_challan);

    const [challanDetail, setChallanDetail] = useState<any>("");

    console.log(window.location.pathname)
    const { setNarrationTableData, subCategoryList, setTableData, productList, selectedDropdownValue, drowpdownlist }: any = UseChittiHook();

    useEffect(() => {
        const params: any = {
            token: AccessToken?.token,
            name: window.location.pathname
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

    return { challanDetail, setNarrationTableData, subCategoryList, setTableData, productList, selectedDropdownValue, drowpdownlist };
};

export default UseEditChallanChitti;