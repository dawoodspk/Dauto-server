import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin-rentcar',
  templateUrl: './admin-rentcar.component.html',
  styleUrls: ['./admin-rentcar.component.css']
})
export class AdminRentcarComponent implements OnInit {

public input:any;


  mydata ;

  get(){
    var url='getrentcar';
    this.http.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }


  constructor(private http : HttpService) {
    this.input = {
      "pickL":"",
      "pickDT":"",
      "dropL":"",
      "dropDT":"",
      "name" : "",
      "email" : "",
      "number" : ""
    }

    
   }
   getData(){
    console.log(this.input);
    }

    deleteData(id){
      var url = 'delrentcar/'+id;
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
