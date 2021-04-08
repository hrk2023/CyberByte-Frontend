import React, { useState, useContext } from "react";
import "../static/css/Row.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { MasterContext } from "./masterContext";
import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  const [show, setShow] = useState("none");
  const [trans, setTrans] = useState("none");
  const [pos, setPos] = useState("static");

  function descriptionShortener(value, n) {
    return value?.length > n ? value.substr(0, n - 1) + "..." : value;
  }
  let setStyle = (showValue, transValue, posValue) => {
    setShow(showValue);
    setTrans(transValue);
    setPos(posValue);
  };
  return (
    <div className="element-wrapper">
      <Link to="/topic">
        <img
          className="poster"
          src={`${movie.poster_path}`}
          alt="movie-banner"
          id="movieImage"
          style={{ transform: `${trans}` === "none" ? "none" : "scale(1.08)" }}
          onMouseOver={() => setStyle("block", "grow", "abs")}
          onMouseOut={() => setStyle("none", "none", "static")}
          onClick={() => localStorage.setItem("topic",JSON.stringify(movie))}
        />
      </Link>
      {/* {!isLarge && (
        <div
          className="content-wrapper"
          style={{ display: `${show}` === "none" ? "none" : "block" }}
          onMouseOver={() => setStyle("block", "grow")}
          onMouseOut={() => setStyle("none", "none")}
        >
          <div className="row-element-footer"></div>
          <div className="play-wrapper">
            <Link to="/movie">
              <span className="btn play-bk">
                <BsFillCaretRightFill
                  className="inner-play-btn"
                  onClick={() => setCurrentMovie(movie)}
                />
              </span>
            </Link>
            <btn className="btn play-bk">
              <GoPlus className="inner-play-btn" />
            </btn>
          </div>
          <p className="movie-name">{movie.topic}</p>
          <div className="description">
            <div className="movie-des-content">
              {descriptionShortener(movie.description, 150)}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
export default Movie;
