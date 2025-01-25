import { useState } from "react";
import { useEffect } from "react";
import Meals from "./Meals";

const Home = () => {
  const [meals, setMeal] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:8000/meals");
        if (!response.ok) {
          throw new Error("error fetching meals");
        }
        const data = response.json();
        setMeal(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div className="container-xl lg:container max-w-6xl mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-70/30">
        <div className="border border-blue-800">
          <h1 className="text-3xl">Desserts</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {meals.length > 0 ? (
              meals.map((meal) => <Meals key={meal.id} meal={meal} />)
            ) : (
              <p>No meal found</p>
            )}
          </div>
        </div>
        <div className="border border-red-700"></div>
      </div>
    </div>
  );
};

export default Home;
