import React, {useState, useEffect} from "react";
import axios from "axios";
import MarketInfo from "./MarketInfo";

//Info search BY the above ID
// https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}

export default function ZipcodeInfo(props){
const marketName = props.data.marketname;
const id = props.data.id;
const [marketInfo, setMarketInfo] = useState("");

function SetIdInfo(response){
    setMarketInfo(response.data);
}

function SearchId(){
    let apiURL = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}`;
    axios.get(apiURL).then(SetIdInfo);
}

useEffect(() => { if (marketName !== "Didn't find that zip code"){
    let apiURL = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}`;
    axios.get(apiURL).then(SetIdInfo); }}
, [marketName, id]);


    if (props.data){
    return(<div className="zipcodeinfo">
                <MarketInfo info={marketInfo} name={marketName} />
            </div>)
    }

    else{SearchId(); return null;}
    
}