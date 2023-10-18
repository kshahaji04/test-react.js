import { useState, useEffect } from 'react';
import Navbar from '../components/Header/Navbar';
import { useSelector } from 'react-redux';
import { get_access_token } from '../store/slices/auth/token-login-slice';
const ProtectedRoute = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<any>(false);
  const UserExist: any = useSelector(get_access_token);
  console.log('access_token', UserExist.token);

  useEffect(() => {
    if (Object.keys(UserExist.token).length > 0) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  console.log('isAuthe', isAuthenticated);

  return (
    <>
      <Navbar />
      {children}
      {/* {isAuthenticated === true ? (
        <>
        
        </>
      ) : (
        <div className="mt-5">
          <Login />
        </div>
      )} */}
    </>
  );
};

export default ProtectedRoute;
