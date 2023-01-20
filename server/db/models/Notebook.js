const Sequelize = require("sequelize");
const db = require("../db");

const Notebook = db.define('notebook', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, { timestamps: false });

module.exports = Notebook;
