import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import ProtectedRoute from './ProtectedRoute';
import DataUploadMaster from '../components/DataUpload/DataUploadMaster';
import MasterPage from '../pages/master';
import ChittiPage from '../pages/chitti';
import Report from '../pages/report';
import Emerald from '../pages/emrald';
import Master from '../components/Master';
import ChallanList from '../components/Master/MasterListing/ChallanList';
import ClientGroup from '../components/Master/MasterListing/ClientGroup/ClientGroup';
import ClientName from '../components/Master/MasterListing/ClientName/ClientName';
import Category from '../components/Master/MasterListing/Category/CategoryMaster';
import SubCategory from '../components/Master/MasterListing/SubCategory/SubCategoryMaster';
import HuidProduct from '../components/Master/MasterListing/HuidProduct/HuidProductMaster';
import EmeraldChitti from '../components/Master/MasterListing/EmeraldChitti';
import EmeraldListing from '../components/Master/MasterListing/Emerald';
import ClientNameListing from '../components/Master/MasterListing/ClientName/ClientNameListing';

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
              <MasterPage/>
              <ChallanList/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/clientgroup"
          element={
            <ProtectedRoute>
              <MasterPage/>
             <ClientGroup/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/clientname"
          element={
            <ProtectedRoute>
              <MasterPage/>
              <ClientName/>
            </ProtectedRoute>
          }
        />
         <Route
          path="/master/category"
          element={
            <ProtectedRoute>
              <MasterPage/>
              <Category/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/subcategory"
          element={
            <ProtectedRoute>
              <MasterPage/>
              <SubCategory/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/huidproduct"
          element={
            <ProtectedRoute>
              <MasterPage />
              <HuidProduct/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/master/emeraldchitti"
          element={
            <ProtectedRoute>
              <MasterPage />
              <EmeraldChitti/>
            </ProtectedRoute>
          }
        />
       
        <Route
          path="/master/emerald"
          element={
            <ProtectedRoute>
              <MasterPage />
              <EmeraldListing/>
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
          path="/emerald"
          element={
            <ProtectedRoute>
              <Emerald />
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-upload"
          element={
            <ProtectedRoute>
              <DataUploadMaster />
            </ProtectedRoute>
          }
        />

        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
