import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext.jsx";

const cartContext = createContext();

export function CartProvider({ children }) {
  const { token } = useUser();
  const [pizzaCart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [quantityTotal, setQuantityTotal] = useState(0);

  const addToCart = (pizza) => {
    const finalIdCart =
      pizzaCart.length === 0
        ? "1"
        : (Number(pizzaCart[pizzaCart.length - 1].idCart) + 1).toString();
    const newPizza = {
      ...pizza,
      idCart: finalIdCart,
    };
    setCart((prev) => [...prev, newPizza]);
  };

  const deleteToCart = (pizzaToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((pizza) => pizza.idCart !== pizzaToRemove.idCart),
    );
  };

  useEffect(() => {
    const calculateTotalCart = pizzaCart.reduce((acc, { price }) => {
      return acc + price;
    }, 0);
    setTotalCart(calculateTotalCart);
    setQuantityTotal(pizzaCart.length);
  }, [pizzaCart]);

  const postCart = async () => {
    const resCart = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart: pizzaCart }),
    });

    const data = await resCart.json();
    if (data?.message === "Checkout successful") {
      setCart([]);
      alert("Compra realizada exitosamente");
    }
  };

  return (
    <cartContext.Provider
      value={{
        pizzaCart,
        addToCart,
        deleteToCart,
        totalCart,
        quantityTotal,
        postCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(cartContext);
};
