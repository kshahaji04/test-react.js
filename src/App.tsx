import { ToastContainer } from 'react-toastify';
import './Style/index.css';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default App;
