import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import Questions from "../components/Home/Questions";
import Testimonials from "../components/Home/Testimonials";
import Products from "../components/Home/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../reducers/products";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts("limit=9&featured=true"));
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
