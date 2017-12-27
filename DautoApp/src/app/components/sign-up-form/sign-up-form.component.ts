import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { HttpService } from '../../http.service'
import { UserSignup } from '../../user-signup'
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
  providers:[HttpService]
})
export class SignUpFormComponent implements OnInit {

  public input:any;
  constructor(private _uservice: UserService ,private http : HttpService, private router:Router) {
    this.input = {
      firstname:"",
      lastname:"",
      email:"",
      password:"",
    };  
   }
   data1(){
     var url='add';
     this.http.addData(url,this.input).subscribe(data=>{
       if(data.statusCode==200){
      this.router.navigate(['signin']);
       }
     },err=>{
        console.log("error",err);
     });
   }
   onClick(){
     //console.log(this.input);
     this.data1();
     
   }
  ngOnInit() {
    //this.get();    
  }

}
