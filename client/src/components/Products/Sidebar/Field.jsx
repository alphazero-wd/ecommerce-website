const Category = ({ apiInfo, field }) => {
  return (
    <div className="my-3">
      <div className="form-floating">
        <select className="form-select" id="brand" name="brand">
          {apiInfo[field] &&
            apiInfo[field].map((brand, index) => (
              <option value={brand} key={index}>
                {brand}
              </option>
            ))}
        </select>
        <label htmlFor="brand" className="text-capitalize">
          {field}
        </label>
      </div>
    </div>
  );
};

export default Category;
