const tiktok = require('tiktok-scraper-without-watermark')
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})

app.post('/handle', (request,response) => {
    tiktok.tiktokdownload(request.body.url)
     .then(result => {
          console.log(result)
          response.json(result);
     })
     .catch(e => {
         console.log(e)
         response.json({error : "Error"})
     })
    console.log(request.body.url);
  });
