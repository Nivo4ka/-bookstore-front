import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

type PropsType = {
  to?: string;
  isNeedAuth: boolean;
  children: JSX.Element;
};

const PrivateRoute: React.FC<PropsType> = (props) => {
  const userInfo = useAppSelector((state) => state.user.user?.email);
  const location = useLocation();
  if (props.isNeedAuth) {
    return userInfo ? props.children : <Navigate to={props.to || '/log-in'} state={{ from: location }} replace />;
  }
  return !userInfo ? props.children : <Navigate to={props.to || '/'} state={{ from: location }} replace />;
};

export default PrivateRoute;
