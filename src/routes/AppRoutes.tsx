import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chitti from '../components/Chitti/Chitti';
import CreateChitti from '../components/Chitti/CreateChitti';
import Login from '../components/Auth/Login';
import ProtectedRoute from './ProtectedRoute';
import Master from '../components/master';

import Report from '../components/Report';
import DataUpload from '../components/DataUpload';
import EmeraldChittiMaster from '../components/EmeraldChitti/EmeraldChittiMaster';

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
              <DataUpload />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
