const PriceRange = ({ onChange, queries }) => {
  return (
    <div className="my-3 d-flex gap-3 justify-content-between align-items-center">
      <label className="form-label">Price: ${queries.price}</label>
      <input
        type="range"
        className="form-range"
        min={0}
        max={1500}
        step={100}
        name="price"
        onChange={onChange}
      />
    </div>
  );
};

export default PriceRange;
