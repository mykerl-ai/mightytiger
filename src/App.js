import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
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
        </Switch>
      
      </div>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
