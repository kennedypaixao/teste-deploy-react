import { AuthProviderInfo } from './types/AuthProvider.types';

 const AuthProvider: AuthProviderInfo = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    AuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    AuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};

export { AuthProvider };
