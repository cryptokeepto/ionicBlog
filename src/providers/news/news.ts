import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/observable";
import { News } from "../../models/News";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';


@Injectable()
export class NewsProvider {

  apiKey: string = "f7867876df4843bf8cafb3b6786319bd";
  source: string = "engadget";
  sortBy: string = "latest";
  apiUrl: string = `https://newsapi.org/v1/articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;

  constructor(public http: Http) {}

  public getNews(): Observable<News[]> {
    return this.http.get(this.apiUrl)
    .map((res: Response) => <News[]> res.json().articles)
    .catch(this.handleError);
  }

  private handleError(err: any) {
    return Observable.throw(err.json() || "เกิดข้อผิดพลาดจาก server");
  }
}

