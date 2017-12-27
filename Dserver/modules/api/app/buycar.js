 var mongoose=require('mongoose');

 var buycar=
{
title:"buycar",
statusCode :200
}

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://myapp:hamza123@ds159676.mlab.com:59676/myapp", { useMongoClient: true });

 var buyCar =mongoose.Schema({
brand:{
    type:String,
    required:true
},
model:{
    type:String,
    required:true,
},
specification:{
    type:String,
    required:true,
},
}, { collection:'buycar'});

 var model= mongoose.model('buycar',buyCar);

 buycar.addData = function(req,res){

var postBody =req.body;
var data ={
    brand: postBody.brand,
    model: postBody.model,
    specification: postBody.specification
    
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
            message: 'Data saved',
        
         })
    }
})
}

buycar.getData = function(req,res){
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
    
    
    buycar.deleteData = function(req,res){

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


        buycar.updateData = function(req,res){

            var postBody =req.body;
            var data ={
                brand: postBody.brand,
                model: postBody.model,
                specification: postBody.specification
                
            }
            
            var updateid = req.params.id;
            model.findByIdAndUpdate(updateid,data,function(err,data1){
                if(err){
                    console.log(err);
                    res.send({
                       statusCode:500,
                       message: 'Data is not update'
            
                    })
                }else {
                    res.send({
                         statusCode:200,
                        message: 'Data updated',
                    
                     })
                }
            })
            }
                
module.exports=buycar;