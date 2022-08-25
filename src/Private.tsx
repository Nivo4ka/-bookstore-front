import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.user;
  if (isAuthenticated) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Component />;
  }
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Navigate to='/' />;
};

export default PrivateRoute;
