import React,{useState,useEffect,useContext} from 'react';
import '../static/episode.css';
import {Link} from 'react-router-dom';
import {PlayerContext} from './videoPlayerContext'
import { BsFillCaretRightFill } from 'react-icons/bs';

const Episodes = ({episodes}) => {
    const[url,setUrl] = useContext(PlayerContext);
    return(
        <div className="episodes-wrapper">
            {console.log(episodes)}
            {episodes.map((episode,index) => (
                <div className="episode-box">
                    <div className="episode-image-wrapper">
                        <div className="image-inner-wrapper">
                            <img src={episode.still_path} className="episode-image"/>
                        </div>
                    </div>
                    <div className="episode-details-wrapper">
                        <div className="episode-header">
                            <Link to="/player">
                                <span className="episode-play-btn-wrapper">
                                    <BsFillCaretRightFill 
                                    className="episode-play-btn" 
                                    onClick={() => setUrl(episode.mega_link)} />
                                </span>
                            </Link>
                            {`${index+1}. ${episode.episode_title}`}
                        </div>
                        <div className="episode-overview-wrapper">
                            {episode.episode_overview}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Episodes;