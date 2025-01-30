import { useState } from "react";
import { useEffect } from "react";
import Meals from "./Meals";
import Cart from "./Cart";
import Order from "./Order";

const Home = () => {
  const [meals, setMeal] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const [count, setCount] = useState(0);
  const [order, setOrder] = useState(false);

  const deleteMeal = (item) => {
    setCart(cart.filter((meal) => meal.id !== item.id));
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCart([]);
    setCount(0);
  };
  const openOrder = () => setOrder(true);
  const closeOrder = () => setOrder(false);

  const addToCart = (meal) => {
    setCart(
      (prev) => {
        const existingMeal = prev.find((item) => item.id === meal.id);

        if (existingMeal) {
          return prev.map((item) =>
            item.id === meal.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prev, { ...meal, quantity: 1 }];
        }
      }
      // setColor((prev) => !prev)
    );
    setCount((total) => total + 1);
  };
  useEffect(() => {
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:8000/meals");
        if (!response.ok) {
          throw new Error("error fetching meals");
        }
        const data = await response.json();
        setMeal(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div className="container-xl lg:container max-w-6xl mx-auto py-6 px-6">
      <div className="grid grid-cols-1 md:grid-cols-70/30 grid-rows-[auto] gap-4">
        <div className=" ">
          <h1 className="text-3xl text-rose-900 font-bold px-3 py-3">
            Desserts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {meals.length > 0 ? (
              meals.map((meal) => (
                <Meals key={meal.id} meal={meal} addToCart={addToCart} />
              ))
            ) : (
              <p>No meal found</p>
            )}
          </div>
        </div>
        <Cart
          cart={cart}
          total={total}
          count={count}
          open={openOrder}
          deleteMeal={deleteMeal}
        />
      </div>

      {order && (
        <div className=" fixed inset-0 flex justify-center items-center  ">
          <Order close={closeOrder} total={total} cart={cart} reset={reset} />
        </div>
      )}
    </div>
  );
};

export default Home;
