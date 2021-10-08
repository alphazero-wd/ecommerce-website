import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../reducers/product';
import Loading from '../components/Loading/Loading';

const ProductPage = () => {
  const { id } = useParams();
  const {
    product: { product },
    loading,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProductById(id)), [id, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img
              src={product?.image}
              className="img-fluid"
              alt={product?.name}
            />
          </div>
          <div className="col-lg-7 mt-3 mt-lg-0">
            <h4>{product?.name}</h4>
            <div className="row">
              <div className="col-md-6">
                <div
                  className={`d-inline-block px-3 py-2 rounded-pill my-2 text-${
                    product?.availability_quantity > 0 ? 'success' : 'danger'
                  } bg-opacity-25 bg-${
                    product?.availability_quantity > 0 ? 'success' : 'danger'
                  }`}
                >
                  {product?.availability_quantity > 0
                    ? `${product?.availability_quantity} In Stock`
                    : 'Out of Stock'}
                </div>
                <div className="col-md-6 d-inline-block ms-3 text-warning">
                  <i className="bi bi-star-fill fs-5 me-2"></i>
                  <h5 className="d-inline">{product?.stars}</h5>
                </div>
              </div>
            </div>
            <h5 className="text-secondary lead">Brand: {product?.brand}</h5>
            <h6 className="text-info">Category: {product?.category}</h6>
            <p>{product?.description}</p>
            <Link to="/products" className="btn btn-outline-dark me-3">
              View Products
            </Link>
            {product?.availability_quantity > 0 && (
              <button className="btn btn-dark">Add To Cart</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
