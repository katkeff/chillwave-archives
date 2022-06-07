const router = require('express').Router();

router.use('/artist', require('./artist'));

module.exports = router;
