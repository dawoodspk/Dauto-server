import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';
//import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  public input:any;
  constructor(private http:HttpService, private router:Router) {
    this.input={
      pickL:"",
      pickDT:"",
      dropL:"",
      dropDT:"",
      name:"",
      email:"",
      number:""  
    };
   }
  
   data1(){
    var url='rentcar';
    this.http.addData(url,this.input).subscribe(data=>{
      if(data.statusCode==200){
        this.router.navigate(['/success']);
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
   }


}
