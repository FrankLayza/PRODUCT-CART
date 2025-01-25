import { useState } from "react";
 
const Cart = () => {
  const [total, setTotal] = useState(0)
  return (
    <div className="bg-white rounded-md p-5 h-fit">
      <h2 className="text-rose font-bold text-[20px]">Your Cart ({total})</h2>
      <div className="flex flex-col items-center justify-center">
        <img src="/public/assets/images/illustration-empty-cart.svg" alt="" />
        <h1 className="text-rose-500 font-semiboldb text-[15px]">Your added items will appear here</h1> 
      </div>
      

    </div>
  );
};

export default Cart;
