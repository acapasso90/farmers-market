import React, {useState} from "react";
import axios from "axios";
import ZipcodeInfo from "./ZipcodeInfo";

export default function MarketSearch(){
const [zipcode, setZipcode] = useState("71286");
const [loaded, setLoaded] = useState(false);
const [zipData, setZipData] = useState();
const [resultLength, setResultLength] = useState();
let zipHolder = null;
//API Documentation
//https://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html

//Info search BY the above ID
// https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}


function SetData(response){
setLoaded(true);
setZipData(response.data.results);
setResultLength(response.data.results.length);

}

function SearchZipcode(){
const apiURL = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zipcode}`;
axios.get(apiURL).then(SetData);
}


function handleSubmit(event){
    event.preventDefault();
    setZipcode(zipHolder);
    SearchZipcode();
}

function setZip(event){
    event.preventDefault();
    zipHolder = event.target.value;
}



if(loaded){
return( 
    <div className="MarketSearch">
        <form onSubmit={handleSubmit}>
            <input type="text" className="zipInput" onChange={setZip} placeholder="Enter Zipcode" />
            <button className="searchButton">Search</button>
        </form>
        {zipData.slice(0, resultLength).map(function(zipNumeral, index){
   return(<ZipcodeInfo data={zipNumeral} key={index} />)})}
    </div>)}

else{ 
    SearchZipcode(); 
    return("loading");}
}


