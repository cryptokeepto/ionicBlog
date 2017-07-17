import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FeedBack } from "../../models/feedback";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthProvider {

  url: string = "https://codingthailand.com/api";
    
  constructor(public http: Http) {}

  public postSignup(fullname: string, email: string, password: string): Observable<FeedBack> {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    let body = {
      fullname: fullname,
      email: email,
      password: password
    }

    return this.http.post(`${this.url}/insert_user.php`, body, options)
    .map((res: Response) => <FeedBack> res.json())
    .catch(this.handleError)
  }

  // auth0.com
  public postSignup2(fullname: string, email: string, password: string): Observable<boolean> {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    let body = {
      fullname: fullname,
      email: email,
      password: password
    }

    return this.http.post(`${this.url}/insert_user.php`, body, options)
    .map((res: Response) => <FeedBack> res.json())
    .catch(this.handleError)
  }

  private handleError(err: any) {
    return Observable.throw(err.json() || "เกิดข้อผิดพลาดจาก server");
  }
}
