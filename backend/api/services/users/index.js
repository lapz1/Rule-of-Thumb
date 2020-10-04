const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usersModel = require('./../../models/users');
const dateUtilities = require('./../../utilities/date');
const config = require('./../../../config');

const verifyUser = (req, res, next) => {
	const token = req.headers['x-access-token'];
    let decoded;    
    try{
        decoded = jwt.verify(token, config.server.tokenKey);
        req._id = decoded._id;
    }catch(error){
        decoded = false;
    }
	
	if(!!decoded){
		next();
	} else {
		res
		.status(500)
		.send({resp: 'Unauthorized user'});	
	}	
};

const getUser = (req, res) => {
	var id = req.params.id;
	usersModel.findById(id)
	.then(users=>{
		if(users.length == 0){
			res.send({resp: 'The user does not exist'});
		} else {
			console.log(users);
			res.send({resp: 'The user is: '+ users.content});
		}
	});
}

const loadUsers = (req, res) => {
	usersModel.find({})
	.then(users=>{
		res.status(200).send(users);
	});
}

const createUser = (req, res) => {
	const plainPassword = req.body.password;
	const salt = bcrypt.genSaltSync(parseInt(config.server.saltRounds));
	const hash = bcrypt.hashSync(plainPassword, salt);

	const user = {
		username: 	req.body.username,
		name: 		req.body.name,
		lastname: 	req.body.lastname,
		age: 		req.body.age,
		marital: 	req.body.marital,
		email: 		req.body.email,
		password: 	hash	
	};

	usersModel.create(user)
	.then(() => {
		res.send({resp: 'User created'});
	});
}

const updateUser = (req, res) => {
	res.send({resp: 'User updated'});
}

const deleteUser = (req, res) => {
	var id = req.params.id;
	usersModel.findByIdAndDelete(id)
	.then(users=>{
		if(users.length == 0){
			res.send({resp: 'The user does not exist'});
		} else {
			res.send({resp: users.username + ' deleted'});
		}
	});
}

const loginUser = (req, res) => {
	const user = {
		username: 	req.body.username,
		password: 	req.body.password
	};

	usersModel.find({username: user.username})
	.then(users=>{
		if(bcrypt.compareSync(user.password, users[0].password)){
			const token = jwt.sign({_id: users[0]._id}, config.server.tokenKey);
			res.send(JSON.stringify({
				token: token, 
				user: user.username,
				resp: 'User: ' + user.username + ' Token: ' + token
			}));
		}else{
			res.send({resp: 'Invalid credentials'});
		}
	});
}

module.exports = {
	verifyUser,
	getUser,
	loadUsers,
	createUser,
	updateUser,
	deleteUser,
	loginUser
};