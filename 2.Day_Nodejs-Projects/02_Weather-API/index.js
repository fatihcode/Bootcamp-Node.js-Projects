require('dotenv').config();
const request = require('request');
const http = require('http')

const apiKey = process.env.API_KEY

const server = http.createServer((req, res) => {

   res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })
   res.write('<html lang="en"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Weather Node.js</title></head><body>')
   res.write(`<div><form action="/" method="post"><input name="city" type="text" placeholder="Enter a City" required> <input type="submit" value="Get Weather"></form></div>`);

   let body = ""
   let weather = ""
   let message = ""

   req.on("data", function (chunk) {

      body += chunk;
      // console.log(body);
      let city = body.split("=")[1];
      console.log(city);


      let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

      request(url, function (err, res, body) {
         if (err) {
            console.log('error:', error);

         } else {
            // console.log('body:', JSON.parse(body));
            weather = JSON.parse(body)
            message = `<h2> Location :${weather.location.name}</h2><h1> Temp :${weather.current.temperature}</h1>`

            console.log(message);
            res.write(message)
         }
      });
   })

   
   res.write('</body></html>')
   res.end()
})

server.listen(5000)