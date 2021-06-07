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
    return(
        <div className="MarketInfo">
            <h3 className="marketName"> {marketName} </h3>
            <ul>
                <li> {address} </li>
                <li> <a href={google} target="_blank">Directions</a></li>
                <li> {schedule} </li>
                <li> {products}</li>
            </ul>
        </div>
    )
}

else return null;
}