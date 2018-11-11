const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Appointement = db.define('appointment', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  day: {
    type: Sequelize.STRING
  },
  time: {
    type: Sequelize.STRING
  }
})

module.exports = Appointement
