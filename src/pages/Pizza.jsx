import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Pizza() {
  const { idPizza } = useParams();
  const [pizza, setPizza] = useState([]);

  const getPizza = async () => {
    const resPizza = await fetch(`http://localhost:5000/api/pizzas/${idPizza}`);
    const pizzaResponse = await resPizza.json();
    setPizza(pizzaResponse);
  };

  useEffect(() => {
    getPizza();
  }, []);

  const mapIngredients = pizza?.ingredients?.map((ingredient, index) => {
    const isLast = index === pizza.ingredients.length - 1;
    return (
      <li key={ingredient} className="ingredient-item">
        {ingredient}
        {!isLast && ", "}
      </li>
    );
  });

  return (
    <>
      <div className="m-3 section-card section-card-pizza">
        <div className="col-md-4 card-pizza">
          <div className="card">
            <img
              src={pizza.img}
              className="card-img-top"
              alt="imagen de card principal"
            />
            <div className="card-body">
              <h5 className="card-title">{pizza.name}</h5>
              <p className="card-text">{pizza.desc}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  🍕 Ingredientes: {mapIngredients}
                </small>
              </p>
              <button type="button" className="btn btn-dark">
                Añadir ${pizza?.price?.toLocaleString("es-CL")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
