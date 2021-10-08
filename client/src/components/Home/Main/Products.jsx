import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';
const Products = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <section className="my-5 bg-white py-5 px-5">
      <div className="container-lg">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row justify-content-center gap-4">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/products" className="btn btn-dark mt-5">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
