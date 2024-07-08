import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  deleteCategoryApi,
  deleteClientApi,
  deleteClientGroupApi,
  deleteHuidProductApi,
  deleteProjectSubcategoryMappingApi,
  deleteSubCategoryApi,
  deleteSupplierApi,
  deleteSupplierGroupApi,
} from '../../services/api/Master/delete-master-records-api';
import {
  updateCategoryApi,
  updateClientApi,
  updateClientGroupApi,
  updateHuidProductApi,
  updateProjectSubcategoryMappingApi,
  updateSubCategoryApi,
  updateSupplierApi,
  updateSupplierGroupApi,
} from '../../services/api/Master/update-master-records-api';
import { getClientGroupList } from '../../store/slices/Chitti/get-client-group-list-slice';
import { getCategoryList } from '../../store/slices/Master/get-category-slice';
import { getClientNameClientGroup } from '../../store/slices/Master/get-clientname-clientgroup-slice';
import { getSubCategoryCategory } from '../../store/slices/Master/get-subcategory-category-slice';
import { getSupplierGroupList } from '../../store/slices/Master/get-supplier-group-slice';
import { getsupplierAndSupplierGroup } from '../../store/slices/Master/get-supplier-supplierGroup-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { getHuidProductList } from '../../store/slices/Master/get-huid-product-slice';
import { getProjectSubCategoryMapping } from '../../store/slices/Master/get-project-subcategory-mapping-slice';

const useMasterUpdateHook = ({ data, setIsModalOpen }: any) => {
  let location = useLocation();
  let path: any = location.pathname;
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const [formData, setFormData] = useState(data);

  const handleInputChange = (value: any, fieldName: any) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const getUpdatedData: any = () => {
    switch (true) {
      case path.includes('/clientgroup'):
        dispatch(getClientGroupList(accessToken?.token));
        break;
      case path.includes('/clientname'):
        dispatch(getClientNameClientGroup(accessToken?.token));
        break;
      case path.includes('/category'):
        dispatch(getCategoryList(accessToken?.token));
        break;
      case path.includes('/subcategory'):
        dispatch(getSubCategoryCategory(accessToken?.token));
        break;
      case path.includes('/huidproduct'):
        dispatch(getHuidProductList(accessToken?.token));
        break;
      case path.includes('/suppliergroup'):
        dispatch(getsupplierAndSupplierGroup(accessToken?.token));
        break;
      case path.includes('/supplier'):
        dispatch(getSupplierGroupList(accessToken?.token));
        break;
      case path.includes('/projectsubcategorymapping'):
        dispatch(getProjectSubCategoryMapping(accessToken?.token));
        break;
      default:
        break;
    }
  };

  console.log('values', data, formData);
  const handleSaveBtn: any = async () => {
    let updateRecord;
    switch (true) {
      case path.includes('/clientgroup'):
        updateRecord = await updateClientGroupApi(
          accessToken.token,
          data?.name,
          formData?.name
        );
        break;
      case path.includes('/clientname'):
        updateRecord = await updateClientApi(
          accessToken.token,
          data?.name,
          formData?.name,
          formData?.client_group
        );
        break;
      case path.includes('/category'):
        updateRecord = await updateCategoryApi(
          accessToken.token,
          data?.name,
          formData?.name
        );
        break;
      case path.includes('/subcategory'):
        updateRecord = await updateSubCategoryApi(
          accessToken.token,
          data?.name,
          formData?.name,
          formData?.category
        );
        break;
      case path.includes('/huidproduct'):
        updateRecord = await updateHuidProductApi(
          accessToken.token,
          data?.name,
          formData?.name,
          formData?.custom_hm_pcs
        );
        break;
      case path.includes('/suppliergroup'):
        updateRecord = await updateSupplierGroupApi(
          accessToken.token,
          data?.name,
          formData?.name
        );
        break;
      case path.includes('/supplier'):
        updateRecord = await updateSupplierApi(
          accessToken.token,
          data?.name,
          formData?.name,
          formData?.supplier_group
        );
        break;
      case path.includes('/projectsubcategorymapping'):
        updateRecord = await updateProjectSubcategoryMappingApi(
          accessToken.token,
          data?.name,
          formData?.name,
          formData?.stone,
          formData?.plain
        );
        break;

      default:
        break;
    }

    if (
      updateRecord?.data?.message?.status === 'success' &&
      updateRecord?.status === 200
    ) {
      toast.success(`${updateRecord?.data?.message?.message}`);
      setIsModalOpen(false);
      getUpdatedData();
    } else {
      toast.error(`${updateRecord?.data?.message?.message}`);
    }
  };
  const handleDeleteBtn: any = async () => {
    let deleteRecord;
    switch (true) {
      case path.includes('/clientgroup'):
        deleteRecord = await deleteClientGroupApi(accessToken.token, data);
        break;
      case path.includes('/clientname'):
        deleteRecord = await deleteClientApi(accessToken.token, data);
        break;
      case path.includes('/category'):
        deleteRecord = await deleteCategoryApi(accessToken.token, data);
        break;
      case path.includes('/subcategory'):
        deleteRecord = await deleteSubCategoryApi(accessToken.token, data);
        break;
      case path.includes('/huidproduct'):
        deleteRecord = await deleteHuidProductApi(accessToken.token, data);
        break;
      case path.includes('/suppliergroup'):
        deleteRecord = await deleteSupplierGroupApi(accessToken.token, data);
        break;
      case path.includes('/supplier'):
        deleteRecord = await deleteSupplierApi(accessToken.token, data);
        break;
      case path.includes('/projectsubcategorymapping'):
        deleteRecord = await deleteProjectSubcategoryMappingApi(
          accessToken.token,
          data
        );
        break;
      default:
        break;
    }

    if (deleteRecord?.data?.message === 'ok' && deleteRecord?.status === 202) {
      toast.success('Record Deleted');
      setIsModalOpen(false);
      getUpdatedData();
    } else {
      toast.error('Failed to delete Record');
    }
  };

  return {
    handleInputChange,
    formData,
    setFormData,
    handleSaveBtn,
    handleClose,
    handleDeleteBtn,
  };
};

export default useMasterUpdateHook;
