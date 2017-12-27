import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin-sellcar',
  templateUrl: './admin-sellcar.component.html',
  styleUrls: ['./admin-sellcar.component.css'],
  providers:[HttpService]
})
export class AdminSellcarComponent implements OnInit {
  public input:any;
 
  mydata ;

  get(){
    var url='getsellcar';
    this.http.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }



  constructor(private http:HttpService) {
   this.input =  {
      "brand":"",
      "model":"",
      "year":"",
      "mileage":"",
      "registration":"",
      "name":"",
      "email":"",
      "number":""
   }
   }

   deleteData(id){
    var url = 'delsell/'+id;
    this.http.deleteData(url).subscribe(data1 => {
     
      console.log(data1, "Delete data from db")
    },
      err => {
        console.log(err, "error")
      }
    )
  }

   onClick(mydata){
    this.deleteData(mydata._id);
    console.log(mydata._id);
  }

  ngOnInit() {
    this.get();
  }

}
