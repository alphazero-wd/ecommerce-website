import { Link } from "react-router-dom";
const Product = ({
  _id,
  name,
  image,
  category,
  brand,
  price,
  featured,
  stars,
}) => {
  return (
    <div className="col-md-4 bg-white p-3 shadow-sm rounded-lg">
      <div className="card" style={{ maxWidth: "20rem" }}>
        <img src={image} className="img-fluid card-img-top" alt={name} />
        <div className="card-body">
          <h5>{name}</h5>
          <h6 className="text-secondary">{category}</h6>
          <p className="text-info">{brand}</p>

          <div className="d-flex align-items-center my-2">
            <div
              className="lead me-3"
              style={{ textDecoration: featured ? "line-through" : "none" }}
            >
              ${price}
            </div>
            {featured && <div className="lead">${Math.round(price / 2)}</div>}
          </div>
          <div className="mb-3">
            <i className="bi bi-star-fill text-warning me-2 fs-5"></i>
            <h5 className="d-inline text-warning">{stars}</h5>
          </div>
          <Link to={`/products/${_id}`} className="btn btn-dark">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
