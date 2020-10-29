import React,{useEffect, useContext} from 'react';
import Row from './row';
import requests from './requests';
import {Redirect} from 'react-router-dom';
import Banner from './banner';
import Navbar from './navbar';
import '../static/Home.css'
import {LoginContext} from './loginContext';
function Home() {
  const[token,setToken] = useContext(LoginContext);

  // useEffect(() => {
  //   let jwt = localStorage.getItem('token');
  //   if(jwt){
  //     setToken(jwt);
  //   }
  // })

  return (
    <div className="Home">
        {/* {localStorage.getItem('token') ? */}
        <React.Fragment>
          <Navbar/>
          <Banner url = {requests.fetchHorror}/>
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
