import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import MoviePage from './components/moviePage';
import {MasterProvider} from './components/masterContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <MasterProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie" component={MoviePage} />
          </Switch>
        </div>
      </Router>
    </MasterProvider>
  );
}

export default App;
