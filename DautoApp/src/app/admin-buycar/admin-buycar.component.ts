import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-buycar',
  templateUrl: './admin-buycar.component.html',
  styleUrls: ['./admin-buycar.component.css']
})
export class AdminBuycarComponent implements OnInit {
  public formOpen = false;
  public input:any;

  mydata ;

  get(){
    var url='getbuycar';
    this.http.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }

  formdata;

  get1(){
    var url='getbuycarForm';
    this.http.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.formdata = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }

 
constructor(private http : HttpService, private router : Router) {
    this.input = {
      brand:"",
      model:"",
      specification:""
    }
   }
   deleteData(id){
    var url = 'delbuycar/'+id;
    this.http.deleteData(url).subscribe(data1 => {
     
      console.log(data1, "Delete data from db")
    },
      err => {
        console.log(err, "error")
      }
    )
  }
  onclick(mydata){
    this.deleteData(mydata._id);
    console.log(mydata._id);
  }

  deleteData1(id){
    var url = 'delbuycarform/'+id;
    this.http.deleteData(url).subscribe(data1 => {
     
      console.log(data1, "Delete data from db")
    },
      err => {
        console.log(err, "error")
      }
    )
  }
  click(formdata){
    this.deleteData1(formdata._id);
    console.log(formdata._id);
  }

   

onClick(){
    this.formOpen = true;
  }
sendData(){
  this.data1();
}
 
data1(){
    var url='buycar';
    this.http.addData(url,this.input).subscribe(data=>{
      if(data.statusCode==200){
        this.router.navigate(['/dash/board']);
      }
    },err=>{
       console.log("error",err);
    });
  }

  ngOnInit() {
    this.get();
    this.get1();
  }

}
