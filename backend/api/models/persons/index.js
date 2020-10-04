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
	}
},{
    timestamps: true
});

const personsModel = mongoose.model(collection, personsSchema);

module.exports = personsModel;