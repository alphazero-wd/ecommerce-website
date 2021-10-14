import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import noProductsImg from '../images/no-products.svg';
import Pagination from '../components/Products/Pagination/Pagination';
import Product from '../components/Product/Product';
import Sidebar from '../components/Products/Sidebar';
import Loading from '../components/Loading/Loading';
import { getProducts } from '../reducers/products';

const ProductsPage = () => {
  const { products, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  let urlQueries = '';
  let numericExp = 'exp=';
  const [queries, setQueries] = useState({
    price: '0',
    name: '',
    category: 'All',
    brand: 'All',
    featured: false,
    sort: 'name',
    stars: '1',
  });
  const queryApi = (key, value) => {
    if (key) urlQueries += `${key}=${value}&`;
  };

  const togglePages = (e) => {
    const { currentTarget } = e;
    const page = currentTarget.textContent;
    setCurrentPage((oldPage) => {
      if (currentTarget.classList.contains('prev-page')) oldPage = oldPage - 1;
      else if (currentTarget.classList.contains('next-page'))
        oldPage = oldPage + 1;
      else oldPage = parseInt(page);
      return oldPage;
    });
  };

  const numericFilter = (key) => {
    if (key === 'price' || key === 'stars')
      numericExp += `${key}>=${queries[key]},`;
  };

  const onChange = (e) => {
    setQueries({
      ...queries,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  useEffect(() => {
    if (queries.name) queryApi('name', queries.name);
    if (queries.category !== 'All') queryApi('category', queries.category);
    if (queries.brand !== 'All') queryApi('brand', queries.brand);
    if (queries.featured) queryApi('featured', queries.featured);
    queryApi('sort', queries.sort);
    queryApi('page', currentPage);
    if (queries.price) numericFilter('price');
    if (queries.stars) numericFilter('stars');

    dispatch(getProducts(urlQueries + numericExp));
  }, [dispatch, queries, currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="my-5 px-3">
      <div className="container">
        <div
          className={`d-lg-flex gap-3 justify-content-center ${
            products.length === 0 ? 'align-items-center' : ''
          }`}
        >
          <Sidebar onChange={onChange} queries={queries} />
          {products.length === 0 ? (
            <div className="text-center">
              <img
                src={noProductsImg}
                className="img-fluid w-50"
                alt="No Products Found"
              />
              <h4 className="text-secondary my-5">No Products Found.</h4>
            </div>
          ) : (
            <div className="row justify-content-center">
              {products.map((product) => (
                <Product key={product._id} {...product} />
              ))}
            </div>
          )}
        </div>
        <Pagination currentPage={currentPage} togglePages={togglePages} />
      </div>
    </section>
  );
};

export default ProductsPage;
