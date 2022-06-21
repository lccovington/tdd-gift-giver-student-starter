const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  res.status(200).json({names: ""})
})

router.post('/pairs', function (req, res) {
    res.status(200).json(names)
  })

  router.post('/traditional', function (req, res) {
    res.status(200).json(names)
  })

  module.exports = router;