import React from "react";

export default function MarketInfo(props){

if(props.info){
    let address = props.info.marketdetails.Address;
    let google = props.info.marketdetails.GoogleLink;
    let products = props.info.marketdetails.Products;
    let schedule = props.info.marketdetails.Schedule;
    let marketName = props.name;
    console.log(products);
    marketName = marketName.replace(".", '');
    marketName = marketName.replace(/[0-9]/g, '');
    schedule = schedule.replace("<br>", '');
    schedule = schedule.replace("<br>", '');
    schedule = schedule.replace("<br>", '');
    if (marketName === "Didn't find that zip code") {return( "Did not find any markets for that zipcode");}
    else return(
        <div className="MarketInfo">
            <h3 className="marketName"> {marketName} </h3>
            <ul>
                <li> {address} </li>
                <li> <a href={google} target="_blank"><button><i class="fas fa-map-marker-alt"></i> &nbsp;Directions</button></a></li>
                <li> {schedule} </li>
                <li> {products}</li>
            </ul>
        </div>
    )
}

else return null;
}