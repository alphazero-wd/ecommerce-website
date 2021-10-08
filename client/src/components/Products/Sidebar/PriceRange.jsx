const PriceRange = ({ apiInfo }) => {
  return (
    <div className="my-3 d-flex gap-3 justify-content-between align-items-center">
      <label className="form-label">Price: </label>
      <input
        type="range"
        className="form-range"
        min={apiInfo?.minPrice}
        max={apiInfo?.maxPrice}
        name="price"
      />
    </div>
  );
};

export default PriceRange;
