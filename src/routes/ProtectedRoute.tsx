import React from 'react';
import Navbar from '../components/Header/Navbar';

const ProtectedRoute = ({ children }: any) => {
  return(
  <>
    <Navbar />
    {children}
  </>
  ) ;
};

export default ProtectedRoute;
