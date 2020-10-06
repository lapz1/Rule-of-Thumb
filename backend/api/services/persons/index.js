const usersModel = require('./../../models/users');
const personsModel = require('./../../models/persons');
const voteModel = require('./../../models/votes');

const verifyPerson = (req, res, next) => {
	var name = req.body.name;
	personsModel.find({name: name})
	.then(persons=>{
		if(persons.length == 0){
			next();
		} else {
			res.send({resp: 'This person already exist.'});
		}
	});
};

const getPersons = (req, res) => {
	var id = req.params.id;	
	personsModel.find({_id: id}, (err, persons)=>{
		usersModel.populate(persons, {path: 'userId'},(err, persons)=>{
			res.status(200).send(persons);
		});
	});
}

const getUserPersons = (req, res) => {
	var id = req.params.id;
	personsModel.find({userId: id}, (err, persons)=>{
		usersModel.populate(persons, {path: 'userId'},(err, persons)=>{
			res.status(200).send(persons);
		});
	});
}

const loadPersons = (req, res) => {
	personsModel.find({})
	.then(persons=>{
		res.status(200).send(persons);
	});
}

const createPersons = (req, res) => {
	const person = {
		name: req.body.name,
		category: req.body.category,
		description: req.body.description,
		imagesrc: req.body.imagesrc,
		thumbUp: 0,
		thumbDown: 0
	};

	personsModel.create(person)
	.then(() => {
		res.status(200).send({resp: 'Person created'});
	});
}

const updatePersons = (req, res) => {
	res.status(200).send({resp: 'Person updated'});
}

const deletePersons = (req, res) => {
	var id = req.params.id;
	personsModel.findByIdAndDelete(id)
	.then(persons=>{
		if(persons.length == 0){
			res.status(200).send({resp: 'The person does not exist'});
		} else {
			res.status(200).send({resp: persons.name + ' deleted'});
		}
	});
}

module.exports = {
	verifyPerson,
	getPersons,
	getUserPersons,
	loadPersons,
	createPersons,
	updatePersons,
	deletePersons
};