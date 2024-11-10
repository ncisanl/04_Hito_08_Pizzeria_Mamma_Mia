import { createContext, useContext, useEffect, useState } from "react";

const pizzasContext = createContext();

export function PizzasProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const resPizzas = await fetch("http://localhost:5000/api/pizzas");
    const pizzasResponse = await resPizzas.json();
    setPizzas(pizzasResponse);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <pizzasContext.Provider value={{ pizzas }}>
      {children}
    </pizzasContext.Provider>
  );
}

export const usePizzas = () => {
  return useContext(pizzasContext);
};
