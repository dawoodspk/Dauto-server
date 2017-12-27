var mongoose=require('mongoose');

var sellcar=
{
title:"sellcar",
statusCode :200
}

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://myapp:hamza123@ds159676.mlab.com:59676/myapp", { useMongoClient: true });

 var sellCar =mongoose.Schema({

brand:{
    type:String,
    required:true
},
model:{
    type:String,
    required:true
},
year:{
    type:Number,
    required:true,
    unique:false
},
mileage:{
    type:Number,
    required:true
},
registration:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
name:{
    type:String,
    required:true
},
mobile:{
    type:Number,
    required:true
},
}, { collection:'sellcar'});

var model= mongoose.model('sellcar',sellCar);

 sellcar.addData = function(req,res){

var postBody =req.body;
var data ={
    brand: postBody.brand,
    model: postBody.model,
    year: postBody.year,
    mileage: postBody.mileage,
    registration: postBody.registration,
    email: postBody.email,
    name: postBody.name,
    mobile: postBody.mobile
    
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
        res.send({
             statusCode:200,
            message: 'Data saved'
         })
    }
})
}


sellcar.getData = function(req,res){
    model.find({},function(err,data1){
         if(err){
             console.log(err);
             res.send({
                statusCode:500,
                message: 'Data is did not get'
     
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

     sellcar.deleteData = function(req,res){

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


module.exports=sellcar;