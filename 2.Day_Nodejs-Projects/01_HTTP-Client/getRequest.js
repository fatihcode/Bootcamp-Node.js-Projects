const https = require('https')


// let request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2', (res) => {
//    if (res.statusCode !== 200) {
//       console.error(`Did not get an OK from the server. Code:${res.statusCode}`);
//       res.resume();
//       return;
//    }

//    let data = '';

//    res.on('data', (chunk) => {
//       data += chunk;
//    });

//    res.on('close', () => {
//       console.log('Retrieved all data');
//       console.log(JSON.parse(data));
//    });

//    request.on('error', (err) => {
//       console.error(`Encountered an error trying to make a request: ${err.message}`)
//    })
// })


//------------------------------------------------


const options = {
   host: 'jsonplaceholder.typicode.com',
   path: '/users?_limit=2',
   method: 'GET',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
   }
};

let req = https.request(options, (res) => {

   if (res.statusCode !== 200) {
      console.error(`Did not get an OK from the server. Code:${res.statusCode}`);
      res.resume();
      return;
   }

   let data = '';

   res.on('data', (chunk) => {
      data += chunk;
   });

   res.on('close', () => {
      console.log('Retrieved all data');
      console.log(JSON.parse(data));
   });

   req.on('error', (err) => {
      console.error(`Encountered an error trying to make a request: ${err.message}`)
   })
})

req.end();