import { createContext, useContext, useState } from "react";

const userContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({});

  const logout = () => setToken(false);

  const postRegister = async (event, inputsValue) => {
    event.preventDefault();
    const resRegister = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputsValue),
    });
    const data = await resRegister.json();

    console.log("data: ", data);

    if (data?.error) {
      return alert(data?.error);
    }

    setUser(data);
    alert("Registro exitoso");
  };

  return (
    <userContext.Provider value={{ token, logout, postRegister, user }}>
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => {
  return useContext(userContext);
};
