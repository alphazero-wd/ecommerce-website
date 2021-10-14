const Sort = ({ onChange }) => {
  return (
    <div className="form-floating my-3">
      <select className="form-select" name="sort" onChange={onChange}>
        <option value="name">Name (A - Z)</option>
        <option value="price">Price (Lowest - Highest)</option>
        <option value="-name">Name (Z - A)</option>
        <option value="-price">Price (Highest - Lowest)</option>
      </select>
      <label>Sort By</label>
    </div>
  );
};

export default Sort;
