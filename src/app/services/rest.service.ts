import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private server: string = "http://127.0.0.1:3333/"

  constructor(public http: HttpClient) { }

  request<T>(method: string, url: string, body?: any): Promise<T> {

    return new Promise((resolve, reject) => {

      let _params = new HttpParams();
      let _headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      });


      if (!body) body = {};

      let options = {
        body: JSON.stringify(body),
        headers: _headers,
        params: _params
      }

      let request = this.http.request<T>(method, this.server + url, options).pipe(take(1)).toPromise();

      request.then(result => {
        resolve(result)
      }).catch(error => {
        reject(error);
      })
    })
  }
}
