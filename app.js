const express = require('express');
const app = express();
module.exports = app;

let morgan = require('morgan')
app.use(morgan('tiny'))

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ "ping": "pong" })
    // console.log(`${req.body}`)
})
  