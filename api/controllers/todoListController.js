'user strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.createUser = function(req,res){
	var user = new User(req.body);
	user.save(function(err){
		if(err)
			res.send(err);
		res.json({message:'new user created'});
	});
};

exports.listUser = function(req,res){
	User.find({},function(err,user){
		if (err)
			res.send(err);
		res.json(user);
	})
};
exports.getUser = function(req,res){
	User.findOne({'firstName':req.params.firstName},function(err,user){
		if (err){
			res.send(err);
		}
		else {
            res.json(user);
        }
	});
};
exports.update_a_task = function(req, res) {
    User.findOneAndUpdate({'firstName': req.params.firstName}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};