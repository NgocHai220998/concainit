const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000
const questions = require('./questions')
const questionsVN = require('./questions-vn')

const cors = require('cors')
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
