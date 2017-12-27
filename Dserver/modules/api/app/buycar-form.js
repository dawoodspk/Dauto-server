var mongoose=require('mongoose');

 var buycarform=
{
title:"BuyCarForm",
statusCode :200
}

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://myapp:hamza123@ds159676.mlab.com:59676/myapp", { useMongoClient: true });

var BuyCarForm = mongoose.Schema({

name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
mobileNumber:{
    type:Number,
    required:true,
    },
type:{
    type:String,
    required:true
},
brand:{
    type:String,
    required:true
},
model:{
    type:String,
    required:true,
},
}, { collection:'buycarform'});

var model= mongoose.model('buycarform',BuyCarForm);

buycarform.addData = function(req,res){

var postBody =req.body;
var data ={
    name: postBody.name,    
    email: postBody.email,
    mobileNumber: postBody.number,
    type: postBody.type,
    brand: postBody.brand,
    model: postBody.model
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

buycarform.getData = function(req,res){
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

     buycarform.deleteData = function(req,res){

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


module.exports=buycarform;