import './App.css';
import Catalogue from './components/Catalogue.jsx'
import { Route } from "react-router-dom";
import Cart from './components/Cart.jsx';
import NavBar from './components/NavBar.jsx';
import Landing from './components/Landing';
import Detail from './components/Detail';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Route path={['/catalogue','/cart', '/detail/:id', '/checkout']} component={NavBar}></Route>
      <Route exact path='/catalogue' component={Catalogue}></Route>
      <Route exact path='/cart' component={Cart}></Route>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/detail/:id' component={Detail}></Route>
      <Route exact path='/checkout' component={Checkout}></Route>
    </div>
  );
}

export default App;
