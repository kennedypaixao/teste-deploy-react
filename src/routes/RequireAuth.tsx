import React, { ReactElement } from 'react'
import {
  useLocation,
  Navigate,
} from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';
import Core from '../components/Core';

const RequireAuth = ({ children, withSideMenu, title }: { children: JSX.Element, withSideMenu: boolean, title: string }): ReactElement => {
  const auth = React.useContext(AuthContext);
  const location = useLocation();

  if (!auth.IsUserAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if(withSideMenu) {
    return (<Core title={title}>{children}</Core>);
  }

  return children;
}

export default RequireAuth;