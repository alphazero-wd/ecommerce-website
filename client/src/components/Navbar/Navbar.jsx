import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
const Navbar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const { totalQuantity } = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [location]);

  return (
    <nav className="navbar navbar-expand-md navbar-light shadow-sm px-lg-5 px-3 py-3">
      <div className="container-fluid">
        <div>
          <Link to="/" className="navbar-brand logo text-uppercase">
            <span className="fw-bold">Tech</span>Market
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-menu"
          aria-controls="nav-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav-menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === '/' ? 'active' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/about' ? 'active' : ''
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className={`nav-link ${
                  location.pathname === '/products' ? 'active' : ''
                }`}
              >
                Products
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/cart" className="position-relative text-black">
              <i className="bi bi-cart3 fs-5"></i>
              <div className="cart-value position-absolute bg-dark text-white rounded-circle">
                {totalQuantity}
              </div>
            </Link>
            {user ? (
              <Dropdown {...user} />
            ) : (
              <Link to="/auth" className="btn">
                <i className="bi bi-person fs-4"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
