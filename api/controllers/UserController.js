/**
 * UserController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    userlist: function( req , res){
        
        User.find({}).exec(function( err , listofdata){
            if(err)
                res.send(500,{error:"database error"});
            res.view("user",{users:listofdata});
        });
    }

};

