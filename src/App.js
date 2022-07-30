import logo from './logo.svg';
import './App.css';
// import Test from './Test.js';
// import 'react-bootstrap'
// import Carousel from './Carousel';
// import react, { Component } from 'react'
import Hero from './HeroImage';
import Nav from './Nav';
import Section from './Section';
import { useState } from "react";
import News from './News';
import Contact from './Contact'
import Footer from './Footer';
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
// import axios from 'axios';
// import cheerio from 'cheerio';



function App({props}) {
let data = [];
  // state = {
  //   data: null
  // };

  useEffect(() => {  
  //   var url = "https://www.birmingham.ac.uk/university/colleges/eps/eps-community/students/societies/ubrobotics.aspx";
  //   var articles = [];
  //   data = [];
  //   try{
  //     axios.get(url).then(resp => {
  //         // console.log(String(resp.data))
  //     //   console.log(resp.json);
  //     //   console.log(resp.text);
  //     //   console.log(resp.getbody());
  
  //       const $ = cheerio.load(String(resp.data));
  //       articles = $(".article .island");
  //       for(let i = 0; i < articles.length; i++){
  //         data.push(articles[i].children[1].children[1].children[0].data)
  //         data.push(articles[1].children[1].children[1].attribs.href)
  //       }
  //       console.log()
  //       // res.send(data)
  
  //       // var name = articles[1].children[1].children[1].children[0].data;
  //       // var url = articles[1].children[1].children[1].attribs.href;
  //       // console.log(articles[1].children[1].children[1].children[0].data);
  //     })
  //   }
  //   catch(e){
  //       console.log(e);
  //       // res.send(e);
  
  //   }
    callBackendAPI()     
     
      console.log("help");
  })

  
    // fetching the GET route from the Express server which matches the GET route from server.js
   async function callBackendAPI() {
    const response = await fetch('/expss_backend');
    const body = await response.text();
    console.log(body);

    // if (response.status !== 200) {
    //   throw Error(data.message) 
    // }
    // return data;
  };


  const [aboutDetails, setAbout] = useState("We are UBRobotics, the University of Birmingham's Robotics Society who cater to people from all backgrounds to be part of a team of robotics and engineering enthusiasts. \n" +
  "We formed in February 2015 and had great success at several national and international robotics competitions, including EuroBot. \n" +
  "We are now excited to announce we are officially relaunching the UBRobotics society with a new direction and new ideas! \n" +
  "Whether you have career aspirations in robotics or just a casual interest, we welcome people from all backgrounds to be part of a team of robotics and engineering enthusiasts. \n" +
  "This is a great opportunity for you to get involved in workshops, competitions, social events and talk to industrial speakers.");


  function navClick() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("App");

    //var x = navClass.current;
    if (x.className === "topnav") {
        //navClass += " responsive"
        y.className += " navEnabled"
        x.className += " responsive"
      //x.className += " responsive";
    } else {
        //navClass.current = "topnav";
        x.className = "topnav";
        y.className = "App"
    }
  }

  function closeNav(){
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("App");
    x.className = "topnav";
    y.className = "App";
  }



  return (
    
    <div className='reactApp' id="reactApp">

          <Nav closePopUp={closeNav} navClick={navClick}/>
        

    <div className="App" id="App" onClick={closeNav}>
    <Hero id="Home" image={"RobotDesk.JPG"}/>

    <Section className="section" name="About"/>
    <header>
      <h2 id="aboutLink">About</h2>
    </header>
    <div className='aboutContent'>
     <p>
      We are UBRobotics, the University of Birmingham's Robotics Society who cater to people from all backgrounds to be part of a team of robotics and engineering enthusiasts.
    </p>
    <p>
      We formed in February 2015 and had great success at several national and international robotics competitions, including EuroBot.
    </p>
    <p>
      We are now excited to announce we are officially relaunching the UBRobotics society with a new direction and new ideas!
    </p>
    <p>
    Whether you have career aspirations in robotics or just a casual interest, we welcome people from all backgrounds to be part of a team of robotics and engineering enthusiasts. 
    </p>
    <p>
      This is a great opportunity for you to get involved in workshops, competitions, social events and talk to industrial speakers.
    </p>
    </div>

    <Section className="section" id="News"  name="News" />
    <div className='newsControl' >
    <News />
    <News />
    <form method='GET' action='/AllNews'>
    <button className='readMore'>
      {/* <a href = "#" > */}
      <Link to="/AllNews" style={{color: "white"}}>
        Read More
      </Link>
      
      {/* </a> */}
    </button>
    </form>

    </div>

    <Section className="section" id="Join"  name="JoinUs"/>

    <Section className="section" id="Contact"  name="Contact"/>
    <Footer/>

        {/* <p>
           <Test/> 
           <h3>You don't need wifi for web dev damnit!</h3> 
          <h2>you're cool</h2>
          <button className="btn btn-outline-primary" type="button">Button</button>

        </p> */}
      {/* </header> */}

    </div>
</div>
  );
}

export default App;
