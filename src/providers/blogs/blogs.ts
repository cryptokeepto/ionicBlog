import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Item } from "../../models/item";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class BlogsProvider {

  url: string = "https://codingthailand.com/api";

  constructor(public http: Http) {}

  public getBlogs(): Observable<Item[]> {
    return this.http.get(`${this.url}/get_courses.php`)
    .map((res: Response) => <Item[]> res.json())
    .catch(this.handleError);
  } 

  public getBlogDetail(id: number):Observable<Item[]> {
    return this.http.get(`${this.url}/get_course_detail.php?course_id=${id}`)
    .map((res: Response) => <Item[]> res.json())
    .catch(this.handleError);
  }

  private handleError(err: any) {
    return Observable.throw(err.json() || "เกิดข้อผิดพลาดจาก server");
  }

}
