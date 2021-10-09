const Testimonials = () => {
  return (
    <section className="my-5">
      <div className="container">
        <h2 className="text-center mb-5">
          What customers say about our products
        </h2>
        <div
          id="carouselExampleControls"
          className="carousel slide p-5 mx-auto bg-danger bg-opacity-25"
          data-bs-ride="carousel"
          style={{ maxWidth: '800px' }}
        >
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                rem omnis cupiditate aliquam. Autem, voluptas. Sit quis
                doloribus deleniti adipisci?
              </p>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
            </div>
            <div className="carousel-item">
              <h3>Jane Doe</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                rem omnis cupiditate aliquam. Autem, voluptas. Sit quis
                doloribus deleniti adipisci?
              </p>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
            </div>
            <div className="carousel-item">
              <h2>Dan Star</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                rem omnis cupiditate aliquam. Autem, voluptas. Sit quis
                doloribus deleniti adipisci?
              </p>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <i className="bi bi-star-fill me-2 text-warning"></i>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
