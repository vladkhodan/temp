// var express = require('express');
// var router = express.Router();
//
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
//
// router.post('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
//
// module.exports = router;

var express = require('express');
var router = express.Router();

var modelUser = require('../models/user');

/* GET authorization page. */
router.get('/', function(req, res, next) {

    var user = new modelUser({
        name:"Tom",
        login:"12345"
    })

    user.save(user).then(data=>console.log(data))

    res.render('authoriz', { title: 'Sigin' });
});


module.exports = router;