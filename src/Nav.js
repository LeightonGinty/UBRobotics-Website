import { FaBeer } from 'react-icons/fa';
import React, { useRef } from "react";
import useScrollDirection from "./Hooks/useScroll"
import { Link } from 'react-router-dom';
function Nav({navClick,closePopUp}) {
  const scrollDirection = useScrollDirection();

    function closePopUp(){
        var x = document.getElementById("myTopnav");
        var y = document.getElementById("App");
        x.className = "topnav";
        y.className = "App";    
      }
   return (         

<div id='navigation'>
<div className={"topnav " + "topnav" + scrollDirection}  id="myTopnav" >
  <div>
  <a href="#" onClick={closePopUp} class="active">
    
  {/* <img src="UBRoboticsLogo.png" alt="Girl in a jacket" width="500" height="600">
  </img> */}

  </a>
  </div>
  <Link id ="aboutLink" to="../#About" onClick={closePopUp}>AboutLink</Link>
  <a href="../#About" id="aboutLink" onClick={closePopUp}>About</a>
  <a href="#News" onClick={event => closePopUp()}>News</a>
  <a href="#Contact" onClick={event => closePopUp()}>Contact</a>
  <a href="#JoinUs" onClick={event => closePopUp()}>Join Us</a>
  <a href="javascript:void(0)" className="icon" onClick={event => navClick()}>
  <  FaBeer />
  </a>
</div>
</div>
);
}

export default Nav;