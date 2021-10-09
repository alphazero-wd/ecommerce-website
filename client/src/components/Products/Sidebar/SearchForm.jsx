const SearchForm = ({ onChange }) => {
  return (
    <div className="input-group my-3">
      <input
        type="text"
        name="searchValue"
        className="form-control w-50"
        placeholder="Search for something..."
        onChange={onChange}
      />
      <button className="btn btn-dark" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchForm;
