import { useState } from "react";
import { useEffect } from "react";
import Meals from "./Meals";
import Cart from "./Cart";

const Home = () => {
  const [meals, setMeal] = useState([]);

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
          <h1 className="text-3xl font-bold px-3 py-3">Desserts</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {meals.length > 0 ? (
              meals.map((meal) => <Meals key={meal.id} meal={meal} />)
            ) : (
              <p>No meal found</p>
            )}
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Home;
