import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from './store/hooks';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const userInfo = useAppSelector((state) => state.user.user?.email);
  return userInfo ? children : <Navigate to="/log-in" />;
};

export default PrivateRoute;
