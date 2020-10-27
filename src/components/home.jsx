import React from 'react';
import Row from './row';
import requests from './requests';
import Banner from './banner';
function Home() {
  return (
    <div className="Home">
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

export default Home;
