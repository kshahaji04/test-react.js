import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';

import { get_subcategory_list } from '../../store/slices/Chitti/get-subcategory-slice';

import {
  getSubCategoryCategory,
  get_subcategory_category,
} from '../../store/slices/Master/get-subcategory-category-slice';

const UseSubCategoryHook = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const subCategoryCategoryDataFromStore: any = useSelector(
    get_subcategory_category
  );

  console.log("subCategoryDataFromStore", subCategoryDataFromStore)
  const [subCategoryList, setSubCategoryList] = useState<any>([]);
  const [subCategoryCategoryData, setSubCategoryCategoryData] = useState<any>(
    []
  );

  useEffect(() => {
    dispatch(getSubCategoryCategory(AccessToken?.token));
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

  useEffect(() => {
    if (
      subCategoryCategoryDataFromStore?.data?.length > 0 &&
      subCategoryCategoryDataFromStore?.data !== null
    ) {
      setSubCategoryCategoryData([...subCategoryCategoryDataFromStore?.data]);
    } else {
      setSubCategoryCategoryData([]);
    }
  }, [subCategoryCategoryDataFromStore]);

  console.log("subCategoryCategoryData in hoook end", subCategoryCategoryData)

  return { subCategoryList, subCategoryCategoryData };
};

export default UseSubCategoryHook;
