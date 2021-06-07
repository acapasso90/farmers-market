import React, {useState} from "react";
import axios from "axios";
import ZipcodeInfo from "./ZipcodeInfo";

export default function MarketSearch(){
const [zipcode, setZipcode] = useState("71286");
const [loaded, setLoaded] = useState(false);
const [zipData, setZipData] = useState();
const [resultLength, setResultLength] = useState();
let zipHolder = null;

function SetData(response){
setLoaded(true);
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
    SearchZipcode();
}

function setZip(event){
    event.preventDefault();
    zipHolder = event.target.value;
}



if(zipData){
return( 
    <div className="MarketSearch">
        <form onSubmit={handleSubmit}>
            <input type="text" className="zipInput" onChange={setZip} placeholder="Enter Zipcode" />
            <input type="submit" />
        </form>
        {zipData.slice(0, resultLength).map(function(zipNumeral, index){
   return(<ZipcodeInfo data={zipNumeral} key={index} />)})}
    </div>)}

else{ 
    SearchZipcode(); 
    return("loading");}
}


