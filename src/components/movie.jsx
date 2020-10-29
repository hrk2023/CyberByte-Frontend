import React, {useState,useContext} from 'react';
import '../static/Row.css';
import { BsFillCaretRightFill } from 'react-icons/bs';
import {GoPlus} from 'react-icons/go';
import {MasterContext} from './masterContext';
import {Link} from 'react-router-dom';
const Movie = ({movie, isLarge}) => {
    const[show, setShow] = useState("none");
    const[trans, setTrans] = useState("none");
    const[pos, setPos] = useState("static");
    const [currentMovie, setCurrentMovie] = useContext(MasterContext);
    function descriptionShortener(value, n){
        return value?.length > n ? value.substr(0,n-1) + "..." : value;
    }
    // function releaseYearExtractor(year){
    //     const arr = year.split("-");
    //     return arr[0];
    // }
    let setStyle = (showValue, transValue, posValue) => {
        setShow(showValue);
        setTrans(transValue);
        setPos(posValue)
    }
    return(
        <div className="element-wrapper">
            <img className={`${isLarge ? 'poster-large' : 'poster' }`}
            src={`${isLarge ? movie.poster_path : movie.backdrop_path}`} alt="movie-banner" id="movieImage"
            style={{transform : `${trans}` === "none" ? "none" : "scale(1.08)"}}
            onMouseOver = {() => setStyle("block","grow","abs") } onMouseOut = {() => setStyle("none","none","static")}
            onClick={() => setCurrentMovie(movie)}
            />
            {
            !isLarge &&    
            <div className="content-wrapper" style={{display: `${show}` === "none" ? 'none' : "block"}}
            onMouseOver = {() => setStyle("block","grow") } onMouseOut = {() => setStyle("none","none")}
            >
                <div className="row-element-footer"></div>
                <div className="play-wrapper">
                    <Link to="/movie">
                        <span className="btn play-bk"><BsFillCaretRightFill className="inner-play-btn"
                        onClick={() => setCurrentMovie(movie)}
                        /></span>
                    </Link>
                    <a className="btn play-bk"><GoPlus className="inner-play-btn"/></a>
                </div>
                <p className="movie-name">{movie.title}</p>
                    <div className="description">
                    <div className="movie-des-content">
                        {descriptionShortener(movie.overview,150)}
                    </div>
                    <div className="rating">
                        <div className="specs-wrapper">
                            <img className="imdb-logo" src={require('../static/imdb.png')} alt="imdb-logo" />
                            <img className="imdb-star" src={require('../static/icons8-star-48.png')} alt="imdb-star" />
                            <p className="rating-number">{movie.imdbRating}</p>
                        </div>
                        <p className="movie-year">{movie.Year}</p>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}
export default Movie