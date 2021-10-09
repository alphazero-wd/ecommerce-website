const Field = ({ apiInfo, field, prop, onChange }) => {
  return (
    <div className="my-3">
      <div className="form-floating">
        <select className="form-select" name={prop} onChange={onChange}>
          {apiInfo[field] &&
            apiInfo[field].map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
        </select>
        <label className="text-capitalize">{field}</label>
      </div>
    </div>
  );
};

export default Field;
