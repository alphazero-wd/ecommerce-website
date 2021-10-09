const Features = () => {
  return (
    <section className="my-5 px-3">
      <div className="container-lg">
        <div className="row text-center gap-4 row-cols-1 row-cols-sm-3 row-cols-md-4 justify-content-center">
          <div className="col p-3 shadow-sm rounded-lg bg-white">
            <i className="bi bi-truck fs-3 mb-3"></i>
            <h5 className="fw-semibold">Worldwide Delivery</h5>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              iste quam incidunt voluptate obcaecati facilis?
            </p>
          </div>
          <div className="col p-3 shadow-sm rounded-lg bg-white">
            <i className="bi bi-shield-lock fs-3 mb-3"></i>
            <h5 className="fw-semibold">Secure Payment</h5>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              iste quam incidunt voluptate obcaecati facilis?
            </p>
          </div>
          <div className="col p-3 shadow-sm rounded-lg bg-white">
            <i className="bi bi-arrow-counterclockwise fs-3 mb-3"></i>
            <h5 className="fw-semibold">Refund Within 30 Days</h5>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              iste quam incidunt voluptate obcaecati facilis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
