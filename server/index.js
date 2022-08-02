require('dotenv').config()
const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/dist/') });
});

app.use(bodyParser.json())



const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
app.listen(PORT, LOCAL_ADDRESS, () => {
  console.log('server listening at 3000');
});

//