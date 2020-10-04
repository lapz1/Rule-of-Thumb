const express = require('express');
const router = express.Router();

const users = require('./../../services/users');
const votes = require('./../../services/votes');

router.route('/')
	.post(users.verifyUser, (req, res) => {
		votes.createVotes(req, res);
	});

router.route('/:id')
	.get((req, res) => {
		votes.getVotes(req, res);
	});

module.exports = router;