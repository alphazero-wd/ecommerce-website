const Loading = () => {
  return (
    <div
      className="spinner-grow d-flex justify-content-center"
      style={{ width: '3rem', height: '3rem' }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
