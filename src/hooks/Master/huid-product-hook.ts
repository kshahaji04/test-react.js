import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getHuidProductList,
  get_huid_product_list,
} from '../../store/slices/Master/get-huid-product-slice';

const UseHuidProductHook = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const huidDataFromStore: any = useSelector(get_huid_product_list);
  console.log('huidDataFromStore', huidDataFromStore);

  const [huidProductData, setHuidProductData] = useState<any>([]);

  useEffect(() => {
    dispatch(getHuidProductList(AccessToken?.token));
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

export default UseHuidProductHook;
