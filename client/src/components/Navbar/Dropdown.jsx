import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/user';

const Dropdown = ({ name, imageUrl, email }) => {
  const dispatch = useDispatch();
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {imageUrl ? (
          <img src={imageUrl} className="nav-profile" alt={name} />
        ) : (
          <div className="nav-profile">{name.charAt(0)}</div>
        )}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <div className="fs-5 dropdown-item" type="button">
            {name}
          </div>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            {email}
          </button>
        </li>
        <hr />
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => dispatch(logout())}
          >
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
