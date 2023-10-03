import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getChittiChallan, get_chitti_challan } from '../../store/slices/Chitti/get-chitti-challan-list-slice';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';


const UseChittiHook = () => {
    const dispatch = useDispatch();
    const AccessToken: any = useSelector(get_access_token);
    const ChittiChallanData: any = useSelector(get_chitti_challan);
    console.log("ChittiChallanData",ChittiChallanData)
    const [chittiListingData, setChittiListingData] = useState<any>([]);

    
    useEffect(()=>{
        dispatch(getChittiChallan(AccessToken?.token))
    },[])

    useEffect(()=>{
        if(ChittiChallanData?.data?.length > 0) {
            setChittiListingData([...ChittiChallanData?.data])
        }else{
            setChittiListingData([])
        }
        
    },[ChittiChallanData])
    
    console.log("chittiListingData in hook end",chittiListingData)
    return {chittiListingData}
};

export default UseChittiHook;