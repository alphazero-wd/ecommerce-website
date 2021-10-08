const Sort = () => {
  return (
    <div className="form-floating my-3">
      <select className="form-select">
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <label>Sort By</label>
    </div>
  );
};

export default Sort;
