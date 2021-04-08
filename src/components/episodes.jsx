import React,{useContext} from 'react';
import '../static/css/episode.css';
import {Link} from 'react-router-dom';
import {PlayerContext} from './videoPlayerContext'
import { BsFillCaretRightFill } from 'react-icons/bs';

const Episodes = ({episodes}) => {
    function descriptionShortener(value, n){
        return value?.length > n ? value.substr(0,n-1) + "..." : value;
    }
    return(
        <div className="episodes-wrapper">
            
            {episodes.map((episode,index) => (
                <div className="episode-box">
                    {/* <div className="episode-image-wrapper">
                        <div className="image-inner-wrapper">
                            <img src={episode.still_path} className="episode-image" alt="episode poster"/>
                        </div>
                    </div> */}
                    <Link to='/player' className='episode-details-wrapper'>
                        <div className="episode-details-inner"
                        onClick={() => localStorage.setItem("video",JSON.stringify(episode.video_link))}>
                            <div className="episode-header">
                                <Link to="/player">
                                    <span className="episode-play-btn-wrapper">
                                        <BsFillCaretRightFill 
                                        className="episode-play-btn" 
                                        onClick={() => localStorage.setItem("video",JSON.stringify(episode.video_link))} />
                                    </span>
                                </Link>
                                {`${index + 1}. ${episode.video_title}`}
                            </div>
                            <div className="episode-overview-wrapper">
                                {episode.author}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Episodes;