import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import EditChallanChitti from '../components/Chitti/ChittiListing/EditChallanChitti';
import EmeraldChittiMaster from '../components/EmeraldChitti/EmeraldChittiMaster';
import EditEmeraldChitti from '../components/EmeraldChitti/EmeraldListing/EditEmeraldChitti';
import MasterListing from '../components/Master/MasterListing';
import Category from '../components/Master/MasterListing/Category/CategoryMaster';
import MasterPageCategoryDetails from '../components/Master/MasterListing/Category/MasterPageCategoryDetails';
import ClientGroup from '../components/Master/MasterListing/ClientGroup/ClientGroup';
import MasterPageClientGroupDetails from '../components/Master/MasterListing/ClientGroup/MasterPageClientGroupDetails';
import ClientName from '../components/Master/MasterListing/ClientName/ClientName';
import MasterPageClientNameDetail from '../components/Master/MasterListing/ClientName/MasterPageClientNameDetails';
import HuidProduct from '../components/Master/MasterListing/HuidProduct/HuidProductMaster';
import MasterPageHuidProductDetails from '../components/Master/MasterListing/HuidProduct/MasterPageHuidProductDetails';
import MasterPageProjectSubCategoryMapping from '../components/Master/MasterListing/ProjectSubCategoryMapping/MasterPageProjectSubCategoryMapping';
import ProjectSubCategoryMappingMaster from '../components/Master/MasterListing/ProjectSubCategoryMapping/ProjectSubCategoryMappingMaster';
import MasterPageSubCategoryDetail from '../components/Master/MasterListing/SubCategory/MasterPageSubCagegoryDetail';
import SubCategory from '../components/Master/MasterListing/SubCategory/SubCategoryMaster';
import MasterPageSupplierDetails from '../components/Master/MasterListing/Supplier/MasterPageSupplierDetails';
import Supplier from '../components/Master/MasterListing/Supplier/Supplier';
import MasterPageSupplierGroupDetail from '../components/Master/MasterListing/SupplierGroup/MasterPageSupplierGroupDetail';
import SupplierGroup from '../components/Master/MasterListing/SupplierGroup/SupplierGroup';
import DetailPagePurchaseReceipt from '../components/PurchaseReceipt/DetailPagePurchaseReceipt/DetailPagePurchaseReceipt';
import ReportMaster from '../components/Report/ReportMaster';
import ChittiReportsTab from '../components/Report/ReportsTab/ChittiReportsTab';
import EmeralChittiReportsTab from '../components/Report/ReportsTab/EmeraldChittiReportsTab';
import PurchaseReceiptsReportsTab from '../components/Report/ReportsTab/PurchaseReceiptReportsTab';
import SalesReturnReportsTab from '../components/Report/ReportsTab/SalesReturnReportsTab';
import DetailPageSalesReturn from '../components/SalesReturn/DetailPageSalesReturn/DetailPageSalesReturn';
import ChittiPage from '../pages/chitti';
import Emerald from '../pages/emerald';
import MasterPage from '../pages/master';
import PurchaseReceipt from '../pages/purchaseReceipt';
import Report from '../pages/report';
import SalesReturn from '../pages/salesReturn';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/master"
          element={
            <ProtectedRoute>
              <MasterPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/master/clientgroup"
          element={
            <ProtectedRoute>
              <MasterPage />
              <ClientGroup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/clientname"
          element={
            <ProtectedRoute>
              <MasterPage />
              <ClientName />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/category"
          element={
            <ProtectedRoute>
              <MasterPage />
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/subcategory"
          element={
            <ProtectedRoute>
              <MasterPage />
              <SubCategory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/huidproduct"
          element={
            <ProtectedRoute>
              <MasterPage />
              <HuidProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/supplier"
          element={
            <ProtectedRoute>
              <MasterPage />
              <Supplier />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/suppliergroup"
          element={
            <ProtectedRoute>
              <MasterPage />
              <SupplierGroup />
            </ProtectedRoute>
          }
        />

        <Route
          path="/master/projectsubcategorymapping"
          element={
            <ProtectedRoute>
              <MasterPage />
              <ProjectSubCategoryMappingMaster />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/emeraldchitti"
          element={
            <ProtectedRoute>
              <MasterPage />
              <EmeraldChittiMaster />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chitti/:id"
          element={
            <ProtectedRoute>
              <EditChallanChitti />
            </ProtectedRoute>
          }
        />

        <Route
          path="/master/clientname/:id"
          element={
            <ProtectedRoute>
              <MasterListing />
              <MasterPageClientNameDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/clientgroup/:id"
          element={
            <ProtectedRoute>
              <MasterListing />
              <MasterPageClientGroupDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/category/:id"
          element={
            <ProtectedRoute>
              <MasterListing />
              <MasterPageCategoryDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/subcategory/:id"
          element={
            <ProtectedRoute>
              <MasterListing />
              <MasterPageSubCategoryDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/huidproduct/:id"
          element={
            <ProtectedRoute>
              <MasterListing />
              <MasterPageHuidProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/supplier/:id"
          element={
            <ProtectedRoute>
              <MasterListing />
              <MasterPageSupplierDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/suppliergroup/:id"
          element={
            <ProtectedRoute>
              <MasterListing />
              <MasterPageSupplierGroupDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/projectsubcategorymapping/:id"
          element={
            <ProtectedRoute>
              <MasterListing />
              <MasterPageProjectSubCategoryMapping />
            </ProtectedRoute>
          }
        />

        <Route
          path="/purchase-receipt"
          element={
            <ProtectedRoute>
              <PurchaseReceipt />
            </ProtectedRoute>
          }
        />
        <Route
          path="/purchase-receipt/:id"
          element={
            <ProtectedRoute>
              <DetailPagePurchaseReceipt />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chitti"
          element={
            <ProtectedRoute>
              <ChittiPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sales-return"
          element={
            <ProtectedRoute>
              <SalesReturn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales-return/:id"
          element={
            <ProtectedRoute>
              <DetailPageSalesReturn />
            </ProtectedRoute>
          }
        />

        <Route
          path="/report/chitti/:id"
          element={
            <ProtectedRoute>
              <ChittiReportsTab />
              <ReportMaster />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emeraldchitti/:id"
          element={
            <ProtectedRoute>
              <EditEmeraldChitti />
            </ProtectedRoute>
          }
        />

        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/chitti"
          element={
            <ProtectedRoute>
              <ChittiReportsTab />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/purchasereceipt"
          element={
            <ProtectedRoute>
              <PurchaseReceiptsReportsTab />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/purchasereceipt/:id"
          element={
            <ProtectedRoute>
              <PurchaseReceiptsReportsTab />
              <ReportMaster />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/emeraldchitti"
          element={
            <ProtectedRoute>
              <EmeralChittiReportsTab />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/emeraldchitti/:id"
          element={
            <ProtectedRoute>
              <EmeralChittiReportsTab />
              <ReportMaster />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/salesreturn"
          element={
            <ProtectedRoute>
              <SalesReturnReportsTab />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/salesreturn/:id"
          element={
            <ProtectedRoute>
              <SalesReturnReportsTab />
              <ReportMaster />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emeraldchitti"
          element={
            <ProtectedRoute>
              <Emerald />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
