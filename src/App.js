import React from 'react';
import './App.css';
import Row from './components/row.js';
import requests from './components/requests.js';
import Banner from './components/banner.js';
import Navbar from './components/navbar.js';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner url = {requests.fetchEnglishSeries}/>
        <Row title="English Series" url = {requests.fetchEnglishSeries} isLarge/>
        <Row title="Horror Movies" url = {requests.fetchHorror} />
        <Row title="Action Movies" url = {requests.fetchAction} />
        <Row title="Sci-fi Movies" url = {requests.fetchScifi} />
        <Row title="Romantic Movies" url = {requests.fetchRomantic} />
        <Row title="Hindi Series" url = {requests.fetchHindiSeries} />
        <Row title="Others" url = {requests.fetchOthers} />
        
    </div>
  );
}

export default App;
