import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import { useEffect, useState } from 'react';
const App = () => {
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPos]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/products/:id" exact component={ProductPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/auth" exact component={Auth} />
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
