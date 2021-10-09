const PriceRange = ({ apiInfo, onChange }) => {
  return (
    <div className="my-3 d-flex gap-3 justify-content-between align-items-center">
      <label className="form-label">Price: </label>
      <input
        type="range"
        className="form-range"
        min={apiInfo?.minPrice}
        max={apiInfo?.maxPrice}
        name="price"
        onChange={onChange}
      />
    </div>
  );
};

export default PriceRange;
