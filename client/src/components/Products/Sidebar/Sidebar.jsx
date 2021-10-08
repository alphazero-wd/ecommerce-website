import Field from './Field';
import PriceRange from './PriceRange';
import Ratings from './Ratings';
import Sort from './Sort';
import FeaturedCheck from './FeaturedCheck';
import SearchForm from './SearchForm';
const Sidebar = ({ apiInfo }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="mb-5 mb-lg-0 col-lg-4">
      <SearchForm />
      <Field field="categories" apiInfo={apiInfo} />
      <Field field="brands" apiInfo={apiInfo} />
      <div className="my-3">
        <h5>Ratings</h5>
        <Ratings apiInfo={apiInfo} nbStars={1} />
        <Ratings apiInfo={apiInfo} nbStars={2} />
        <Ratings apiInfo={apiInfo} nbStars={3} />
        <Ratings apiInfo={apiInfo} nbStars={4} />
        <Ratings apiInfo={apiInfo} nbStars={5} />
      </div>
      <Sort />
      <PriceRange apiInfo={apiInfo} />
      <FeaturedCheck />
    </form>
  );
};

export default Sidebar;
