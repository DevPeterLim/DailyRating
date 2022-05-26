import React from "react";
import App from "./App";
import Detail from "./Detail";
import { Routes, Route, useParams } from "react-router-dom";

const Home = (props) => {

    let {dayNameURL} = useParams()

    return (
        <>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="detail">
                <Route path=":dayName" element={<Detail/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default Home;