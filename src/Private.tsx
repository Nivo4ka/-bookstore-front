import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import store from './store/store';

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = !!store.getState();
  if (isAuthenticated) {
    if (store.getState().user.token) {
      // eslint-disable-next-line react/react-in-jsx-scope
      return <Component />;
    }
  }
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Navigate to='/log-in' />;
};

export default PrivateRoute;
