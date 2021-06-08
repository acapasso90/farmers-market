import React, {useEffect} from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";

const libraries = ["places"];
const apiKey = 'AIzaSyBI6pjFBimqvr1IoOCfHcg1sznQluz5AOM';
const mapContainerStyle = {
    width: '50vw',
    height: '50vh',
}



export default function Map(props){


    const zipcodeinfo = props.zip;
    const apiURL = `http://api.zippopotam.us/us/${zipcodeinfo}`

    function SetData(response){

    }
    useEffect(() => {
        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source(); 
        if (mounted) {
            const apiURL = `http://api.zippopotam.us/us/${zipcodeinfo}`;
            axios.get( apiURL, {
            cancelToken: cancelTokenSource.token
          }).then(SetData);}
        return function cleanup() {
          mounted = false
          cancelTokenSource.cancel();
      }}, [zipcodeinfo]);
    


    const {isLoaded, loadError} = useLoadScript({
googleMapsApiKey: apiKey,
libraries,
    });

    if (loadError) return "error loading maps";
    if (!isLoaded) return "Loading Maps";
    return(
    <div className="map">

    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8}
     />
    </div>);
}
