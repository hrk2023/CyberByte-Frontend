import React, {useState, useEffect, useContext} from 'react';
import '../static/banner.css';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
import {PlayerContext} from './videoPlayerContext';
import {MasterContext} from './masterContext';
import {Link} from 'react-router-dom';
function Banner({ url }){
    const[banner,setBanner] = useState([]); 
    const[link,setLink] = useContext(PlayerContext);
    const [currentMovie,setCurrentMovie] = useContext(MasterContext);


    function runtimeFormatter(s){
        let runtime = String(s);
        const arr = runtime.split(" ");
        runtime = parseInt(arr[0]);
        let quo = parseInt(runtime/60);
        let rem = runtime%60;
        return `${quo}h ${rem}min`;
    }

    useEffect(() => {
        async function fetchBanner(){
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url,true);
            xhr.responseType = 'json';
            xhr.addEventListener('load',() => {
                if(xhr.status === 200){
                    setBanner(xhr.response.result[0]);
                }
            })
            xhr.send();
        }
        fetchBanner();
    },[url])
    function descriptionShortener(value, n){
        return value?.length > n ? value.substr(0,n-1) + "..." : value;
    }
    return(
        <Link to={banner.isSeries ? "/series" : "/movie"}>
            <div className="container-fluid banner"
            style= {{'backgroundImage':`url("${banner?.backdrop_path}")` }}
            onClick = {() => setCurrentMovie(banner)}>
                <div className="banner-content col-xs-5">
                    <h3 className="movie-title">{banner.title}</h3>
                    {banner.Metascore !== undefined && 
                    <React.Fragment>
                        <div className="ratings">
                            <p className="match-percent">{banner.Metascore}% match</p>
                            <p className="year">{banner.Year}</p>
                            <p className="year">{runtimeFormatter(banner.Runtime)}</p>
                            <img className="imdb-logo" src={require('../static/imdb.png')} alt="imdb-logo" />
                            <img className="imdb-star" src={require('../static/icons8-star-48.png')} alt="imdb-star" />
                            <p className="rating-content">{banner.imdbRating}</p>                   
                        </div>
                        <div className="banner-btn">
                            <Link to="/player">
                                <button className="btn btn-secondary play-btn"
                                onClick={() => setLink(banner.mega_link)}
                                >
                                    <BsFillCaretRightFill className="play-icon"/>
                                    Play
                                </button>
                            </Link>
                            <button className="btn more-btn"><FaListUl className="mylist-icon" />My List</button>
                        </div>
                    </React.Fragment>
                    }
                    <div className="movie-desc">{descriptionShortener(banner.overview,200)}</div>
                </div>
                <div className="banner-footer"></div>
                <div className="banner-overlay"></div>
            </div>
        </Link>
    );
}
export default Banner;
