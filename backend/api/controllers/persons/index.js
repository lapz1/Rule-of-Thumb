const express = require('express');
const router = express.Router();

const users = require('./../../services/users');
const persons = require('./../../services/persons');

router.route('/')
	.get((req, res) => {		
		persons.loadPersons(req, res);
	})
	.post(users.verifyUser, persons.verifyPerson, (req, res) => {		
		persons.createPersons(req, res);
	});

router.route('/:id')
	.get((req, res) => {
		persons.getPersons(req, res);
	})
	.delete(users.verifyUser, (req, res) => {
		persons.deletePersons(req, res);
	})
	.put(users.verifyUser, (req, res) => {
		persons.updatePersons(req, res);
	});

router.route('/users/:id')
	.get((req, res) => {
		persons.getUserPersons(req, res);
	})

module.exports = router;