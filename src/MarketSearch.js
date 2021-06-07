import React, {useState} from "react";

export default function MarketSearch(){
const [zipcode, setZipcode] = useState("71286");
let zipHolder = null;
//API Documentation
//https://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html

//Zip search for IDs
//https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}

//Info search BY the above ID
// https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}

function SearchZipcode(){

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


return( 
    <div className="MarketSearch">
        <form onSubmit={handleSubmit}>
            <input type="text" className="zipInput" onChange={setZip} placeholder="Enter Zipcode" />
            <button className="searchButton">Search</button>
        </form>

    </div>)
}


