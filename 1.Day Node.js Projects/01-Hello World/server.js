const http = require('http')

const server = http.createServer((req, res) => {

   if (req.url === '/') {
      res.write('<h1>Hello World!</h1>')

   } else if (req.url === '/student') {
      res.write('<h1>This is Home Page!</h1>')

   } else if (req.url === '/admin') {
      res.write('<h1>This is Admin Page!</h1>')

   } else if (req.url === '/data') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify({ message: 'This is a from web server!' }))
      
   } else {

      res.end("invalid request")
   }
   res.end()
})

server.listen(3000)