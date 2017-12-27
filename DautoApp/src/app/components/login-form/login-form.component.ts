import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import "rxjs/Rx";
import { Input } from '@angular/core'
import { HttpService } from '../../http.service'
import { UserService } from '../../user.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public input:any;
  public check=false;
  public check1=false;
  constructor(private http:HttpService, private router:Router, private user:UserService) {
    this.input = {
      "email":"",
      "password":""
    };
   }
   
 data1(){
   var url='signin';
   this.http.addData(url,this.input).subscribe(data=>{
     if(data.statusCode==200){
     this.router.navigate(['/']);
     }
     else if(data.statusCode==400){
        this.check1=true;
     }
     
   },err=>{
      console.log("error",err);
   });
//    if(this.input.email !== "admin" && this.input.password !== "admin" ){
//     this.check=true;
//  }
 }

// onClick(){
//   if(this.input.email !== "admin" && this.input.password !== "admin" ){
//     this.check=true;
//   }
// }
loginUser(){
     if(this.input.email == "admin" && this.input.password == "admin"){
       this.user.setUserLoggedIn();  
      this.router.navigate(['dash/board']);
    }
}

      
  ngOnInit() {
    //this.get();
  }
  // onclick(){
  //   console.log(this.input);
    
  // }
  // mydata=this.input;
  // get(){
  //   var url="/signin"
  //   this.service.getData(url).subscribe(data => {
  //     console.log(data,"data")
  //     this.mydata=data.data
  //   },
  //   err =>{
  //     console.log(err , "error")
  //   }
  // )
  // }
}
