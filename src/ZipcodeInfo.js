import React from "react";

//    {props.data.meanings.map(function(meaning, index) {
// return(<div key={index}>
//        <Meaning meaning={meaning} />
//        </div>)})}

export default function ZipcodeInfo(props){
    console.log(props.data)

    if (props.data){
return(<div className="zipcodeinfo">
    "working"
</div>)}

else return null;
    
}