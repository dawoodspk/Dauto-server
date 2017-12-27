import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
import 'rxjs/add/operator/map'
//import { Response } from '_debugger';

@Injectable()
export class HttpService {

  baseurl = "http://localhost:3000/api/";
  constructor(private http:Http) { }

 

getData(url){
  return this.http.get(`${this.baseurl}${url}`).map(data =>{
    console.log(data.json())
    return data.json();
  })
}

addData(url,data){
  return this.http.post(`${this.baseurl}${url}`,data).map(data =>{
    console.log(data.json())
    return data.json();
  })
}
editData(url,data){
  return this.http.put(`${this.baseurl}${url}`,data).map(data =>{
    console.log(data.json())
    return data.json();
  })
}
deleteData(url){
  return this.http.delete(`${this.baseurl}${url}`).map(data =>{
    console.log(data.json())
    return data.json();
  })
}
}
