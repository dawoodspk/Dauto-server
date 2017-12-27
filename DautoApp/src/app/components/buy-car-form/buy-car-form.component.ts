import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http'
import { HttpService } from '../../http.service'
//import { UserService } from '../../user.service';
@Component({
  selector: 'app-buy-car-form',
  templateUrl: './buy-car-form.component.html',
  styleUrls: ['./buy-car-form.component.css'],
})
export class BuyCarFormComponent implements OnInit {
  public input:any;
  constructor(private router:Router, private http :HttpService) {
    this.input = {
      "name":"",
      "email":"",
      "number":"",
      "type":"",
      "brand":"",
      "model":"",
    };
   }
   data1(){
    var url='buycarForm';
    this.http.addData(url,this.input).subscribe(data=>{
      if(data.statusCode==200){
        console.log("data sent");
        this.router.navigate(['/success']);
      }
    },err=>{
       console.log("error",err);
    });
  }
  onClick(){
    this.data1();
  }
  ngOnInit() {
  }

}
