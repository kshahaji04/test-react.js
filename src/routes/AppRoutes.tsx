import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import ProtectedRoute from './ProtectedRoute';
import DataUploadMaster from '../components/DataUpload/DataUploadMaster';
import MasterPage from '../pages/master';
import ChittiPage from '../pages/chitti';
import Report from '../pages/report';
import Emerald from '../pages/emrald';
import ChallanList from '../components/Master/MasterListing/ChallanList';
import ClientGroup from '../components/Master/MasterListing/ClientGroup/ClientGroup';
import ClientName from '../components/Master/MasterListing/ClientName/ClientName';
import Category from '../components/Master/MasterListing/Category/CategoryMaster';
import SubCategory from '../components/Master/MasterListing/SubCategory/SubCategoryMaster';
import HuidProduct from '../components/Master/MasterListing/HuidProduct/HuidProductMaster';
import EmeraldChitti from '../components/Master/MasterListing/EmeraldChitti';
import EmeraldListing from '../components/Master/MasterListing/Emerald';
import EditChallanChitti from '../components/Chitti/ChittiListing/EditChallanChitti';
import MasterPageClientNameDetail from '../components/Master/MasterListing/ClientName/MasterPageClientNameDetails';
import MasterListing from '../components/Master/MasterListing';
import MasterPageSubCategoryDetail from '../components/Master/MasterListing/SubCategory/MasterPageSubCagegoryDetail';
import EditEmeraldChitti from '../components/EmeraldChitti/EmeraldListing/EditEmeraldChitti';
import EmeraldSupplierDetailPage from '../components/DataUpload/ViewUpload/EmeraldSupplierDetailPage';
import ReportMaster from '../components/Report/ReportMaster';
import SubCategoryReport from '../components/Report/ReportListing.tsx/SubCategoryReport';
import CategoryPartyWiseReport from '../components/Report/ReportListing.tsx/CategoryPartywiseReport';
import CategorySummaryReport from '../components/Report/ReportListing.tsx/CategorySummaryReport';
import MasterPageClientGroupDetails from '../components/Master/MasterListing/ClientGroup/MasterPageClientGroupDetails';
import MasterPageCategoryDetails from '../components/Master/MasterListing/Category/MasterPageCategoryDetails';
import MasterPageHuidProductDetails from '../components/Master/MasterListing/HuidProduct/MasterPageHuidProductDetails';
import EmeraldReport from '../components/Report/ReportListing.tsx/EmeraldReport';
import EmeraldShilpiDetails from '../components/DataUpload/EmeraldShilpi/EmeraldShilpiDetails';

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
          path="/master/challanlist"
          element={
            <ProtectedRoute>
              <MasterPage />
              <ChallanList />
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
          path="/master/emeraldchitti"
          element={
            <ProtectedRoute>
              <MasterPage />
              <EmeraldChitti />
            </ProtectedRoute>
          }
        />

        <Route
          path="/master/emerald"
          element={
            <ProtectedRoute>
              <MasterPage />
              <EmeraldListing />
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
          path="/report/subcategory"
          element={
            <ProtectedRoute>
              <ReportMaster />
              <SubCategoryReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/categorypartywise"
          element={
            <ProtectedRoute>
              <ReportMaster />
              <CategoryPartyWiseReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/categorysummary"
          element={
            <ProtectedRoute>
              <ReportMaster />
              <CategorySummaryReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/emerald"
          element={
            <ProtectedRoute>
              <ReportMaster />
              <EmeraldReport />
            </ProtectedRoute>
          }
        />

        <Route
          path="/emerald/:id"
          element={
            <ProtectedRoute>
              <EditEmeraldChitti />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dataupload/:id"
          element={
            <ProtectedRoute>
              <EmeraldSupplierDetailPage />
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
          path="/report"
          element={
            <ProtectedRoute>
              <Report />
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
        <Route
          path="/dataupload"
          element={
            <ProtectedRoute>
              <DataUploadMaster />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dataupload/emerald-shilpi/:id"
          element={
            <ProtectedRoute>
              <EmeraldShilpiDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
