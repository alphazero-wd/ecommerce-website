const FeaturedCheck = ({ onChange }) => {
  return (
    <div className="form-check my-3">
      <input
        className="form-check-input"
        name="featured"
        onChange={onChange}
        type="checkbox"
      />
      <label className="form-check-label">Featured</label>
    </div>
  );
};

export default FeaturedCheck;
