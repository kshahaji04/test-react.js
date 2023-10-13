import { combineReducers } from '@reduxjs/toolkit';
import GetAccessTokenReducer from './slices/auth/token-login-slice';
import GetChittiChallanReducer from './slices/Chitti/get-chitti-challan-list-slice';
import GetSpecificChittiChallanReducer from './slices/Chitti/get-specific-chitti-listing-data-slice';
import GetClientNameReducer from './slices/Chitti/get-client-name-slice';
import GetClientGroupReducer from './slices/Chitti/get-client-group-list-slice';
import GetSubCategoryListReducer from './slices/Chitti/get-subcategory-slice';
import GetProductListReducer from './slices/Chitti/get-product-list-slice';
import GetEmeraldChallanReducer from './slices/Emerald/get-emerald-list-slice';
import GetCategoryListReducer from './slices/Master/get-category-slice';
import GetHuidProductListReducer from './slices/Master/get-huid-product-slice';
import GetProductItemReducer from './slices/Emerald/get-product-item-slice';
import GetSupplierListReducer from './slices/dataUpload/get-supplier-slice';
import GetEmeraldTableDataReducer from './slices/dataUpload/get-emerald-table-data-slice';
import GetSpecificEmeraldReducer from './slices/Emerald/get-specific-emrald-slice';
import GetSpecificClientGroupReducer from './slices/Master/get-specific-client-group-slice';
import GetSpecificCategoryReducer from './slices/Master/get-specific-category-slice';
import GetEmeraldSupplierReducer from './slices/dataUpload/get-emerald-supplier-slice';
import GetClientNameClientGroupReducer from './slices/Master/get-clientname-clientgroup-slice';
import GetSubCategoryCategoryReducer from './slices/Master/get-subcategory-category-slice';
import GetReportTableDataReducer from './slices/report/get-report-tableData-slice';
import GetSubCategoryReportReducer from './slices/report/get-subcategory-report-slice';
import GetCategorySummaryReportReducer from './slices/report/get-category-summary-report-slice';
import GetCategoryPartywiseReportReducer from './slices/report/get-category-summary-report-slice';
import GetEmeraldReportReducer from './slices/report/get-emerald-report-slice';
import GetEmeraldShilpiListReducer from './slices/emerald-shilpi/get-emerald-shilpi-slice';
import GetEmeraldShilpiDetailsReducer from './slices/emerald-shilpi/get-emerald-shilpi-details-slice';

const appReducer = combineReducers({
  GetAccessTokenScreen: GetAccessTokenReducer,
  GetChittiChallanScreen: GetChittiChallanReducer,
  GetSpecificChittiChallanScreen: GetSpecificChittiChallanReducer,
  GetClientNameScreen: GetClientNameReducer,
  GetSubCategoryListScreen: GetSubCategoryListReducer,
  GetProductListScreen: GetProductListReducer,
  GetClientGroupScreen: GetClientGroupReducer,
  GetEmeraldChallanScreen: GetEmeraldChallanReducer,
  GetCategoryListScreen: GetCategoryListReducer,
  GetHuidProductListScreen: GetHuidProductListReducer,
  GetProductItemScreen: GetProductItemReducer,
  GetSupplierListScreen: GetSupplierListReducer,
  GetEmeraldTableDataScreen: GetEmeraldTableDataReducer,
  GetSpecificEmeraldScreen: GetSpecificEmeraldReducer,
  GetSpecificClientGroupScreen: GetSpecificClientGroupReducer,
  GetSpecificCategoryScreen: GetSpecificCategoryReducer,
  GetEmeraldSupplierScreen: GetEmeraldSupplierReducer,
  GetClientNameClientGroupScreen: GetClientNameClientGroupReducer,
  GetSubCategoryCategoryScreen: GetSubCategoryCategoryReducer,
  GetReportTableDataScreen: GetReportTableDataReducer,
  GetSubCategoryReportScreen: GetSubCategoryReportReducer,
  GetCategorySummaryReportScreen: GetCategorySummaryReportReducer,
  GetCategoryPartywiseReportScreen: GetCategoryPartywiseReportReducer,
  GetEmeraldReportScreen: GetEmeraldReportReducer,
  GetEmeraldShilpiListScreen: GetEmeraldShilpiListReducer,
  GetEmeraldShilpiDetailsScreen: GetEmeraldShilpiDetailsReducer,
});

const rootReducer = (state: any, action: any) => {
  console.log('navbar rootreducer');
  if (action.type === 'getAccessToken/logoutUser') {
    state = undefined;

    state = {} as RootState;
  }

  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
