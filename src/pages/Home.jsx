import { Header } from "../components/Header.jsx";
import { CardPizza } from "../components/CardPizza.jsx";
import { usePizzas } from "../context/PizzasContext.jsx";

export function Home() {
  const { pizzas } = usePizzas();

  const mapPizzas = pizzas.map((pizza) => {
    return <CardPizza key={pizza.id} pizzaInfo={pizza} cartButton={false} />;
  });

  return (
    <>
      <Header />
      <div className="row m-3 section-card">{mapPizzas}</div>
    </>
  );
}
