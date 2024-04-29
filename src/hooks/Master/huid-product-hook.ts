import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getHuidProductList,
  get_huid_product_list,
} from '../../store/slices/Master/get-huid-product-slice';

const useHuidProductHook = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const huidDataFromStore: any = useSelector(get_huid_product_list);

  const [huidProductData, setHuidProductData] = useState<any>([]);

  useEffect(() => {
    dispatch(getHuidProductList(accessToken?.token));
  }, []);

  useEffect(() => {
    if (
      huidDataFromStore?.data?.length > 0 &&
      huidDataFromStore?.data !== null
    ) {
      setHuidProductData([...huidDataFromStore?.data]);
    } else {
      setHuidProductData([]);
    }
  }, [huidDataFromStore]);

  return { huidProductData };
};

export default useHuidProductHook;
