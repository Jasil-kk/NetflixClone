import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import { API_KEY , imageUrl} from "../constants/Constants";
import Rowpost from "../Rowpost/Rowpost";
import { originals,action,comedy,horror,romance,animation } from "../urls";

function Banner() {
  const [movie, setMovie] = useState('');
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results.sort(function (a,b) { return 0.5 - Math.random()})[0]);
      });
  }, []);

  return (<>
    <div id="bannerDiv" style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className="banner">
      <div className="content">
        <h1 className="title">{movie.title}</h1>
        <div className="banner-btns">
          <button className="button">Play</button>
          <button className="button">My LIst</button>
        </div>
        <h1 className="description">
          {movie.overview}
        </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
    <Rowpost url={originals} title='Netflix Originals'/>
    <Rowpost url={action} title='Action' isSmall/>
    <Rowpost url={comedy} title='Comedy' isSmall/>
    <Rowpost url={horror} title='Horror' isSmall/>
    <Rowpost url={romance} title='Romance' isSmall/>
    <Rowpost url={animation} title='Animation' isSmall/>

    </>
  );
}

export default Banner;
