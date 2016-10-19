var express = require('express');
var router = express.Router();
var PublicPosts = require('../models/publicPost.js')

/* GET home page. */
router.get('/posts', function(req, res, next) {
  PublicPosts.find({}, function(err, PublicPost){
  res.json({
    publicPosts: PublicPost
  });

//   // create a new user called chris
//   var post1 = new PublicPosts({
//     title: 'Sample 6',
//     message: 'Public Post 9',
//     author: 'Jack Ken',
//     author_img: '/public/img/me2.jpg',
//     isPublic: true
//
//   });
//
//
//   // call the built-in save method to save to the database
//   post1.save(function(err) {
//     if (err) throw err;
//
//     console.log('User saved successfully!');
//   });
//
//
//
//
});


});

router.get('/delete', function(req, res, next) {
  PublicPosts.remove({}, function(err) {
        if (err) console.log(err);
            res.status(200).json({
                message: "Game Over"
            })

    })
});



/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('index',{title:"Jack"});
});



module.exports = router;
