import { createContext, useContext, useState } from "react";

const userContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(true);

  const logout = () => setToken(false);

  return (
    <userContext.Provider value={{ token, logout }}>
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => {
  return useContext(userContext);
};
