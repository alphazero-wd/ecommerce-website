const Questions = () => {
  return (
    <section className="my-5 px-3 py-5 bg-white">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h3 className="mb-5 text-center">Frequently Asked Questions (FAQ)</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How can I purchase my products
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora repellat beatae, necessitatibus quia aliquid accusamus
                  numquam. Facilis ea repudiandae possimus in mollitia totam
                  nihil voluptas qui, amet beatae voluptatum consectetur
                  adipisci porro corrupti non, culpa sunt cum tempora nostrum
                  exercitationem!
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How can I refund if I am not satisfied with the products?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus consequuntur nisi cumque eum fugiat perferendis
                  veritatis molestiae excepturi eos alias eligendi repellat
                  voluptates quaerat illo itaque velit delectus, totam in
                  inventore tempora expedita nesciunt? Suscipit perspiciatis
                  numquam ipsam quis excepturi.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How do I make a payment through Credit Cards and PayPal?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  labore eos quo inventore distinctio. Nihil sapiente fuga illum
                  laboriosam esse dicta enim quibusdam nesciunt alias eveniet
                  hic aliquid iste reprehenderit porro, maiores earum repellat
                  minus fugit corrupti. Velit, vitae modi?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
