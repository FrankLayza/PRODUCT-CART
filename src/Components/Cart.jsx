import PropTypes from "prop-types";
// import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const Cart = ({ cart, total, count, open }) => {
  return (
    <div className="bg-white rounded-md p-5 h-fit">
      <div className=" p-2 mx-auto">
        <h2 className="text-rose font-bold text-[20px] mb-4">
          Your Cart ({count})
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
                  </div>
                  <div>
                    <button className="border border-rose-400 rounded-full flex justify-center items-center w-8 h-8 mt-2">
                      <AiOutlineClose className="text-rose-500" />
                    </button>
                  </div>
                </div>
                <hr className="bg-rose-500 mt-3 mb-4 w-[100%]" />
              </div>
            ))}
            <div className="flex justify-between items-center">
              <p>Order Total</p>
              <p className="text-rose-900 font-bold text-[20px]">${total}</p>
            </div>
            <button onClick={open} className="bg-rose w-full rounded-full active:bg-rose-900 text-white py-3 my-4">
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,   
  total: PropTypes.number,    
  count: PropTypes.number.isRequired,  
  open: PropTypes.func.isRequired,   
};

export default Cart;
