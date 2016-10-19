var express = require('express');
var router = express.Router();
var Users = require('../models/user');

/* GET users listing. */
router.get('/user', function(req, res, next) {
  Users.find({}, function(err, User){
    res.json({
      users: User
    });
  });
});

router.get('/users/delete', function(req, res, next) {
  Users.remove({}, function(err) {
  if (err) console.log(err);
      res.status(200).json({
          message: "Game Over"
      })
  })
});

router.post('/user/new', function(req, res, next) {
  Users.find({}, function(err, User){
    //create a new user called chris
    var user = new Users(req.body);
    user.save(function(err) {
      if (err) throw err;
      console.log('User saved successfully!');
    });
    res.json({
      Message: "User Added "
    });
  });
});

router.post('/login', function(req, res, next) {
  Users.findOne({email: req.body.email}, function(err, user){

  if (user && user.password == req.body.password) {
    req.session.user = user.id;
    res.redirect("/");

  } else {

    if (err) {
      console.log(err.message);
    } else {
      console.log("There's no user with those credentials!");
    }

    res.json({ Message: "Fail"});
  }
});
});


module.exports = router;
