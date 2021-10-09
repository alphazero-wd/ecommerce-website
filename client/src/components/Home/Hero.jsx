import { Link } from "react-router-dom";
import illustrationImg from "../../images/illustration.svg";
const Hero = () => {
  return (
    <div className="my-4">
      <div className="container text-center text-lg-start d-lg-flex justify-content-center align-items-center ">
        <div className="left-hero">
          <h1>Digital Marketplace in the 21st century</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro
            possimus, eius debitis iste quis!
          </p>
          <Link to="/products" className="btn btn-info text-white btn-lg">
            View Products <i className="bi bi-arrow-right arrow-animate"></i>
          </Link>
        </div>
        <img
          src={illustrationImg}
          alt="Illustration"
          className="img-fluid hero-img my-5"
        />
      </div>
    </div>
  );
};

export default Hero;
