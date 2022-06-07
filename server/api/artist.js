const router = require('express').Router();
const { Artist } = require('../db')


router.get('/', async (req, res, next) => {
  try {
    res.send(await Artist.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
