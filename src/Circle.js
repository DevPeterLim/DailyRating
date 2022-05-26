import React from "react";
import './Circle.css';
import Circle0 from "./Circle0";
import Circle1 from "./Circle1";
import Circle2 from "./Circle2";
import Circle3 from "./Circle3";
import Circle4 from "./Circle4";
import Circle5 from "./Circle5";

function Circle(props){
    console.log(`Circle안 ${props.rate}`, typeof props.rate)
    switch(props.rate){
        case "" :
            return <Circle0 />
        case "0" :
            return <Circle0 />
        case "1" :
            return <Circle1 />
        case "2" :
            return <Circle2 />
        case "3" :
            return <Circle3 />
        case "4" :
            return <Circle4 />
        case "5" :
            return <Circle5 />
    }
}

Circle.defaultProps = {
    rate:"0"
  }

export default Circle;