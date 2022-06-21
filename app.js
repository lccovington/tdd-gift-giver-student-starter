const express = require('express');
const router = require("./routes/gift-exchange")
const app = express();
module.exports = app;

const morgan = require('morgan')
app.use(morgan('tiny'))

app.use(express.json());
app.use('/gift-exchange', router);

app.get('/', (req, res) => {
    res.status(200).json({ "ping": "pong" })
    // console.log(`${req.body}`)
})
  