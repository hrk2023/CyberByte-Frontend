import React, {useContext, useEffect} from 'react';
import '../static/moviePage.css';
import Navbar from './navbar';
import {Link,Redirect} from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';
import {GoPlus} from 'react-icons/go';
import {MasterContext} from './masterContext';
import {PlayerContext} from './videoPlayerContext';
// http://www.omdbapi.com/?t=Captive+State
const MoviePage = () => {
    const [currentMovie, setCurrentMovie] = useContext(MasterContext);
    const [url,setUrl] = useContext(PlayerContext);
    const runtimeFormatter = (runtime) => {
        runtime = String(runtime);
        const arr = runtime.split(" ");
        runtime = parseInt(arr[0]);
        let quo = parseInt(runtime/60);
        let rem = runtime%60;
        return `${quo}h ${rem}min`;
    }
    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    return(
        <React.Fragment>
            { currentMovie === null &&
            <Redirect to="/"/>
            }
            <Navbar/>
            { currentMovie !== null &&
            <div className="movie-wrapper">
                {console.log(currentMovie)}
                <div className="movie-des">
                    <p className="movie-title">
                        {currentMovie.title}
                    </p>
                    
                    <div className="movie-stats">
                        <div className="inner-wrapper">   
                            {currentMovie.Metascore !== "N/A" && <p className="match">{currentMovie.Metascore}% match</p>}
                            <p className="runtime">
                                {runtimeFormatter(currentMovie.Runtime)}
                            </p>
                            <p className="release-year">
                                {currentMovie.Year}
                            </p>
                            <p className="stats-wrapper">
                                <img className="logo" src={require('../static/imdb.png')} alt="imdb-logo" />
                                <img className="star" src={require('../static/icons8-star-48.png')} alt="imdb-star" />
                                <p className='vote'>{currentMovie.imdbRating}</p>
                                {currentMovie.isSeries === true && 
                                <p className="season">{currentMovie.season_collection[0]}</p>
                                }
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
                    <img src={currentMovie.poster_path} className="movie-poster" alt='movie poster' />
                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default MoviePage;