import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private httpclient:HttpClient) {
    
  }

  public fetchData(url):Observable<any>{
    return this.httpclient.get(url);
  }

  public sendData(url, data)
  {
    return this.httpclient.post(url, data);
  }
}
