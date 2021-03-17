import React,{useContext} from 'react';
import '../static/css/episode.css';
import {Link} from 'react-router-dom';
import {PlayerContext} from './videoPlayerContext'
import { BsFillCaretRightFill } from 'react-icons/bs';

const Episodes = ({episodes}) => {
    const[url,setUrl] = useContext(PlayerContext);
    function descriptionShortener(value, n){
        return value?.length > n ? value.substr(0,n-1) + "..." : value;
    }
    return(
        <div className="episodes-wrapper">
            {console.log(episodes)}
            {episodes.map((episode,index) => (
                <div className="episode-box">
                    <div className="episode-image-wrapper">
                        <div className="image-inner-wrapper">
                            <img src={episode.still_path} className="episode-image" alt="episode poster"/>
                        </div>
                    </div>
                    <Link to='/player' className='episode-details-wrapper'>
                        <div className="episode-details-inner"
                        onClick={() => setUrl(episode.mega_link)}>
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
                                {descriptionShortener(episode.episode_overview,180)}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Episodes;