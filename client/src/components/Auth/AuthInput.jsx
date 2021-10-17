const AuthInput = ({ name, placeholder, type, label, onChange }) => {
  return (
    <div className="form-floating mb-3">
      <input
        onChange={onChange}
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
