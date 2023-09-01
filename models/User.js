const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	firstname: { type: String, trim: true },
	lastname: { type: String, trim: true },
	email: { type: String, unique: true, trim: true },
	phonenumber: { type: String, unique: true, trim: true },
	gender: { type: String, trim: true},
	address: { type: String, trim: true },
	date: { type: String, trim: true },
	
});

module.exports = mongoose.model('User', userSchema);