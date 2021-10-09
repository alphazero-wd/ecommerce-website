const Ratings = ({ nbStars, onChange }) => {
  const stars = [];
  const getStars = () => {
    for (let i = 1; i <= nbStars; i++) {
      stars.push(i);
    }
    return stars;
  };
  return (
    <div className="form-check my-2">
      <input
        className="form-check-input"
        value={nbStars}
        type="radio"
        name="stars"
        onChange={onChange}
      />
      <label className="form-check-label">
        {getStars().map((star) => (
          <i className="bi bi-star-fill text-warning" key={star}></i>
        ))}
      </label>
    </div>
  );
};

export default Ratings;
