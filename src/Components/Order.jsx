import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
const Order = ({ close, cart, total, reset }) => {
  return (
    <div className="bg-white mx-auto px-6 py-5 w-[350px] rounded-lg">
      <FaCheckCircle className="text-green-500 my-2 text-[30px]" />
      <h2 className="text-rose-900 text-[20px] font-bold">Order Confirmed</h2>
      <p className="text-[15px]">We hope you enjoy your food!</p>
      <div className="bg-rose-100 px-3 py-2 rounded-sm my-6">
        {cart.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center my-2">
              <div className="flex">
                <img
                  src={item.image.thumbnail}
                  className="h-10 w-10 mr-2"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-[13px] font-semibold">{item.name}</p>
                  <p className="text-[10px] font-semibold">${item.price}</p>
                </div>
              </div>
              <p className="text-rose-900 font-semibold text-[15px]">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p>Order Total</p>
        <p className="text-rose-900 font-bold text-[20px]">${total}</p>
      </div>

      <button
        onClick={() => {
          close();
          reset();
        }}
        className="bg-rose w-full rounded-full active:bg-rose-900 text-white py-3 my-4"
      >
        Start New Order
      </button>
    </div>
  );
};

Order.propTypes = {
  close: PropTypes.func,
  total: PropTypes.number,
  cart: PropTypes.array,
  reset: PropTypes.func
};

export default Order;
