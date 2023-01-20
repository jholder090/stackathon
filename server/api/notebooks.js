const router = require('express').Router()
const { models: { Notebook, Note }} = require('../db')

// /api/notebooks/:id
router.get('/:id', async (req, res, next) => {
  try {
    const notebooks = await Notebook.findAll({
      where: { userId: req.params.id},
      include: { model: Note }
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    })
    res.json(notebooks)
  } catch (err) {
    next(err)
  }
})

module.exports = router
