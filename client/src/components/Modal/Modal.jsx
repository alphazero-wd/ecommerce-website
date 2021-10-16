import { useDispatch } from 'react-redux';
import { clearCart } from '../../reducers/cart';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal fade " id="clearCart">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="clearCartLabel">
              Delete Confirmation
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to clear your cart?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              onClick={() => dispatch(clearCart())}
              className="btn btn-outline-dark"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
