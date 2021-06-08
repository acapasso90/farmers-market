import React from "react";

export default function City(props){
let places = props.data.places;
let placeslength = props.data.places.length;
let state = null; 
const name = `place name`



if (placeslength === 1) {places = props.data.places[0].[name]; 
state = props.data.places[0].state;
return( <p> {places}, {state}</p>)}
else {places.forEach(places => {
    places = props.data.places[0].[name]; 
state = props.data.places[0].state
return( <p> {places}, {state}</p>)
})}

}