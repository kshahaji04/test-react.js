import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Header/Navbar';
import { get_access_token } from '../store/slices/auth/token-login-slice';

const ProtectedRoute = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<any>(false);
  const userExist: any = useSelector(get_access_token);

  useEffect(() => {
    if (userExist?.token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      window.location.href = '/';
    }
  }, [userExist]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar />
          {children}
        </>
      ) : null}
    </>
  );
};

export default ProtectedRoute;
