import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import Product from '../components/Product/Product';
import Sidebar from '../components/Products/Sidebar/Sidebar';
import { getApiInfo } from '../reducers/products';
const ProductsPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiInfo('/info'));
  }, []);
  return (
    <section className="my-5 px-3">
      <div className="container ">
        <div className="d-flex justify-content-between">
          <Sidebar />
          <div className="row gap-4 justify-content-center">
            {products.map((product) => (
              <Product key={product._id} {...product} />
            ))}
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
