/*!
* THIS CODE IS FOR NON-COMMERCIAL USE ONLY
=========================================================
* Copyright Codetruck Software (https://codetruck.io)
* Coded by Codetruck Software
=========================================================
* The above copyright informs you that all code is under
  copyright and all the intelectual property rights are owned by Codetruck Software.
*/

const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: false,
	},
	phoneNumber: {
		type: String,
		required: false,
	},
	city: {
		type: String,
		required: false,
	},
	country: {
		type: String,
		required: false,
	},
	userType: {
		type: String,
		required: true,
	},
});

const users = mongoose.model('users', usersSchema);

module.exports = users;
