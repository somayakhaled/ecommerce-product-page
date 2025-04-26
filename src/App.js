import NavBar from './NavBar';
import Home from './Home';
import { CartProvider } from './CartContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/collections"> 
              <Home />
            </Route>

            <Route path="/men"> 
              <Men />
            </Route>

            <Route path="/women"> 
              <Women />
            </Route>

            <Route path="/about"> 
              <About />
            </Route>
          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
