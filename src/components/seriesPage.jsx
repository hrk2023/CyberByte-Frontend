import React, {useContext, useEffect, useState} from 'react';
import '../static/css/moviePage.css';
import Navbar from './navbar';
import Episodes from './episodes';
import {Link,Redirect} from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';
import {GoPlus} from 'react-icons/go';
import {MasterContext} from './masterContext';
import {PlayerContext} from './videoPlayerContext';

const SeriesPage = () => {
    const [currentMovie, setCurrentMovie] = useContext(MasterContext);
    const [url,setUrl] = useContext(PlayerContext);
    const [Season, setSeason] = useState(0);

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    useEffect(() => {
        if(currentMovie !== null){
            let el = document.querySelector('#seasonValue').value;
            const arr = el.split(" ");
            setSeason(parseInt(arr[arr.length-1] - 1));
        }
    },[currentMovie])
    const SeasonValue = () => {
        let el = document.querySelector('#seasonValue').value;
        const arr = el.split(" ");
        setSeason(parseInt(arr[arr.length - 1] - 1));
    }
    return(
        <React.Fragment>
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
                                        <option value={season.season_name} className="season-list">{season.season_name}</option>
                                    ))}
                                </select>
                            </p>
                            <p className="release-year">
                                {currentMovie.Year}
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
                                Play
                            </span>
                        </Link>
                        <button className="btn btn-2"><GoPlus className="inner-btn-2"/>Watchlist</button>
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
                    <img src={currentMovie.poster_path} className="movie-poster" alt="movie-poster"/>
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
                    <Episodes episodes = {currentMovie.season_collection[Season].episodes} />
                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default SeriesPage;