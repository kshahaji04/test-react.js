import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getProjectSubCategoryMapping,
  get_project_sub_category_mapping,
} from '../../store/slices/Master/get-project-subcategory-mapping-slice';
import useHandleStateUpdateHook from '../handle-state-update-hook';

const useProjectSubCategoryMappingHook: any = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const { isLoading, setIsLoading } = useHandleStateUpdateHook();


  const projectSubCategoryMappingDataFromStore: any = useSelector(
    get_project_sub_category_mapping
  );

  const [ProjectSubCategoryMappingList, setProjectSubCategoryMappingList] =
    useState<any>([]);

  useEffect(() => {
    dispatch(getProjectSubCategoryMapping(accessToken?.token));
  }, []);

  useEffect(() => {
    setIsLoading(true)
    if (
      projectSubCategoryMappingDataFromStore?.data?.length > 0 &&
      projectSubCategoryMappingDataFromStore?.data !== null
    ) {
      setProjectSubCategoryMappingList([
        ...projectSubCategoryMappingDataFromStore?.data,
      ]);
      setIsLoading(false)
    } else {
      setProjectSubCategoryMappingList([]);
      setIsLoading(false)
    }
  }, [projectSubCategoryMappingDataFromStore]);
  return { ProjectSubCategoryMappingList, isLoading };
};

export default useProjectSubCategoryMappingHook;
