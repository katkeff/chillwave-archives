const Sequelize = require('sequelize')
const db = require('./db')

const Song = db.define('song', {
  name: Sequelize.STRING
})

module.exports = Song
