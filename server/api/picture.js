const router = require('express').Router()
const Picture = require('./db.json')

router.get('/', async (req, res, next) => {
  try {
    res.json(Picture)
    //console.log('Picture', Picture)
  } catch (err) {
    next(err)
  }
})

module.exports = router
