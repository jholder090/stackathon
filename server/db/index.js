//this is the access point for all things database related!


const db = require('./db')

const User = require('./models/User')
const Note = require('./models/Note')
const Notebook = require('./models/Notebook')

//associations could go here!
User.hasMany(Note);
Note.belongsTo(User);

Notebook.hasMany(Note);
Note.belongsTo(Notebook);

User.hasMany(Notebook);
Notebook.belongsTo(User);




module.exports = {
  db,
  models: {
    User,
    Note,
    Notebook
  },
}
