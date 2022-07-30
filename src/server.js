const express = require('express'); //Line 1
const app = express(); //Line 2
const cheerio = require('cheerio');
const axios = require('axios');
const { data } = require('cheerio/lib/api/attributes');
const port = process.env.PORT || 3000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
// app.set('port', port)
// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
//    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  

  var url = "https://www.birmingham.ac.uk/university/colleges/eps/eps-community/students/societies/ubrobotics.aspx";
  var articles = [];
  data = [];
  try{
    axios.get(url).then(resp => {
        // console.log(String(resp.data))
    //   console.log(resp.json);
    //   console.log(resp.text);
    //   console.log(resp.getbody());

      const $ = cheerio.load(String(resp.data));
      articles = $(".article .island");
      for(let i = 0; i < articles.length; i++){
        data.push(articles[i].children[1].children[1].children[0].data)
        data.push(articles[1].children[1].children[1].attribs.href)
      }
      res.send(String(data))

      // var name = articles[1].children[1].children[1].children[0].data;
      // var url = articles[1].children[1].children[1].attribs.href;
      // console.log(articles[1].children[1].children[1].children[0].data);
    })
  }
  catch(e){
      console.log(e);
      res.send(String(e))

  }
  console.log("help");

}); //Line 11