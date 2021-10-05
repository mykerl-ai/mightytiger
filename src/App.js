import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Market from './components/Market';
import Wallet from './components/Wallet';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (

    <Router>
    <div className="App">
      <Navbar />

      <div className="content">
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>

          <Route path="/gallery"> 
            <Gallery />
          </Route>

          <Route path="/market"> 
            <Market />
          </Route>

          <Route path="/wallet"> 
            <Wallet />
          </Route>

        </Switch>
      
      </div>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
