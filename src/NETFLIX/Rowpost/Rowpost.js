import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../axios";
import { API_KEY, imageUrl } from "../constants/Constants";
import Youtube from "react-youtube";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function Rowpost(props) {

  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  const [visible, setVisible] = useState(false) 

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results);
      console.log(response.data.results);
    });
  },[]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const clickMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('Empty Array');
        }
      });
  };

  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="row">
      <h2>{props.title}</h2>
     <div onClick={()=> navigate()} className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => clickMovie(obj.id)}
            className={props.isSmall ? "small-poster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      <div id="youtube">
      {urlId && <Youtube  opts={opts} videoId={urlId.key} />}
      </div>
      <span onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} id="top-btn"><BsFillArrowUpCircleFill/></span>
    </div>
  );
}

export default Rowpost;
