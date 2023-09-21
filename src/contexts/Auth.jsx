import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const API_URL = import.meta.env.VITE_APP_API_URL;

  return (
    <AuthContext.Provider value={{
      API_URL, setUser, user
    }}>
      {children}
    </AuthContext.Provider>
  )
}