import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotal } from './reducers/cart';
import { getCart } from './reducers/cart';

const App = () => {
  const [scrollPos, setScrollPos] = useState(window.scrollY);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPos]);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => dispatch(updateTotal()), [cart]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/products/:id" exact component={ProductPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route
          path="/auth"
          exact
          render={() => (user ? <Redirect to="/" /> : <Auth />)}
        />
        <Route path="/cart" exact component={Cart} />
      </Switch>
      <Footer />
      {scrollPos > 100 && (
        <button className="to-top btn btn-success" onClick={scrollToTop}>
          <i className="bi bi-arrow-90deg-up"></i>
        </button>
      )}
    </Router>
  );
};

export default App;
