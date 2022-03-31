const https = require('https')


const options = {
   host: 'jsonplaceholder.typicode.com',
   path: '/users/1',
   method: 'PUT',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
   }
};




let req = https.request(options, (res) => {

   if (res.statusCode !== 201) {
      console.error(`Did not get an OK from the server. Code:${res.statusCode}`);
      res.resume();
      return;
   }

   let data = '';

   res.on('data', (chunk) => {
      data += chunk;
   });

   res.on('close', () => {
      console.log('Post all data');
      console.log(JSON.parse(data));
   });

   req.on('error', (err) => {
      console.error(`Encountered an error trying to make a request: ${err.message}`)
   })
})


const requestData = {
   id: 2,
   name: 'Ervin Howell',
   username: 'Antonette',
   email: 'Shanna@melissa.tv',
   address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771'
   },
   phone: '010-692-6593 x09125',
   website: 'anastasia.net',
   company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
   }
}

req.write(JSON.stringify(requestData))

req.end();