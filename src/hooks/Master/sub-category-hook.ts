import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { get_subcategory_list } from '../../store/slices/Chitti/get-subcategory-slice';
import {
  getSubCategoryCategory,
  get_subcategory_category,
} from '../../store/slices/Master/get-subcategory-category-slice';

const useSubCategoryHook = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const subCategoryDataFromStore: any = useSelector(get_subcategory_list);
  const subCategoryCategoryDataFromStore: any = useSelector(
    get_subcategory_category
  );

  const [subCategoryList, setSubCategoryList] = useState<any>([]);
  const [subCategoryCategoryData, setSubCategoryCategoryData] = useState<any>(
    []
  );

  useEffect(() => {
    dispatch(getSubCategoryCategory(accessToken?.token));
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

  console.log('subCategoryCategoryData in hoook end', subCategoryCategoryData);

  return { subCategoryList, subCategoryCategoryData };
};

export default useSubCategoryHook;
