import './App.css';
import {useState} from 'react'
import WeekDay from './WeekDay';
import { Routes, Route, Link, useParams} from "react-router-dom";
import Detail from './Detail';
import Home from './Home';

function App() {
  const week_list = Array.from({length:7})
  const randArr = week_list.map(()=>(Math.random()*5).toFixed(0))
  const [rate, setRate] = useState(randArr);
  
  let sum = 0;
  let aveRate = 0;
  for (let i = 0; i<rate.length; i++){
    sum += parseInt(rate[i])
  }
  aveRate = (sum/rate.length).toFixed(1)
  const [dayName, setDay] = useState(["일", "월", "화", "수", "목", "금", "토"])
  let weekDay = new Date().getDay()
  // weekDay = dayName[weekDay%7]
   return (
    <div className="App">
    <div className="container" style={{
        border:"solid black",
        height: "90vh",
        width: "50vw",
        margin: "auto",
        marginTop: "20px",
        padding: "10px",
        borderRadius: "5px",
      }}>
      <h2>내 일주일 평가</h2>
      
      <div className="day_list" style={{
        height: "60%",
        width:"90%",
        border:"solid #ddd",
        margin: "auto",
      }}>
      <div>
      <WeekDay rate={rate[0]} dayName={dayName[weekDay%7]}/>
      <WeekDay rate={rate[1]} dayName={dayName[(weekDay+1)%7]}/>
      <WeekDay rate={rate[2]} dayName={dayName[(weekDay+2)%7]}/>
      <WeekDay rate={rate[3]} dayName={dayName[(weekDay+3)%7]}/>
      <WeekDay rate={rate[4]} dayName={dayName[(weekDay+4)%7]}/>
      <WeekDay rate={rate[5]} dayName={dayName[(weekDay+5)%7]}/>
      <WeekDay rate={rate[6]} dayName={dayName[(weekDay+6)%7]}/>
      {/* <Detail dayName[weekDay/> */}
      </div>
      
      </div>
      <div className="averageText">평균 평점
        <div className="averageNum">{aveRate}</div>
      </div>
      <button onClick={()=>setRate("0")}>Reset</button>
      </div> 
    </div>

  );
}

export default App;
