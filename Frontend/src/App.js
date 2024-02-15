import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import HomeScreen  from "./Components/screens/HomeScreen";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";





const AppLyout=()=>{
    return(
        
        <>
        <Navbar/>
        <div className="pt-12">
        <HomeScreen/>
        </div>
        <Footer/>
     
        
        </>
    )
}   

const root=createRoot(document.getElementById("root"))

root.render(<AppLyout/>)


