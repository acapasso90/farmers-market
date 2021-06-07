import React, {useState, useEffect} from "react";
import axios from "axios";
import ZipcodeInfo from "./ZipcodeInfo";
import corn from "./media/corn.png";

export default function MarketSearch(){
const [zipcode, setZipcode] = useState("71286");
const [zipData, setZipData] = useState();
const [resultLength, setResultLength] = useState();
let zipHolder = null;

function SetData(response){
setZipData(response.data.results);
setResultLength(response.data.results.length);

}

function SearchZipcode(){
//API Documentation
//https://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html
const apiURL = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zipcode}`;
axios.get(apiURL).then(SetData);
}


function handleSubmit(event){
    event.preventDefault();
    setZipcode(zipHolder);
}

function setZip(event){
    zipHolder = event.target.value;
}


useEffect(() => {
    let mounted = true;
    const cancelTokenSource = axios.CancelToken.source(); 
    if (mounted) {
        const apiURL = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zipcode}`;
        axios.get( apiURL, {
        cancelToken: cancelTokenSource.token
      }).then(SetData);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [zipcode]);

if(zipData){
return( 
    <div className="MarketSearch">
        <header>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="zipInput" onChange={setZip} placeholder="Enter Zipcode" />
                    <input type="submit" />
                </form>
                <img src={corn} alt="corn" className="corn" />
            </div>
        </header>
    <div className="bodytext">
        <h4>Showing Markets near {zipcode}</h4>
        {zipData.slice(0, resultLength).map(function(zipNumeral, index){
          return(<ZipcodeInfo data={zipNumeral} key={index} />)})}
    </div>
</div>)}

else{ 
    SearchZipcode(); 
    return("loading");}
}


