import { ToastContainer } from 'react-toastify';
import './Style/index.css';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/AppRoutes';
import CustomDropDown from './components/customDropdown';

const App = () => {
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          // pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
        />
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
