import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {PlayerContext} from './videoPlayerContext'
import '../static/videoPlayer.css';
export const Player = () => {
    const [url,setUrl] = useContext(PlayerContext)
    return(
        <React.Fragment>
            {url === null &&
            <Redirect to="/movie"/>
            }
            <iframe
            src={url}
            allowFullScreen
            frameborder="0"
            className="video-player"
            />
        </React.Fragment>
    );
}