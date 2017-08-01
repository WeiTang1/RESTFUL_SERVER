'user strict'
module.exports = function(app){
	var UserCtrl = require('../controllers/todoListController');
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
	app.post('/User',function(req,res){
		UserCtrl.createUser(req,res);
	});
	app.get('/User',function(req,res){
		UserCtrl.listUser(req,res);
	});
	app.get('/User/:firstName',function(req,res){
		UserCtrl.getUser(req,res);
	});
	app.put('/User/:firstName',function(req,res){
		UserCtrl.update_a_task(req,res);
	});

};