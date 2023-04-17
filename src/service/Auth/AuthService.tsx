import React, { useState, useEffect, ReactNode, ReactElement } from 'react';
import { AuthProvider } from '../../provider/AuthProvider';
import AuthContext from '../../context/auth/AuthContext';

const AuthManager = ({ children }: { children: ReactNode }): ReactElement => {
  const [user, setUser] = useState<any>(null);

  const SignIn = (newUser: string, callback: VoidFunction) => {
    return AuthProvider.signin(() => {
      window.sessionStorage.setItem('magalu.auth', newUser);
      setUser(newUser);
      callback();
    });
  };

  const SignOut = (callback: VoidFunction) => {
    return AuthProvider.signout(() => {
      window.sessionStorage.removeItem('magalu.auth');
      setUser(null);
      callback();
    });
  };

  const IsUserAuthenticated = (): boolean => {
    return UserAuthenticated() !== null;
  };

  const UserAuthenticated = (): string => {
    return window.sessionStorage.getItem('magalu.auth') as string;
  };

  const value = { user, SignIn, SignOut, IsUserAuthenticated };

  useEffect(() => {
    // Recupera a sessão ativa.
    if (IsUserAuthenticated()) {
      SignIn(UserAuthenticated(), () => void {});
    }
  }, [AuthProvider]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthManager;
