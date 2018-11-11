const router = require('express').Router()
const Appointement = require('../db/models/appointmt')
const cors = require('cors')
const twilio = require('twilio')

const accountSid = process.env.SID
const authToken = process.env.APKEY
const client = new twilio(accountSid, authToken)

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const appnts = await Appointement.findAll()
    res.send(appnts)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const appnts = await Appointement.create(req.body)
    if (appnts) {
      client.messages
        .create({
          body: `Hello ${
            req.body.name
          }, your appointment with Aunty Salon has been confirm at ${
            req.body.time
          } ${req.body.day} thanks to you fidelite`,
          to: req.body.number,
          from: '+13312446019'
        })
        .then(() => {})

      res.send(appnts)
    }
  } catch (err) {
    console.log(err)
    next(err)
  }
})
