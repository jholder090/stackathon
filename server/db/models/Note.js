const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false });

module.exports = Note;

