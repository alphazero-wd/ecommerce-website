import { useSelector } from 'react-redux';
const SHIPPING_FEE = 5.99;
const Total = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <section className="mt-5 text-end">
      <div
        style={{ maxWidth: '600px' }}
        className="container border border-dark rounded-3 p-3"
      >
        <h4 className="my-3 d-flex justify-content-between">
          Subtotal: <span>${totalPrice}</span>
        </h4>
        <p className="my-3 lead d-flex justify-content-between">
          Shipping Fees: <span>${SHIPPING_FEE}</span>
        </p>
        <hr />
        <h3 className="my-3 d-flex justify-content-between">
          Total: <span>${parseFloat(totalPrice) + SHIPPING_FEE}</span>
        </h3>
        <button className="fw-bold text-uppercase btn btn-dark w-100">
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Total;
