import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import ProtectedRoute from './ProtectedRoute';
import DataUploadMaster from '../components/DataUpload/DataUploadMaster';
import MasterPage from '../pages/master';
import ChittiPage from '../pages/chitti';
import Report from '../pages/report';
import Emerald from '../pages/emrald';

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
