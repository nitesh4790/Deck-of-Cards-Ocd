const express = require('express');
var router = express.Router();
var db = require('../config/db');


router.get('/',function(req,res){
	if(req.session.email)	
		res.render('deck');
	else
		res.render('index_1');
})


router.get('/logout',function(req,res){
	req.session.destroy(function(){
		res.redirect('/');		
	});	
})



module.exports = router;