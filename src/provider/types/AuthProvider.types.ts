export interface AuthProviderInfo {
  isAuthenticated: boolean;
  signin: (callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}