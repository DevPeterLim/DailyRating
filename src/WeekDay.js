import React, { useState } from "react";
import Circle from "./Circle";
import { Link, useParams } from "react-router-dom";

function WeekDay(props){
    const {dayName} = useParams()
    return (
        <>
        <div className="day_items" style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin: "0",
          }}>{props.dayName}
          <Circle rate = {props.rate} dayName ={props.dayName} ></Circle>
          <Link to={"/detail/"+props.dayName}><div className="triangle" style={{
              appearance: "none",
              backgroundColor: "transparent",
              borderColor: "transparent purple",
              width: "0px",
              height: "0px",
              borderTopWidth: "1rem",
              borderTopStyle: "solid",
              borderBottomWidth: "1rem",
              borderBottomStyle: "solid",
              borderLeftWidth: "1.6rem",
              borderLeftStyle: "solid",
              color: "rgb(255, 255, 255)",
              cursor: "pointer"}}>
            </div>
          </Link>
          </div>
          </>
    );
}
WeekDay.defaultProps = {
  rate:"0"
}

export default WeekDay;
