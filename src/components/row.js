import React, {useState, useEffect} from 'react';
import { BsDisplay } from 'react-icons/bs';
import {css} from 'emotion';
import '../static/Row.css';
import Movie from './movie';
function Row({ title, url, isLarge}){
    const[movies, setMovies] = useState([]);
    const[show, setShow] = useState("none");
    useEffect(() => {
        function fetchData() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url,true);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
                if(xhr.status === 200){
                    setMovies(xhr.response.result);
                }
            });
            xhr.send();
        }
        fetchData();
    },[url]);
    return(
        <div className="row-container">
            {console.log(movies[0])}
            <h3>{title}</h3> 
            <div className={`${isLarge ? 'movie-row' : 'movie-small'}`}>
                {movies.map((movie) => (
                    <Movie movie={movie} isLarge={isLarge}/>
                ))}
            </div>
        </div>
    );
}
export default Row;
