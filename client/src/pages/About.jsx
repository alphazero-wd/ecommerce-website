import { Link } from 'react-router-dom';
import aboutImg from '../images/about-img.webp';
const About = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <img src={aboutImg} className="img-fluid" alt="About" />
          </div>
          <div className="col-md mt-3 mt-lg-0">
            <h2 className="mb-3">About Our Company</h2>
            <p className="lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              error optio corporis sapiente debitis facere adipisci ullam, sed
              dolores pariatur veritatis animi aut dolore sit! Architecto illum
              natus odio, sit similique expedita in eum. Quidem quis dolorum
              incidunt sed labore nobis. Sunt tempora quaerat qui recusandae
              nemo repellat provident culpa vitae, perspiciatis cumque aliquam
              consequatur ratione dolores excepturi fugit ab!
            </p>
            <Link to="/" className="btn btn-dark">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
