import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
const Meals = ({ meal, addToCart }) => {
  const [imageSrc, setImageSrc] = useState(meal.image.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageSrc(meal.image.mobile);
      } else if (window.innerWidth < 1024) {
        setImageSrc(meal.image.tablet);
      } else {
        setImageSrc(meal.image.desktop);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [meal.image.mobile, meal.image.tablet, meal.image.desktop]);

  return (
    <div className="border-none relative p-3 pb-8 font-sans">
      <div className="mb-8 relative">
        <img
          // style={{
          //   borderColor: color ? "red" : "none",
          //   borderStyle: "solid",
          //   borderWidth: "2px",
          // }}
          src={imageSrc}
          className="rounded-lg w-full h-auto"
          alt={meal.category}
        />
        <button
          onClick={() => {
            // console.log('adding to meal', meal);
            addToCart(meal)}}
          className="flex items-center justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white border border-rose px-6 py-3 min-w-[170px] md:px-6 md:py-3 rounded-[60px] text-sm md:text-base -mb-4"
        >
          <FaCartPlus className="text-rose mr-2" />
          <span className="text-sm font-semibold leading-none">
            Add To Cart
          </span>
        </button>
      </div>
      <div className="">
        <p className="text-rose-400">{meal.category}</p>
        <h3>{meal.name}</h3>
        <p className="text-rose font-bold">${meal.price}</p>
      </div>
    </div>
  );
};

Meals.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.shape({
      tablet: PropTypes.string,
      mobile: PropTypes.string,
      desktop: PropTypes.string,
    }),
  }),
  addToCart: PropTypes.func,
  color: PropTypes.any,
};

export default Meals;
