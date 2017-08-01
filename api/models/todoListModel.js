'user strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema  = new Schema({
	firstName:String,
	lastName: String,
	createdOn:{
		type:Date,
		default:Date.now()
	}
});

module.exports = mongoose.model('User',UserSchema);