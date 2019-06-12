var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/customers')
var Post = require('./routes/post')
var Answers = require('./routes/answers')

app.use('/users', Users)
app.use('/posts', Post)
app.use('/answers', Answers)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
