import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chitti from '../components/Chitti/Chitti';
import CreateChitti from '../components/Chitti/CreateChitti';
import Login from '../components/Auth/Login';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Chitti />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chittis/createchiitis"
          element={
            <ProtectedRoute>
              <CreateChitti />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
