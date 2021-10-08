import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Features from '../components/Home/Main/Features';
import Hero from '../components/Home/Main/Hero';
import Questions from '../components/Home/Main/Questions';
import Testimonials from '../components/Home/Main/Testimonials';
import Products from '../components/Home/Main/Products';
import { getProducts } from '../reducers/products';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts('featured=true&limit=9'));
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Questions />
    </>
  );
};

export default Home;
