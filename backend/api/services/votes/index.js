const usersModel = require('./../../models/users');
const personsModel = require('./../../models/persons');
const votesModel = require('./../../models/votes');
const dateUtilities = require('./../../utilities/date');

const getVotes = (req, res) => {
	var id = req.params.id;	
	votesModel.find({personsId: id}, (err, votes)=>{
		personsModel.populate(votes, {path: 'personsId'},(err, votes)=>{
			usersModel.populate(votes, {path: 'userId'},(err, votes)=>{
				res.status(200).send(votes);
			});
		});
	});
}

const createVotes = (req, res) => {
	const vote = {
		thumb: req.body.thumb,
		personsId: req.body.personsId,
		userId: req._id
	};

	votesModel.create(vote)
	.then(() => {
		res.send({resp: 'Vote created'});
	});
}

module.exports = {
	getVotes,
	createVotes
};