const router = require('express').Router()
const { models: { Notebook, Note }} = require('../db')

// Get all notebooks for a specific user
// /api/notebooks/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const notebooks = await Notebook.findAll({
      where: { userId: req.params.userId},
      include: Note
    })
    res.json(notebooks)
  } catch (err) {
    next(err)
  }
});

// Get a specific notebook for a specific user
// /api/notebooks/:userId/:notebookId
// router.get('/:userId/:notebookId', async (req, res, next) => {
//   try {
//     const notebook = await Notebook.findByPk(req.params.notebookId)
//       // explicitly select only the id and username fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!

//     res.json(notebook)
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router
