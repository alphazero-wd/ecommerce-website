import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import { useState } from 'react';
import { useEffect } from 'react';
const App = () => {
  const [urlQueries, setUrlQueries] = useState('');
  const [queries, setQueries] = useState({
    name: '', // name=pc
    category: '', // category=Macbook
    sort: '',
    page: '',
    brand: '',
    featured: false,
    exp: '',
  });

  // urlQueries = ''
  // what's in urlQueries -> key=value&
  // key: 'name', 'category', 'sort' etc.
  // value: 'pc', 'Macbook', 'name' etc
  // => dispatch(getProducts(urlQueries))

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/products/:id" exact component={ProductPage} />
        <Route path="/products" exact render={() => <ProductsPage />} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
