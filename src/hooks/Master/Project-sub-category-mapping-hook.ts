import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getProjectSubCategoryMapping,
  get_project_sub_category_mapping,
} from '../../store/slices/Master/get-project-subcategory-mapping-slice';

const UseProjectSubCategoryMappingHook: any = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const projectSubCategoryMappingDataFromStore: any = useSelector(
    get_project_sub_category_mapping
  );

  const [ProjectSubCategoryMappingList, setProjectSubCategoryMappingList] =
    useState<any>([]);

  useEffect(() => {
    dispatch(getProjectSubCategoryMapping(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      projectSubCategoryMappingDataFromStore?.data?.length > 0 &&
      projectSubCategoryMappingDataFromStore?.data !== null
    ) {
      setProjectSubCategoryMappingList([
        ...projectSubCategoryMappingDataFromStore?.data,
      ]);
    } else {
      setProjectSubCategoryMappingList([]);
    }
  }, [projectSubCategoryMappingDataFromStore]);
  return { ProjectSubCategoryMappingList };
};

export default UseProjectSubCategoryMappingHook;
