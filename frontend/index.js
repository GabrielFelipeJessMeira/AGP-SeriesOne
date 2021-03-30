const express = require('express')
const app = express()

  app.use(express.static('html'))
  app.use(express.static('css'))
  app.use(express.static('images'))
  app.use(express.static('js'))



let server = app.listen(8080, function(){
  let port = server.address().port
  console.log("Server aberto em http://localhost:%s",port)
  console.log('ok');
})