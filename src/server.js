const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))

app.use(express.static('src'));

app.listen(8080, function() {console.log('listening on 8080')} )

app.get('/write', function(req, res) { 
  res.sendFile(__dirname + '/write.html')
})

app.get('/beauty', function(req, res){
  res.send('뷰피용품 쇼핑할 수 있는 페이지입니다.')
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

// 어떤 사람이 /add경로로 POST요청을 하면, ??를 해주세요.
app.post('/add', function(req, res){
  res.send('전송완료')
  console.log(req.body.title)
})