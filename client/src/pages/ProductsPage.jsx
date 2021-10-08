import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../components/Products/Pagination/Pagination';
import Product from '../components/Product/Product';
import Sidebar from '../components/Products/Sidebar/Sidebar';
import { getApiInfo, getProducts } from '../reducers/products';
import Loading from '../components/Loading/Loading';
const ProductsPage = () => {
  const { products, apiInfo, loading } = useSelector((state) => state.products);
  const urlQueries = '';

  const [queries, setQueries] = useState({
    page: '1',
    name: '',
    category: '',
    brand: '',
    featured: false,
    stars: '',
    sort: '',
  });
  const onChange = (e) => {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts(''));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="my-5 px-3">
      <div className="container">
        <div className="d-lg-flex justify-content-center">
          <Sidebar apiInfo={apiInfo} />
          <div className="row gap-3 justify-content-center">
            {products.map((product) => (
              <Product key={product._id} {...product} />
            ))}
            <Pagination apiInfo={apiInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
