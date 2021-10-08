import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <ul className="pagination justify-content-center my-5">
      <li className="page-item disabled">
        <Link to="/products" className="page-link">
          <i className="bi bi-chevron-left fs-6"></i>
        </Link>
      </li>
      <li className="page-item">
        <Link to="/products" className="page-link">
          1
        </Link>
      </li>
      <li className="page-item">
        <Link to="/products" className="page-link">
          <i className="bi bi-chevron-right fs-6"></i>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
