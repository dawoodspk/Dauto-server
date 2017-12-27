var mongoose=require('mongoose');

var rentcar={
    title:"rentcar",
    statusCode:200
}

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://myapp:hamza123@ds159676.mlab.com:59676/myapp", { useMongoClient: true });

var rentCar = mongoose.Schema({
    pickL:{
        type:String,
        required:true,
        multi:true
    },
    pickDT:{
        type:String,
        required:true,
        multi:true
    },
    dropL:{
        type:String,
        required:true,
        multi:true
    },
    dropDT:{
        type:String,
        required:true,
        multi:true
    },
    name:{
        type:String,
        required:true,
        multi:true
    },
    email:{
        type:String,
        required:true,
        multi:true
    },
    number:{
        type:Number,
        required:true,
        multi:true
    },
    }, { collection:'rentcar'});

    
var model= mongoose.model('rentcar',rentCar);

rentcar.addData = function(req,res){

var postBody =req.body;
var data ={
   pickL: postBody.pickL,
   pickDT: postBody.pickDT,
   dropL: postBody.dropL,
   dropDT: postBody.dropDT,
   name: postBody.name,
   email: postBody.email,
   number: postBody.number,
      
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

rentcar.getData = function(req,res){
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
 
     rentcar.deleteData = function(req,res){

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


module.exports=rentcar; 