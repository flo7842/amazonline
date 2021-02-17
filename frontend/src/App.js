import react from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreeen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <div className="grid-container">
          <header className="row">
              <div>
                  <a className="brand" href="index.html">amazona</a>
              </div>
              <div>
                  <a href="/cart/">Cart</a>
                  <a href="/signin/">Sign In</a>
              </div>
          </header>
          <main>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreeen} exact></Route>
            
              
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
