import React,{useEffect,useState} from "react";
import Requests from "./requests";
import axios from "./axios";
import "./header.css";

let baseUrl="https://api.themoviedb.org/3"
function Banner(){
const [banner, BannerSet] = useState([])

useEffect(()=>{
async function Data(){
const request = await axios.get(baseUrl+Requests.theater)
BannerSet(request.data.results[Math.floor(Math.random()*request.data.results.length -1)])
return request;
}
Data();
},[])
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

return(
<header className="Banner"
style={{
backgroundImage:`url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
backgroundPosition: "center center",
backgroundSize:"cover"
}}>
<div className="bannerContents">
<h1 className="title">
{banner?.title || banner?.name || banner?.original_name}
</h1>
<div className="buttons">
<button className="button">Play</button>
<button className="button">My List</button>
</div>
<div className="desc">
<h1 className="banner_desc">{truncate(banner?.overview,160)}</h1>
</div>

</div>
<div className="banner--fadeBottom" />
 </header>
)

}

export default Banner;