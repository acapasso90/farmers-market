import React from "react";

export default function MarketInfo(props){

if(props.info){
    let address = props.info.marketdetails.Address;
    let google = props.info.marketdetails.GoogleLink;
    let products = props.info.marketdetails.Products;
    let schedule = props.info.marketdetails.Schedule;
    let marketName = props.name;
    marketName = marketName.replace(".", '');
    marketName = marketName.replace(/[0-9]/g, '');
    schedule = schedule.replace("<br>", '');
    schedule = schedule.replace("<br>", '');
    schedule = schedule.replace("<br>", '');
    schedule = schedule.replace(";", '');
    if (marketName === "Didn't find that zip code") {return( "Did not find any markets for that zipcode");}
    else return(
        <div className="MarketInfo">
            <h2 className="marketName"> {marketName} </h2>
            <ul>
                <li className="address"> <strong> {address} </strong></li>
                <li className="schedule"> <strong> {schedule}  </strong> </li>
                <li> <a href={google} target="_blank" rel="noreferrer"><button><i className="fas fa-map-marker-alt"></i> &nbsp;Directions</button></a></li>
                <li><h2>Selling: </h2></li>
                <li> {products}</li>
            </ul>
        </div>
    )
}

else return null;
}