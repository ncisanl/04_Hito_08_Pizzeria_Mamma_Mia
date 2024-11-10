import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState("");
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

    console.log("data postRegister: ", data);

    if (data?.error) {
      return alert(data?.error);
    }

    setToken(data.token);
    alert("Registrado exitosamente");
  };

  const postLogin = async (event, inputsValue) => {
    event.preventDefault();
    const resRegister = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputsValue),
    });
    const data = await resRegister.json();

    console.log("data postLogin: ", data);

    if (data?.error) {
      return alert(data?.error);
    }

    setToken(data.token);
    alert("Inició sesión exitosamente");
  };

  return (
    <userContext.Provider
      value={{ token, logout, postRegister, postLogin, user }}
    >
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => {
  return useContext(userContext);
};
