import React from "react";
import Requests from "./requests";
import Row from "./row";


function Compo(){
return(
<>
<Row title="IN THEATERS" fetchUrl={Requests.theater} isLargeRow />
<Row title="Popular Now" fetchUrl={Requests.popular}/>
<Row title="R-Rated" fetchUrl={Requests.Rrated}/>
<Row title="kids" fetchUrl={Requests.kids}/>
</>
);
}

export default Compo;