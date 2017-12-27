import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import "rxjs/Rx";
import { Input } from '@angular/core';
import { HttpService } from '../../http.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.css'],
  providers:[HttpService]

})
export class SellCarComponent implements OnInit {

  public input:any;
  constructor(private http : HttpService, private router:Router) {
    this.input = {
      brand:"",
      model:"",
      year:"",
      mileage:"",
      registration:"",
      email:"",
      name:"",
      mobile:""
    };
   }
   data2(){
    var url='sellcar';
    this.http.addData(url,this.input).subscribe(data=>{
      if(data.statusCode==200){
        console.log("data saved");
        this.router.navigate(['/success']);
      }
    },err=>{
       console.log("error",err);
    });
  }
  onClick(){
    console.log(this.input);
    this.data2();
    
  } 

  ngOnInit() {
  }
  // public register(){
  //   this.http.post("link",JSON.stringify(this.input))
  //   .map(result => result.json())
  //   .subscribe(result => {
  //     this.router.navigate(["/login"]);
  //   });
  // }
}
