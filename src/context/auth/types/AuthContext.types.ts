export interface AuthContextType {
  user: any;
  SignIn: (user: string, callback: VoidFunction) => void;
  SignOut: (callback: VoidFunction) => void;
  IsUserAuthenticated: () => boolean;
}
