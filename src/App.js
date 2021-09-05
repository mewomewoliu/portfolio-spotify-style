import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from './Views/Portfolio/Portfolio';
import Passion from './Views/Passion/Passion'
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Musicmash from './Views/Casestudies/Musicmash';


function App() {
  return (
    <div className="app">

      <Router>
      <div>
        
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            
          <Route path="/projects">
            <Portfolio/>
            </Route>

            <Route path="/passion">
            <Passion/>
            </Route>

            <Route path="/about">
            <About/>
            </Route>

            <Route path="/musicmash">
            <Musicmash/>
          </Route>
          
        </Switch>
      </div>
    </Router>

      
    </div>
  );
}

export default App;

