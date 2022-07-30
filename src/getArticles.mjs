import cheerio from 'cheerio'
import axios from 'axios'
// const cheerio = require('cheerio');
// const axios = require('axios');
let data = [];
export default (async () => {

  // var url = "university/colleges/eps/eps-community/students/societies/ubrobotics.aspx"
  var url = "university/colleges/eps/eps-community/students/societies/ubrobotics.aspx";
  var articles = [];
  data = [];
  try{
    await fetch(url).then(resp => {
      console.log(resp.json);
      console.log(resp.text);
      console.log(resp.getbody());

      const $ = cheerio.load(resp.json);
      articles = $(".article .island");
      for(let i = 0; i < articles.length; i++){
        data.push(articles[i].children[1].children[1].children[0].data)
        data.push(articles[1].children[1].children[1].attribs.href)
      }
      // var name = articles[1].children[1].children[1].children[0].data;
      // var url = articles[1].children[1].children[1].attribs.href;
      // console.log(articles[1].children[1].children[1].children[0].data);
    })
  }
  catch(e){
      console.log(e);
  }
  console.log("help");
  console.log(data);
})();

  /*Do stuff */
// function runWork(){

// }

export {data};