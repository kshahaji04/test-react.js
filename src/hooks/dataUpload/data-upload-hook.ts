
import react, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getSupplierList, get_supplier_list } from '../../store/slices/dataUpload/get-supplier-slice';
import { getEmeraldTableData, get_Emerald_table_data } from '../../store/slices/dataUpload/get-emerald-table-data-slice';


const UseDataUploadHook = () => {
    const dispatch = useDispatch();

    const AccessToken: any = useSelector(get_access_token);
    const SupplierDataFromStore: any = useSelector(get_supplier_list);
    const EmeraldTableDataFromStore: any = useSelector(get_Emerald_table_data);

    const [supplierList, setSupplierList] = useState<any>([]);
    const [supplier, setSupplier] = useState<any>("");
    const [emeraldTableData, setEmeraldTableData] = useState<any>([]);

    console.log("SupplierDataFromStore", SupplierDataFromStore)
    useEffect(() => {
        dispatch(getSupplierList(AccessToken?.token))
        dispatch(getEmeraldTableData(AccessToken?.token))
    }, [])

    useEffect(() => {
        if (
            SupplierDataFromStore?.data?.length > 0 &&
            SupplierDataFromStore?.data !== null
        ) {
            setSupplierList([...SupplierDataFromStore?.data]);
        } else {
            setSupplierList([]);
        }
    }, [])

    useEffect(() => {
        if (
            EmeraldTableDataFromStore?.data?.length > 0 &&
            EmeraldTableDataFromStore?.data !== null
        ) {
            setEmeraldTableData([...EmeraldTableDataFromStore?.data]);
        } else {
            setEmeraldTableData([]);
        }
    }, [EmeraldTableDataFromStore])

    const HandleSupplier = (e: any) => {
        setSupplier(e.target.value)
    }


    return { supplierList, HandleSupplier, emeraldTableData }
}

export default UseDataUploadHook;