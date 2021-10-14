import { paginate } from '../../../utils/utils';

const pages = paginate();
const Pagination = ({ currentPage, togglePages }) => {
  return (
    <ul className="pagination justify-content-center my-5">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button className="page-link prev-page" onClick={togglePages}>
          <i className="bi bi-chevron-left fs-6"></i>
        </button>
      </li>
      {pages.map((page, index) => (
        <li
          className={`page-item ${currentPage === page ? 'active' : ''}`}
          key={index}
        >
          <button className="page-link" onClick={togglePages}>
            {page}
          </button>
        </li>
      ))}
      <li
        className={`page-item ${
          currentPage === pages.length ? 'disabled' : ''
        }`}
      >
        <button className="page-link next-page" onClick={togglePages}>
          <i className="bi bi-chevron-right fs-6"></i>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
