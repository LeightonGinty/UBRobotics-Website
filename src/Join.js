import "./index.css"
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import RobotDesk from "./RobotDesk.JPG";
function Join({image}) {
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
    <button className="submitButton">
        <Link to="#">
          Join Us
        </Link>
        {/* <input style={{width: `${window.innerWidth}`}} className='submitButton' type="submit" value="Send" /> */}

      </button>
      {/* <button>Hire me</button> */}
    </div>
  </div> );
}

export default Join;