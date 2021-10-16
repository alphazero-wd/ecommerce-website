const AuthInput = ({ name, placeholder, type, label }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default AuthInput;
