import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../components/Products/Pagination/Pagination';
import Product from '../components/Product/Product';
import Sidebar from '../components/Products/Sidebar/Sidebar';
import { getApiInfo, getProducts } from '../reducers/products';
import Loading from '../components/Loading/Loading';
const ProductsPage = () => {
  const { products, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiInfo());
  }, [dispatch]);

  useEffect(() => {
    if (queries.name) queryApi('name', queries.name);
    if (queries.category !== 'All') queryApi('category', queries.category);
    if (queries.brand !== 'All') queryApi('brand', queries.brand);
    queryApi('featured', queries.featured);
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
        <div className="d-lg-flex gap-3 justify-content-center">
          <Sidebar onChange={onChange} />
          <div className="row justify-content-center">
            {products.map((product) => (
              <Product key={product._id} {...product} />
            ))}
            <Pagination currentPage={currentPage} togglePages={togglePages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
