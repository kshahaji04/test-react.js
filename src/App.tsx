import './App.css';
import Navbar from './components/Header/Navbar';
import AppRoutes from './routes/routes';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
