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
import MusicMashVertical from './Views/Casestudies/UXResearch/MusicMashVertical';
import BEET from './Views/Casestudies/UXDesignSystem/BEET';
import BEETWeb from './Views/Casestudies/UXDesignSystem/BEETWeb';
import MusicMashWeb from './Views/Casestudies/UXDesignSystem/MusicMashWeb';
import COSEWeb from './Views/Casestudies/UXDesignSystem/COSEWeb';
import MagicWindow from './Views/Casestudies/UXResearch/MagicWindow';
import SignIn from './Views/Authentification/SignIn';



function App() {
  return (
    <div className="app">

      <Router>
      <div>
        
          <Switch>
          <Route path="/signin" component={SignIn}/>
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

            <Route path="/musicmash-app">
            <MusicMashVertical/>
            </Route>
            <Route path="/your-beet-app">
            <BEET/>
            </Route>
            <Route path="/your-beet-web">
            <BEETWeb/>
            </Route>
            <Route path="/musicmash-web">
            <MusicMashWeb/>
            </Route>
            <Route path="/cose-web">
            <COSEWeb/>
            </Route>
            <Route path="/magic-window">
            <MagicWindow/>
            </Route>
            
          
        </Switch>
      </div>
    </Router>

      
    </div>
  );
}

export default App;

