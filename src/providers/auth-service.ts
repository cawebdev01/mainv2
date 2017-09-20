import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  password : string;
  email: string;
 
  constructor(password: string, email: string) {
    this.password = password;
    this.email = email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  email;
  password;
  constructor(public http: Http){}
  public login(/*credentials*/email, password) {
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/authenticate.php?login='+email+'&password='+password+'&lang=en&NEWMOBILE=1').map((res:Response) => res.json());
    /*if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });
    }*/
  }
  
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}