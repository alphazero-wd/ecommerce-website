import { useSelector } from 'react-redux';

const Pagination = ({ currentPage, togglePages }) => {
  const { apiInfo } = useSelector((state) => state.products);
  const pages = [];
  const paginate = () => {
    for (let i = 1; i <= apiInfo?.nbPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <ul className="pagination justify-content-center my-5">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button className="page-link prev-page" onClick={togglePages}>
          <i className="bi bi-chevron-left fs-6"></i>
        </button>
      </li>
      {paginate().map((page, index) => (
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
          currentPage === apiInfo?.nbPages ? 'disabled' : ''
        }`}
      >
        <button
          className="page-link next-page"
          disabled={currentPage === apiInfo?.nbPages && true}
          onClick={togglePages}
        >
          <i className="bi bi-chevron-right fs-6"></i>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
