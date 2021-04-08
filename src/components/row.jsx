import React, {useState, useEffect} from 'react';
import '../static/css/Row.css';
import Movie from './movie';
import axios from 'axios';

function Row({ title, url}){
    const[vids, setVids] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setVids(response.data.result);
            console.log(response);
        })
        .catch(error => console.log(error));
    },[url]);
    return(
        <div className="row-container">
            <h3>{title}</h3> 
            <div className='movie-small'>
                {vids.map((vid) => (
                    <Movie movie={vid} />
                ))}
            </div>
        </div>
    );
}
export default Row;
