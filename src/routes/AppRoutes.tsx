import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chitti from '../components/Chitti/ChittiMaster';
import Login from '../components/Auth/Login';
import ProtectedRoute from './ProtectedRoute';
import Master from '../components/Chitti/ChittiMaster';
import Report from '../components/Report';
import EmeraldChittiMaster from '../components/EmeraldChitti/EmeraldChittiMaster';
import DataUploadMaster from '../components/DataUpload/DataUploadMaster';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Master />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chitti"
          element={
            <ProtectedRoute>
              <Chitti />
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
              <EmeraldChittiMaster />
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

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
