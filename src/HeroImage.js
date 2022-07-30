import "./index.css"
import { useEffect,useState } from "react";
import RobotDesk from "./RobotDesk.JPG";
function Hero({image}) {
  function name(){
  }
  useEffect(() => {
    // call api or anything
    console.log("loaded");
    console.log(`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"${image}\")`);

 });
 const styles = {  
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
    height: "100vh;",
    backgroundPosition: "center;",
    backgroundRepeat: "no-repeat;",
    backgroundSize: "cover;",
    position: "relative;"  
 }
 //{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"${image}\")`}
    return ( 
    <div className="hero-image">
    <div className="hero-text">
      <h1 >UBRobotics</h1>
      <p>Building the future of Robotics</p>
      {/* <button>Hire me</button> */}
    </div>
  </div> );
}

export default Hero;