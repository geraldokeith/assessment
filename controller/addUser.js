const User = require("../models/User");

const addUser = async (req, res) => {
	try {
		if (
			!req.body.firstname ||
			!req.body.lastname ||
			!req.body.email ||
			!req.body.phonenumber ||
			!req.body.password ||
			!req.body.role
		) {
			throw new Error("Invalid or missing fields");
		}

		const newUser = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			phonenumber: req.body.phonenumber,
			address: req.body.address,
			postalcode: req.body.postalcode,
            gender: req.body.gender, 
		});

		await newUser.save();
		// return a reponse
		res.status(200).json({
			success: "User saved",
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({
			error: `${error.message}`,
		});
	}
};

module.exports = {addUser};