import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-admin-userentry',
  templateUrl: './admin-userentry.component.html',
  styleUrls: ['./admin-userentry.component.css'],
  providers: [HttpService]
})
export class AdminUserentryComponent implements OnInit {
  mydata;
  get(){
    var url='getuser';
    this.http.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }
  public td:any;
  constructor(private http : HttpService) {
    this.td = {
      "_id":""
    }
   }

   deleteData(id){
    var url = 'deluser/'+id;
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
