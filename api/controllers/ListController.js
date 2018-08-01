/**
 * ListController
 *
 * @description :: Server-side logic for managing lists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    city:function(req,res){
        Place.find({}).exec(function(err,data){
            if(err)
                res.send(500,{error:"database error"});
            res.view("listofcity",{cities:data});
        });
    },
    saved:function(req,res){

        var userid = req.body.ud;
        var placeid= req.body.city;
        Saved.create({userId:userid,placeId:placeid}).exec(function(err){
            if(err)
                res.send(500,{error:"database error"});
            res.redirect("/list/city");
        });
    },
    likedlist:function(req ,res){

        var userid = req.body.r;

        Saved.find({}).exec(function(err,data){
            if(err)
                res.send(500,{error:"database error"});
            res.view("likedpage",{pages :data});
        });

    }
	
};

