const Order = ({ close }) => {
  return (
    <div className="bg-white mx-auto p-2">
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <div></div>
      <div>
        <p>Order Total</p>
        <p>Price</p>
      </div>

      <button onClick={close}>Start New Order</button>
    </div>
  );
};

export default Order;
