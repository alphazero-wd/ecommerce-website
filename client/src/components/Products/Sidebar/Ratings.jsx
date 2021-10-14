const Ratings = ({ nbStars, onChange, queries }) => {
  return (
    <div className="form-check my-2 d-flex align-items-center">
      <input
        className="form-check-input"
        value={nbStars}
        type="radio"
        name="stars"
        onChange={onChange}
        checked={parseInt(queries.stars) === nbStars && true}
      />
      <label className="form-check-label ms-2 ">
        <span className="d-flex align-items-center">
          <i className="bi bi-star-fill text-warning me-2"></i>
          <span className="text-warning fs-5 fw-bold">{nbStars} </span>
        </span>
      </label>
    </div>
  );
};

export default Ratings;
