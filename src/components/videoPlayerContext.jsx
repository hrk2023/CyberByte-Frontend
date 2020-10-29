import React, {useState,createContext} from 'react';

export const PlayerContext = createContext();

export const VideoPlayerContext = props => {
    const[url, setUrl] = useState(null);
    return(
        <PlayerContext.Provider value={[url,setUrl]}>
            {props.children}
        </PlayerContext.Provider>
    );
}