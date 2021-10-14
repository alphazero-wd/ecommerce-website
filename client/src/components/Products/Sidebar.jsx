import Field from './Sidebar/Field';
import PriceRange from './Sidebar/PriceRange';
import Ratings from './Sidebar/Ratings';
import Sort from './Sidebar/Sort';
import FeaturedCheck from './Sidebar/FeaturedCheck';
import SearchForm from './Sidebar/SearchForm';
import { getStars } from '../../utils/utils';
const stars = getStars();

const Sidebar = ({ onChange, queries }) => {
  const fields = {
    categories: ['All', 'iPhone', 'Android', 'PC', 'Macbook'],
    brands: ['All', 'Apple', 'Samsung', 'Microsoft'],
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="mb-5 mb-lg-0 col-lg-4">
      <SearchForm onChange={onChange} />
      <Field
        fields={fields}
        field="categories"
        name="category"
        onChange={onChange}
      />
      <Field fields={fields} field="brands" name="brand" onChange={onChange} />
      <div className="my-3">
        <h5>Ratings</h5>
        {stars.map((star, index) => (
          <Ratings
            key={index}
            nbStars={star}
            queries={queries}
            onChange={onChange}
          />
        ))}
      </div>
      <Sort onChange={onChange} />
      <PriceRange onChange={onChange} queries={queries} />
      <FeaturedCheck onChange={onChange} />
    </form>
  );
};

export default Sidebar;
