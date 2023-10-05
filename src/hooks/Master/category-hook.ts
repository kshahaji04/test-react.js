import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';

import { getSubCategoryList, get_subcategory_list } from '../../store/slices/Chitti/get-subcategory-slice';
import { getCategoryList, get_category_list } from '../../store/slices/Master/get-category-slice';


const UseCategoryHook = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const CategoryDataFromStore: any = useSelector(get_category_list);
  const [CategoryList, setCategoryList] = useState<any>([]);
console.log("CategoryDataFromStore",CategoryDataFromStore)
  useEffect(() => {

    dispatch(getCategoryList(AccessToken?.token))
  }, []);

 
  useEffect(() => {
    if (
        CategoryDataFromStore?.data?.length > 0 &&
        CategoryDataFromStore?.data !== null
    ) {
        setCategoryList([...CategoryDataFromStore?.data]);
    } else {
        setCategoryList([]);
    }
  }, [CategoryDataFromStore]);
  return { CategoryList };
};

export default UseCategoryHook;
