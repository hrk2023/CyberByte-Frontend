import React, {useContext, useEffect, useState} from 'react';
import '../static/moviePage.css';
import Navbar from './navbar';
import Episodes from './episodes';
import requests from './requests';
import {Link,Redirect} from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';
import {GoPlus} from 'react-icons/go';
import {MasterContext} from './masterContext';
import {PlayerContext} from './videoPlayerContext';

const SeriesPage = () => {
    const [currentMovie, setCurrentMovie] = useContext(MasterContext);
    const [url,setUrl] = useContext(PlayerContext);
    const [Season, setSeason] = useState(0);
    const[episodes,setEpisodes] = useState([]);

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    // useEffect(() => {
    //     function episodeGetter(url){
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('GET',url,true);
    //         xhr.responseType = 'json';
    //         xhr.addEventListener('load',() => {
    //             if(xhr.status === 200){
    //                 setEpisodes(xhr.response.result);
    //             }
    //         });
    //         xhr.send();
    //     }
    //     if(currentMovie !== null){
    //         let el = document.querySelector('#seasonValue').value;
    //         console.log(el);
    //         const arr = el.split(" ");
    //         let url = `${requests.fetchEpisodes}/${arr[0]}/${arr[2]}`;
    //         episodeGetter(url);
    //     }
    // }, [Season])


    const SeasonFormatter = seasonName => {
        seasonName = String(seasonName);
        const arr = seasonName.split(" ");
        return `${arr[arr.length-2]} ${arr[arr.length-1]}`;
    }

    useEffect(() => {
        if(currentMovie !== null){
            let el = document.querySelector('#seasonValue').value;
            const arr = el.split(" ");
            setSeason(parseInt(arr[arr.length-1] - 1));
        }
    },[])
    const SeasonValue = () => {
        let el = document.querySelector('#seasonValue').value;
        const arr = el.split(" ");
        setSeason(parseInt(arr[arr.length - 1] - 1));
    }
    return(
        <React.Fragment>
            {console.log(Season)};
            { currentMovie === null &&
            <Redirect to="/"/>
            }
            <Navbar/>
            { currentMovie !== null &&
            <div className="movie-wrapper">
                <div className="movie-des">
                    <p className="movie-title">
                        {currentMovie.title}
                    </p>
                    
                    <div className="movie-stats">
                        <div className="series-inner-wrapper">   
                            <p className="season-dropdown">
                                <select className="season-dropdown-inner"
                                onChange={() => SeasonValue()}
                                id="seasonValue"
                                >
                                    {currentMovie.season_collection.map(season => (
                                        <React.Fragment>
                                        {console.log(season.season_name)}
                                        <option value={season.season_name} className="season-list">{season.season_name}</option>
                                        </React.Fragment>
                                    ))}
                                </select>
                            </p>
                            <p className="release-year">
                                {currentMovie.Year}
                            </p>
                            <p className="stats-wrapper">
                                <img className="logo" src={require('../static/imdb.png')} alt="imdb-logo" />
                                <img className="star" src={require('../static/icons8-star-48.png')} alt="imdb-star" />
                                <p className='vote'>{currentMovie.imdbRating}</p>
                            </p>
                        </div>
                    </div>
                    <div className="movie-overview">
                        {currentMovie.overview}
                    </div>
                    <div className="buttons">
                        <Link to="/player">
                            <span className="btn-1">
                                <BsFillCaretRightFill 
                                className="inner-btn-1" 
                                onClick={() => setUrl(currentMovie.mega_link)} />
                                {`Play, Season ${Season + 1} Episode 1`}
                            </span>
                        </Link>
                        <button className="btn btn-2"><GoPlus className="inner-btn-2"/>Add To Watchlist</button>
                    </div>
                    <div className="production">
                        <div className="directors">
                            Directors :     <span className="inner-details">{currentMovie.Director}</span>
                        </div>
                        <div className="starring">
                            Starring :      <span className="inner-details">{currentMovie.Actors}</span>
                        </div>
                        <div className="genres">
                            Genres :        <span className="inner-details">{currentMovie.Genre}</span>
                        </div>
                        <div className="language">
                            Language :      <span className="inner-details">{currentMovie.Language}</span>
                        </div>
                    </div>
                </div>
                <div className="movie-poster-wrapper">
                    <img src={currentMovie.poster_path} className="movie-poster" />
                </div>
            </div>
            }
            {currentMovie !== null && currentMovie.season_collection.length !== 0 &&
            <div className="season-details-wrapper">
                <div className="episode-bar-wrapper">
                    <div className="episode-bar-content">
                        Episodes
                    </div>
                </div>
                <div className="episodes-wrapper">
                    {console.log(Season)}
                    <Episodes episodes = {currentMovie.season_collection[Season].episodes} />
                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default SeriesPage;