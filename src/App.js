import React from 'react';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import MoviePage from './components/moviePage';
import SeriesPage from './components/seriesPage';
import {LoginProvider} from './components/loginContext';
import {MasterProvider} from './components/masterContext';
import {VideoPlayerContext} from './components/videoPlayerContext';
import {Player} from './components/videoPlayer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/topic" component={MoviePage} />
          <Route path="/player" component={Player} />
        </Switch>
      </div>
    </Router>
                                 
  );
}

export default App;
