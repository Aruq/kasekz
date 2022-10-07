import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from "@environment/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public postMethod(url: string, body: any): Observable<any> {
    return this.http.post(environment.apiUrl + url, body)
  }

  public getMethod(url: string): Observable<any> {
    return this.http.get(environment.apiUrl + url);
  }
}
