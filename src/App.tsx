import { ToastContainer } from 'react-toastify';
import './Style/index.css';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={true}
        // pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
      <AppRoutes />
    </>
  );
};

export default App;
