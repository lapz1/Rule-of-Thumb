const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'votes';
const votesSchema = new Schema({
	personsId:{
		type: Schema.ObjectId, 
		ref: 'persons'
	},
	userId:{
		type: Schema.ObjectId, 
		ref: 'users'
	},
	thumb: {
		type: Boolean,
		required: true
	},
},{
    timestamps: true
});

const messageModel = mongoose.model(collection, votesSchema);

module.exports = messageModel;