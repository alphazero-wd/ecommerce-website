import Field from './Field';
import PriceRange from './PriceRange';
import Ratings from './Ratings';
import Sort from './Sort';
import FeaturedCheck from './FeaturedCheck';
import SearchForm from './SearchForm';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Sidebar = ({ onChange }) => {
  const { apiInfo } = useSelector((state) => state.products);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="mb-5 mb-lg-0 col-lg-4">
      <SearchForm onChange={onChange} />
      <Field
        field="categories"
        prop="category"
        apiInfo={apiInfo}
        onChange={onChange}
      />
      <Field
        field="brands"
        prop="brand"
        apiInfo={apiInfo}
        onChange={onChange}
      />
      <div className="my-3">
        <h5>Ratings</h5>
        <Ratings apiInfo={apiInfo} nbStars={1} onChange={onChange} />
        <Ratings apiInfo={apiInfo} nbStars={2} onChange={onChange} />
        <Ratings apiInfo={apiInfo} nbStars={3} onChange={onChange} />
        <Ratings apiInfo={apiInfo} nbStars={4} onChange={onChange} />
        <Ratings apiInfo={apiInfo} nbStars={5} onChange={onChange} />
      </div>
      <Sort onChange={onChange} />
      <PriceRange apiInfo={apiInfo} onChange={onChange} />
      <FeaturedCheck onChange={onChange} />
    </form>
  );
};

export default Sidebar;
