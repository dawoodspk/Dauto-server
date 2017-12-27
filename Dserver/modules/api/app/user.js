var mongoose=require('mongoose');

var crud=
{
title:"users",
statusCode :200
}

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://myapp:hamza123@ds159676.mlab.com:59676/myapp", { useMongoClient: true });

var users =mongoose.Schema({

firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
}, { collection:'users'});

var model= mongoose.model('users',users);

crud.addData = function(req,res){

var postBody =req.body;
var data ={
    firstName: postBody.firstname,
    lastName: postBody.lastname,
    email: postBody.email,
    password: postBody.password

}

var saveData =new model(data);
saveData.save(function(err,data1){
    if(err){
        console.log(err);
        res.send({
           statusCode:500,
           message: 'Data is not saved'

        })
    }else {
        console.log(data1);
        res.send({
             statusCode:200,
            message: 'Data saved'
         })
    }
})
}


crud.signin = function (req,res){
    var postBody =req.body;
var data ={
    email: postBody.email,
    password: postBody.password

}

    model.find({email:data.email,password:data.password},function(err,data1){
        if(err){
            console.log(err,data);
            res.send({
                statusCode:500,
                message:"error",
                data:err
            })
        }
        else if(data1.length!=0){console.log(data1);
            res.send({
                statusCode:200,
                message:"logged in",
                data:data1
            })
        }
        else{
            res.send({
                statusCode:400,
                message:"email not match"
            })
        }
    })
}


crud.getData = function(req,res){
    model.find({},function(err,data1){
         if(err){
             console.log(err);
             res.send({
                statusCode:500,
                message: 'Data did not get'
     
             })
         }else {
             res.send({
                  statusCode:200,
                 message: 'Data Get!',
                 data:data1
              })
         }
     })
     }

     crud.deleteData = function(req,res){

        var postBody =req.params.id;

        model.findByIdAndRemove(postBody,function(err,data1){
            if(err){
                console.log(err);
                res.send({
                   statusCode:400,
                   message: 'Data is not deleted',
                    data:data1
                })
            }else {
                res.send({
                     statusCode:200,
                    message: 'Data deleted successfully',
                    data:data1
                 })
            }
        })
        }
 


module.exports=crud;