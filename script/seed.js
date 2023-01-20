'use strict'

const {db, models: {User, Note, Notebook} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!');



  // Creating Users
  const users = await Promise.all([
    User.create({ id: 1, username: 'joe', password: '123' }),
    User.create({ id: 2, username: 'des', password: '123' }),
  ]);

  console.log(`seeded ${users.length} users`);

  const notebooks = await Promise.all([
    Notebook.create({ title: "All Notes", userId: 1}),
    Notebook.create({ title: "All Notes", userId: 2}),
    Notebook.create({ title: "Work", userId: 1}),
    Notebook.create({ title: "Fun", userId: 1}),
    Notebook.create({ title: "Not Fun", userId: 1}),
    Notebook.create({ title: "Cool", userId: 1}),
    Notebook.create({ title: "School", userId: 1})
  ]);

  console.log(`seeded ${notebooks.length} notebooks`);

  const notes = await Promise.all([
    Note.create({ text: "Throw the football", userId: 1, notebookId: 1}),
    Note.create({ text: "Water the orchids", userId: 2, notebookId: 2}),
    Note.create({ text: "Call Theodin", userId: 1, notebookId: 3}),
    Note.create({ text: "Call Arwen", userId: 1, notebookId: 3})
  ]);

  console.log(`seeded ${notes.length} notes`)

  return {
    users: {
      joe: users[0],
      des: users[1]
    }
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
