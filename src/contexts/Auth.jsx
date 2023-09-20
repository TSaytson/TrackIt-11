import { createContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const API_URL = import.meta.env.VITE_APP_API_URL;

  return (
    <AuthContext.Provider value={{ API_URL }}>
      {children}
    </AuthContext.Provider>
  )
}