import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingCart from './components/FloatingCart';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart';
import {Products} from './Pages/Product/Product';
import {ProductShocase} from './Pages/Product/ProductShocase';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <FloatingCart />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/produits" component={Products} />
          <Route exact path="/produits/:id" component={ProductShocase} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
