import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';

import { getSubCategoryList, get_subcategory_list } from '../../store/slices/Chitti/get-subcategory-slice';
import { getCategoryList, get_category_list } from '../../store/slices/Master/get-category-slice';


const UseSubCategoryHook = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const CategoryDataFromStore: any = useSelector(get_category_list);
  const [subCategoryList, setSubCategoryList] = useState<any>([]);

  useEffect(() => {
    dispatch(getSubCategoryList(AccessToken?.token));
  
  }, []);

  useEffect(() => {
    if (
      subCategoryDataFromStore?.data?.length > 0 &&
      subCategoryDataFromStore?.data !== null
    ) {
      setSubCategoryList([...subCategoryDataFromStore?.data]);
    } else {
      setSubCategoryList([]);
    }
  }, [subCategoryDataFromStore]);


  return { subCategoryList };
};

export default UseSubCategoryHook;
