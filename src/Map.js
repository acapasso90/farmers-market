import React, {useEffect} from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import ZipcodeInfo from "./ZipcodeInfo";
import usePlacesAutocomplete, {
  } from "use-places-autocomplete";


const libraries = ["places"];
const apiKey = 'AIzaSyBI6pjFBimqvr1IoOCfHcg1sznQluz5AOM';
const mapContainerStyle = {
    width: '50vw',
    height: '50vh',
}




export default function Map(props){
    const zipcodeinfo = props.zip;
    const {isLoaded, loadError} = useLoadScript({
googleMapsApiKey: apiKey,
libraries,
    });

    if (loadError) return "error loading maps";
    if (!isLoaded) return "Loading Maps";
    return(
    <div className="map">
        <Search />

    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8}
     />
    </div>);
}

function Search(){
const { ready, value, suggestions: { status, data},
setValue, clearSuggestion, } = usePlacesAutocomplete({
    requestOptions: {
        location: ZipcodeInfo,
        radius: 200 * 1000,
    },
});

return "hi"
}