const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	firstname: { type: String, trim: true },
	lastname: { type: String, trim: true },
	email: { type: String, unique: true, trim: true },
	phonenumber: { type: String, unique: true, trim: true },
	password: { type: String, unique: true, trim: true },
	address: { type: String, trim: true },
	maritalstatus: { type: String, enum: ["select", "single", "married", "others"] },
  role: { type: String, enum: ["manager", "parking-unit", "battery-unit", "car-tire-clinic"]},
	
});

module.exports = mongoose.model('User', userSchema);