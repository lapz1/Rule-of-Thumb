const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'persons';
const personsSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	imagesrc: {
		type: String,
		required: true
	},
	thumbUp: {
		type: Number,
		required: true
	},
	thumbDown: {
		type: Number,
		required: true
	},
},{
    timestamps: true
});

const personsModel = mongoose.model(collection, personsSchema);

module.exports = personsModel;