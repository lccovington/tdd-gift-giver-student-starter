const express = require('express')
const router = express.Router()
module.exports = router;


// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

router.post('/pairs', function (req, res) {
    res.send('I work, I think');
  })

  router.post('/traditional', function (req, res) {
    res.send('I also work, I think');
  })