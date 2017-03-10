var mongoose = require('mongoose');
var Scheme = mongoose.Schema;

var User = new Scheme({
    name: {
        type:String,
        require:true
    } ,
    login: {
        type:String,
        require:true
    }
});

module.exports = mongoose.model("User", User);