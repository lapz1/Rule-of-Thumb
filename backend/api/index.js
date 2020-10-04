const express = require('express');
const router = express.Router();

const users = require('./controllers/users');
const persons = require('./controllers/persons');
const votes = require('./controllers/votes');
const logger = require('./middleware/logger');

router.use(logger);
router.use('/users',users)
router.use('/persons',persons)
router.use('/votes',votes)

module.exports = router;