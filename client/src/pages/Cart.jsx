import { useSelector } from 'react-redux';
import CartItem from '../components/Cart/CartItem';
import emptyCartImg from '../images/empty-cart.svg';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal/Modal';

const Cart = () => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  if (cart.length === 0) {
    return (
      <div className="text-center my-5">
        <img
          src={emptyCartImg}
          className="img-fluid w-25"
          alt="Your Cart Is Empty"
        />
        <h4 className="my-4">Your Cart Is Empty</h4>
        <Link to="/products" className="btn btn-dark">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="mt-5">
      <div className="container">
        <h3 className="text-center">Your Cart</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <CartItem key={product._id} {...product} />
            ))}
            <tr>
              <td colSpan={2} className="fw-bold lead fs-5">
                Total Price:{' '}
              </td>

              <td className="fw-bold lead fs-5">${totalPrice}</td>
              <td>
                <button
                  className="btn btn-outline-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#clearCart"
                >
                  Clear Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Modal />
      </div>
    </section>
  );
};

export default Cart;
