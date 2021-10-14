const Field = ({ field, name, onChange, fields }) => {
  return (
    <div className="my-3">
      <div className="form-floating">
        <select className="form-select" name={name} onChange={onChange}>
          {fields[field] &&
            fields[field].map((value, index) => (
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
