import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import HomeScreen  from "./Components/screens/HomeScreen";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";




const AppLyout=()=>{
    return(
        
        <>
        <Navbar/>
        <div className="pt-12">
        <HomeScreen/>
        </div>
        
        </>
    )
}   

const root=createRoot(document.getElementById("root"))

root.render(<AppLyout/>)


