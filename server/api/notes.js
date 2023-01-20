const router = require('express').Router()
const { models: { Notebook, Note }} = require('../db')

// Get all notes for a specific Notebook, include notebook
// /api/notes/:notebookId
router.get('/:notebookId', async (req, res, next) => {
  try {
    const notebooks = await Note.findAll({
      where: { notebookId: req.params.notebookId},
      include: { model: Notebook }
     
    })
    res.json(notebooks)
  } catch (err) {
    next(err)
  }
});



module.exports = router
