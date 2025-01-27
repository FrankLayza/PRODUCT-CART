import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
const Cart = ({ cart, total }) => {
  // const [total, setTotal] = useState(0);
  return (
    <div className="bg-white rounded-md p-5 h-fit">
      <div className=" p-2 mx-auto">
        <h2 className="text-rose font-bold text-[20px] mb-4">
          Your Cart ({total})
        </h2>

        {cart.length === 0 ? (
          <div>
            <img
              className="mx-auto"
              src=" /assets/images/illustration-empty-cart.svg"
              alt=""
            />
            <h1 className="text-rose-500 text-center font-semiboldb text-[15px]">
              Your added items will appear here
            </h1>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between ">
                  <div>
                    <p className="text-rose-900 font-bold text-[15px]">
                      {item.name}
                    </p>
                    <p className="text-[13px] text-rose-400 mt-1">
                      ${item.price}
                    </p>
                    <hr className="bg-rose-500 mt-3 mb-4" />
                  </div>
                  <div>
                    <AiOutlineClose className="mt-4 text-rose-500" />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <p>Order Total</p>
              <p>$45</p>
            </div>
            <button className="bg-rose w-full rounded-full text-white py-3 my-4">Confirm Order</button>
          </>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.any,
};
export default Cart;
