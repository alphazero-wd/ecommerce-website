const Pagination = ({ apiInfo }) => {
  const pages = [];
  const paginate = () => {
    for (let i = 1; i <= apiInfo?.nbPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <ul className="pagination justify-content-center my-5">
      <li className="page-item disabled">
        <button className="page-link">
          <i className="bi bi-chevron-left fs-6"></i>
        </button>
      </li>
      {paginate().map((page, index) => (
        <li className="page-item" key={index}>
          <button className="page-link">{page}</button>
        </li>
      ))}
      <li className="page-item">
        <button className="page-link">
          <i className="bi bi-chevron-right fs-6"></i>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
