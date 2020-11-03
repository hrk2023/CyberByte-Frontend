import React, {useEffect} from 'react';
import Row from './row';
import requests from './requests';
import Banner from './banner';
import Navbar from './navbar';
import '../static/Home.css'
function Home() {
  useEffect(() => {
      window.scrollTo(0,0);
  },[])
  return (
    <div className="Home">
        <React.Fragment>
          <Navbar/>
          <Banner url = {requests.fetchScifi}/>
          <Row title="Latest Series" url = {requests.fetchSeries} isLarge/>
          <Row title="Horror Movies" url = {requests.fetchHorror} />
          <Row title="Action Movies" url = {requests.fetchAction} />
          <Row title="Sci-fi Movies" url = {requests.fetchScifi} />
          <Row title="Romantic Movies" url = {requests.fetchRomantic} />
          <Row title="Others" url = {requests.fetchOthers} />
        </React.Fragment>
        {/* :
        <Redirect to="/login"/>
        } */}
    </div>
  );
}

export default Home;
