import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getCategoryList,
  get_category_list,
} from '../../store/slices/Master/get-category-slice';

const useCategoryHook = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const categoryDataFromStore: any = useSelector(get_category_list);
  const [CategoryList, setCategoryList] = useState<any>([]);

  useEffect(() => {
    dispatch(getCategoryList(accessToken?.token));
  }, []);

  useEffect(() => {
    if (
      categoryDataFromStore?.data?.length > 0 &&
      categoryDataFromStore?.data !== null
    ) {
      setCategoryList([...categoryDataFromStore?.data]);
    } else {
      setCategoryList([]);
    }
  }, [categoryDataFromStore]);
  return { CategoryList };
};

export default useCategoryHook;
