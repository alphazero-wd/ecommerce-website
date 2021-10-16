import { useDispatch } from 'react-redux';
import { deleteCartItem, updateQuantity } from '../../reducers/cart';
const CartItem = ({ _id, name, price, quantity, availability_quantity }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>
        <div className="btn-group">
          <button
            className="btn btn-secondary"
            onClick={() =>
              dispatch(updateQuantity({ _id, quantity: quantity - 1 }))
            }
            disabled={quantity === 1}
          >
            <i className="bi bi-dash"></i>
          </button>
          <div className="btn btn-light">{quantity}</div>
          <button
            className="btn btn-secondary"
            onClick={() =>
              dispatch(updateQuantity({ _id, quantity: quantity + 1 }))
            }
            disabled={availability_quantity === quantity}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </td>
      <td>${(price * quantity).toFixed(2)}</td>
      <td>
        <button
          className="btn btn-outline-dark"
          onClick={() => dispatch(deleteCartItem(_id))}
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
