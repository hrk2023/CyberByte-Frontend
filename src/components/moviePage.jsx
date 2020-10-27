import React, {useState,useContext, useEffect} from 'react';
import '../static/moviePage.css';
import { BsFillCaretRightFill } from 'react-icons/bs';
import {GoPlus} from 'react-icons/go';
import {MasterContext} from './masterContext';
// http://www.omdbapi.com/?t=Captive+State
const MoviePage = () => {
    const[currentMovie, setCurrentMovie] = useContext(MasterContext);
    const[details, setDetails] = useState(null);
    function releaseYearExtractor(year){
        const arr = year.split("-");
        return arr[0];
    }
    const runtimeFormatter = (runtime) => {
        const arr = runtime.split(" ");
        runtime = parseInt(arr[0]);
        let quo = parseInt(runtime/60);
        let rem = runtime%60;
        return `${quo}h ${rem}min`;
    }
    useEffect(() => {
        function fetchFromOmdbApi(url){
            const xhr =  new XMLHttpRequest();
            xhr.open('GET',url,true);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
                if(xhr.status === 200){
                    setDetails(xhr.response);
                    console.log(xhr.response);
                }
            });
            xhr.send();
        }
        let url = `http://www.omdbapi.com/?i=tt3896198&apikey=3ae3134c&t=${currentMovie.title}`;
        fetchFromOmdbApi(url);
    },[currentMovie])

    return(
        <div className="movie-wrapper">
            {console.log(currentMovie)}
            <div className="movie-desc">
                <p className="movie-title">
                    {currentMovie.title}
                </p>
                
                <div className="movie-stats">
                    {details !== null &&
                    <div className="inner-wrapper">     
                        <p className="runtime">
                            {runtimeFormatter(details.Runtime)}
                        </p>
                        <p className="release-year">
                            {releaseYearExtractor(currentMovie.release_date == undefined ? '' : currentMovie.release_date)}
                        </p>
                        <p className="stats-wrapper">
                            <img className="logo" src={require('../static/imdb.png')} alt="imdb-logo" />
                            <img className="star" src={require('../static/icons8-star-48.png')} alt="imdb-star" />
                            <p className='vote'>{details.imdbRating}</p>
                            {currentMovie.isSeries === true && 
                            <p className="season">{currentMovie.season_collection[0]}</p>
                            }
                        </p>
                    </div>
                    }
                </div>
                <div className="movie-overview">
                    {currentMovie.overview}
                </div>
                <div className="buttons">
                    <span className="btn-1"><BsFillCaretRightFill className="inner-btn-1"/>Play</span>
                    <button className="btn btn-2"><GoPlus className="inner-btn-2"/>Add To Watchlist</button>
                </div>
                {details !== null &&
                <div className="production">
                    <div className="directors">
                        Directors :     <span className="inner-details">{details.Director}</span>
                    </div>
                    <div className="starring">
                        Starring :      <span className="inner-details">{details.Actors}</span>
                    </div>
                    <div className="genres">
                        Genres :        <span className="inner-details">{details.Genre}</span>
                    </div>
                    <div className="language">
                        Language :      <span className="inner-details">{details.Language}</span>
                    </div>
                </div>
                }
            </div>
            <div className="movie-poster-wrapper">
                <img src={currentMovie.poster_path} className="movie-poster" />
            </div>
        </div>
    );
}

export default MoviePage;