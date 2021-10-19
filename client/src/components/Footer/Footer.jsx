import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-5">
      <div className="container ">
        <div className="row justify-content-center text-center align-items-center">
          <div className="col-sm-4 col-sm-3">
            <h6 className="fw-bold text-uppercase">Follow Us:</h6>
            <div>
              <Link
                to="https://www.facebook.com"
                className="text-white fs-4 me-3"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                to="https://www.twitter.com"
                className="text-white fs-4 me-3"
              >
                <i className="bi bi-twitter"></i>
              </Link>
              <Link
                to="https://www.instagram.com"
                className="text-white fs-4 me-3"
              >
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
          </div>
          <div className="col-sm-4 col-sm-3 my-5 my-sm-0">
            <h6 className="fw-bold d-block text-uppercase">About us</h6>
            <Link
              to="/"
              className="text-white text-decoration-none d-inline-block my-2"
            >
              Home
            </Link>
            <br />
            <Link
              to="/about"
              className="text-white text-decoration-none d-inline-block my-2"
            >
              About
            </Link>
            <br />
            <Link
              to="/products"
              className="text-white text-decoration-none d-inline-block my-2"
            >
              Products
            </Link>
          </div>
          <div className="col-sm-4 col-sm-3 text-sm-end">
            <div>
              <Link
                to="/"
                className="text-white text-decoration-none fs-5 logo text-uppercase"
              >
                <span className="fw-bold">Tech</span>Market
              </Link>
              <p className="mt-3">
                Copyright &copy; {new Date().getFullYear()}. All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
