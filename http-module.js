const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('WELCOME TO OUR HOME PAGE')
    return
  }
  if (req.url === '/about') {
    res.end('WELCOME TO OUR HISTORY PAGE')
    return
  }
  res.end(`'WE CAN'T SEEM TO FIND ANY PAGE`)
})

server.listen(5000)
