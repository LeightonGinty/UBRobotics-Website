import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import AllNews from './AllNews';
import cheerio  from 'cheerio';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";

//  import promise, {data} from './getArticles.mjs'
// var articles = getArticles();
// var url = `https://www.birmingham.ac.uk/index.aspx`
var data = [];

// useEffect(() => {
//   // GET request using fetch inside useEffect React hook
//   fetch('https://www.birmingham.ac.uk/university/colleges/eps/eps-community/students/societies/ubrobotics.aspx')
//       .then(response => {
//         var url = "https://www.birmingham.ac.uk/university/colleges/eps/eps-community/students/societies/ubrobotics.aspx"
// promise.then(() => {
// console.log("bob" + data);
// })
// // useEffect(() => {  
//   callBackendAPI()
//     // .then(res => this.setState({ data: res.express }))
//     // .catch(err => console.log(err));
// // })

// callBackendAPI = async () => {
//   const response = await fetch('/express_backend');
//   data = await response.data
//   console.log(data);
//   if (response.status !== 200) {
//     throw Error(body.message) 
//   }
//   return body;
// };
//         var articles = [];
//         // try{
//           // await axios.get(url).then(resp => {
//             const $ = cheerio.load(resp.data);
//             articles = $(".article .island");
//             for(let i = 0; i < articles.length; i++){
//               data.push(articles[i].children[1].children[1].children[0].data)
//               data.push(articles[1].children[1].children[1].attribs.href)
//             }
//             // return data
//             // var name = articles[1].children[1].children[1].children[0].data;
//             // var url = articles[1].children[1].children[1].attribs.href;
//             // console.log(articles[1].children[1].children[1].children[0].data);
//           // })
//         // }
//         // catch(e){
//         //     console.log(e);
//         // }
//       })

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);
// var articles = [];

// try{
//   axios.get(url).then(resp => {
//     const $ = cheerio.load(resp.data);
//     articles = $("article");
//     console.log(articles);
//   })
// }
// catch(e){

// }
// data.then((value) => {
//   console.log("is this working my g" + value);
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<App/>} />
    <Route path="/AllNews" element={<AllNews/>} />
     

  </Routes>
    {/* <App /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
