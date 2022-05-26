import React from "react";
import Circle from "./Circle";
import './Detail.css';
import {useNavigate, useParams} from "react-router-dom"
import { useState } from "react";

const Detail = (props) =>{
    let navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate('/')
    }
    let {dayName} = useParams()
    let circleid = 0;
    function clickEvent(e){
        circleid=e.target.id;
        circleid = circleid.toString();
        console.log(circleid)
        setCircle(circleid)   
    }
    console.log(dayName)
    circleid = circleid.toString();
    const [circleNum,setCircle]=useState(circleid);
    console.log(`circleNum: ${circleNum}`)
    return (
        <div className="Detail">
            <div className="container" style={{
            border:"solid black",
            height: "90vh",
            width: "50vw",
            margin: "auto",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
        }}>
        <h2 className="title" style={{textAlign:"center"}}>{dayName}요일 평가하기</h2>
        <div onClick={clickEvent} className="btns">
        <Circle rate={circleNum}/>
        </div>
        <button onClick={handleSubmit}>평점 남기기</button>
        </div>
      </div>
    )
}

export default Detail;