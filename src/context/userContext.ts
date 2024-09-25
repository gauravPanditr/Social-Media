import { createContext } from 'react';
import { Signup } from '../types/authtypes';


export type AuthContextType = {
  signUp: (data: Signup) => Promise<void>;
  isLoading: boolean;
  error: string | null;
};


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
