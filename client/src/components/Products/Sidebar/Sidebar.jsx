const Sidebar = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="mb-5 mb-lg-0 col-lg-4">
      <div className="input-group">
        <input
          type="text"
          name="searchValue"
          className="form-control"
          placeholder="Search for something..."
        />
        <button className="btn btn-dark" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Sidebar;
