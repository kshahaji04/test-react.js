import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Chitti from '../components/Chitti/Chitti';
import CreateChitti from '../components/Chitti/CreateChitti';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chitti />} />
        <Route path="/chittis/createchiitis" element={<CreateChitti />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
