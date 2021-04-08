import React, {useState, useEffect} from 'react';
import '../static/css/moviePage.css';
import Navbar from './navbar';
import Docs from './Docs';
import Episodes from './episodes';
import {Link,Redirect} from 'react-router-dom';


const MoviePage = () => {
    const[topic, setTopic] = useState({});

    useEffect(() => {
        window.scrollTo(0,0);
        console.log("useE");
        setTopic(JSON.parse(localStorage.getItem("topic")));
    },[])

    return(
        <React.Fragment>
            <Navbar/>
            <div className="movie-wrapper">
                <div className="movie-des">
                    <p className="movie-title">
                        {topic.topic}
                    </p>
                    {console.log(topic.docs)}
                    {/* <div className="movie-stats">
                        <div className="inner-wrapper">   
                            {currentMovie.Metascore !== "N/A" && <p className="match">{currentMovie.Metascore}% match</p>}
                            <p className="runtime">
                                {runtimeFormatter(currentMovie.Runtime)}
                            </p>
                            <p className="release-year">
                                {currentMovie.Year}
                            </p>
                            <p className="stats-wrapper">
                                <p className='vote'>{currentMovie.imdbRating}</p>
                                {currentMovie.isSeries === true && 
                                <p className="season">{currentMovie.season_collection[0]}</p>
                                }
                            </p>
                        </div>
                    </div> */}
                    <div className="movie-overview">
                        {topic.description}
                    </div>
                    {/* <div className="buttons">
                        <Link to="/player">
                            <span className="btn-1">
                                <BsFillCaretRightFill 
                                className="inner-btn-1" 
                                onClick={() => setUrl(currentMovie.mega_link)} />
                                Play
                            </span>
                        </Link>
                        <button className="btn btn-2"><GoPlus className="inner-btn-2"/>Watchlist</button>
                    </div> */}
                    {/* <div className="production">
                        <div className="directors">
                            Docs :     <span className="inner-details">
                                {console.log(topic.docs)}
                                {<Docs doc={topic.docs} /> }
                            </span>
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
                    </div> */}
                </div>
                <div className="movie-poster-wrapper">
                    <img src={topic.poster_path} className="movie-poster" alt='movie poster' />
                </div>
            </div>

            {topic.videos !== undefined &&
            <div className="season-details-wrapper">
                <div className="episode-bar-wrapper">
                    <div className="episode-bar-content">
                        Videos
                    </div>
                </div>
                <div className="episodes-wrapper">
                    <Episodes episodes = {topic.videos} />
                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default MoviePage;