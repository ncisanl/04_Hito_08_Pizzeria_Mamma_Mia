import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    id: "",
    email: "",
  });

  const logout = () => setToken(false);

  const postRegister = async (event, inputsValue) => {
    event.preventDefault();
    const resRegister = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputsValue),
    });
    const data = await resRegister.json();

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

    if (data?.error) {
      return alert(data?.error);
    }

    setToken(data.token);
    alert("Inició sesión exitosamente");
  };

  useEffect(() => {
    if (token !== "") {
      const getUser = async () => {
        const resUser = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await resUser.json();

        setUser({
          id: data.id,
          email: data.email,
        });
      };

      getUser();
    }
  }, [token]);

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
