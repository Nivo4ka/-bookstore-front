import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const userInfo = useAppSelector((state) => state.user.user?.email);
  const location = useLocation();
  return userInfo ? children : <Navigate to="/log-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
