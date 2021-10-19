import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, updateProduct } from '../reducers/product';
import Loading from '../components/Loading/Loading';
import { addToCart, updateQuantity } from '../reducers/cart';

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const addCartItem = (id) => {
    const inCartItem = cart.find((item) => item._id === id);

    if (!inCartItem) {
      dispatch(addToCart(product));
    } else {
      if (inCartItem.quantity < inCartItem.availability_quantity) {
        dispatch(
          updateQuantity({
            ...product,
            quantity: product.quantity + inCartItem.quantity,
          })
        );
      }
    }
  };

  useEffect(() => dispatch(getProductById(id)), [id, dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img src={product.image} className="img-fluid" alt={product.name} />
          </div>
          <div className="col-lg-5 mt-3 mt-lg-0">
            <h4>{product.name}</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-6 text-warning">
                  <i className="bi bi-star-fill fs-5 me-2"></i>
                  <h5 className="d-inline">{product.stars}</h5>
                </div>
              </div>
            </div>
            <h5 className="text-secondary lead">Brand: {product.brand}</h5>
            <h6 className="text-info">Category: {product.category}</h6>
            <p>{product.description}</p>
            <Link to="/products" className="btn btn-outline-dark me-3">
              View Products
            </Link>
          </div>
          <div className="col-lg-3 mt-3 mt-lg-0">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Price:{' '}
                <span>${(product.price * product.quantity).toFixed(2)}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Status:{' '}
                <span>
                  {product.availability_quantity > 0
                    ? `${product.availability_quantity} In Stock`
                    : 'Out Of Stock'}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Quantity:{' '}
                <div className="btn-group">
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      dispatch(
                        updateProduct({ quantity: product.quantity - 1 })
                      )
                    }
                    disabled={product.quantity === 1}
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                  <div className="btn btn-light">{product.quantity}</div>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      dispatch(
                        updateProduct({ quantity: product.quantity + 1 })
                      )
                    }
                    disabled={
                      cart?.some((item) => item._id === id)
                        ? product.quantity >=
                          product.availability_quantity -
                            cart?.find((item) => item._id === id)?.quantity
                        : product.quantity >= product.availability_quantity
                    }
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
              </li>
              <li className="list-group-item">
                <button
                  className="btn btn-dark text-uppercase w-100"
                  onClick={() => addCartItem(id)}
                  disabled={
                    (product.availability_quantity === 0 && true) ||
                    (cart?.some((item) => item._id === id)
                      ? product.quantity >
                        product.availability_quantity -
                          cart?.find((item) => item._id === id)?.quantity
                      : product.quantity > product.availability_quantity &&
                        true)
                  }
                >
                  Add To Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
