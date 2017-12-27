import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { UserSignup } from './user-signup';
//import { Headers } from '@angular/http/src/headers';
//import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class UserService {
  private _url = "/api/signup";
  private _posturl = "/api/signup";
  private isUserLoggedIn;
  private isUser;
  private email;
  constructor(private _http: Http) {
    this.isUserLoggedIn = false;
   }

    setUserLoggedIn(){
      this.isUserLoggedIn = true;     
    }

    getUserLoggedIn(){
      return this.isUserLoggedIn;  }   
    //   getData(){

    //     return this._http.get(this._url)
    //     .map((response: Response) => response.json());
    // }

//     addData(user: UserSignup){
// let headers = new Headers({ 'Content-Type': 'application/json'});
// //let options = new RequestOptions({headers: headers});

// return this._http.post(this._posturl , JSON.stringify(user) , options)
// .map((response: Response) => response.json());

//     }

}
