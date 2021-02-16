import React, { useState, useEffect } from "react";
import axios from "./axios";
import Compo from "./list";
import "./style.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = "https://api.themoviedb.org/3"
const image_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl,isLargeRow}){
const [movies,newMovies] = useState([]);
const [trailer, trailerUrl] = useState("");

useEffect(()=>{
async function fetchData(){
const request = await axios.get(baseUrl+fetchUrl);
newMovies(request.data.results);
return request;
}
fetchData();
},[fetchUrl]);

const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }
  
 
const handleClick = (movie)=>{
if(trailer){
trailerUrl("")
}
else{
movieTrailer(movie?.title || "").then(url =>{
const params = new URLSearchParams(new URL(url).search);
trailerUrl(params.get("v"))}).catch(()=>{trailerUrl("something wrong happened")});

}}

return(
<div className="rows">
<h2>{title}</h2>
<div className="images">
{movies.map(movie=>{
return <img key={movie.id} onClick={()=>handleClick(movie)} className={`backdrops ${isLargeRow && "row_posterLarge"}`}
src={`${image_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title}/>

})}
</div>
<div style={{ padding: "40px" }}>
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
</div>
)
}

export default Row;