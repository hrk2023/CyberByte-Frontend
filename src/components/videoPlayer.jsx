import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {PlayerContext} from './videoPlayerContext'
import '../static/css/videoPlayer.css';
export const Player = () => {
    const [url,setUrl] = useState("");

    React.useEffect(() => {
        let data = JSON.parse(localStorage.getItem("video"));
        let arr = data.split("/");
        let video_id = "https://youtube.com/embed/" + arr[arr.length - 1];
        setUrl(video_id);
    },[])
    return(
        <React.Fragment>
            {url === null &&
            <Redirect to="/topic"/>
            }
            <iframe
            src={url}
            title="CypherByte" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; 
            encrypted-media; gyroscope; 
            picture-in-picture" 
            allowfullscreen
            className="video-player"
            />
        </React.Fragment>
    );
}