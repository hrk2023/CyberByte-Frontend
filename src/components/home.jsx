import React, {useEffect} from 'react';
import Row from './row';
import requests from './requests';
import Banner from './banner';
import Navbar from './navbar';
import '../static/css/Home.css'
function Home() {
  useEffect(() => {
      window.scrollTo(0,0);
  },[])
  return (
    <div className="Home">
        <React.Fragment>
          <Navbar/>
          <Banner/>
          <Row title="Data Structures" url = {requests.fetchSeries} isLarge/>
          <Row title="Algorithm" url = {requests.fetchHorror} />
          <Row title="Productivity" url = {requests.fetchAction} />
          <Row title="Miscellaneous" url = {requests.fetchScifi} />
        </React.Fragment>
        {/* :
        <Redirect to="/login"/>
        } */}
    </div>
  );
}

export default Home;
