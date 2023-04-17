import React from 'react';
import { AuthContextType } from './types/AuthContext.types';

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext