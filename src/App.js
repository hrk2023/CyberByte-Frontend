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
    <LoginProvider>
      <MasterProvider>
        <VideoPlayerContext>
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movie" component={MoviePage} />
                <Route path="/series" component={SeriesPage}/>
                <Route path="/player" component={Player} />
                <Route path="/login" component={Login}/>
              </Switch>
            </div>
          </Router>
        </VideoPlayerContext>
      </MasterProvider> 
    </LoginProvider>                            
  );
}

export default App;
