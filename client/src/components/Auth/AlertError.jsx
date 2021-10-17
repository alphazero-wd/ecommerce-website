import { useSelector } from "react-redux";

const AlertError = () => {
  const { error } = useSelector(state => state.user);
  return <div className="alert alert-danger my-3">{error}</div>;
};

export default AlertError;
