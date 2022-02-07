import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly apiURL: string;
  constructor(private httpClient: HttpClient) {
    this.apiURL = 'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653';
  }

  public get(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiURL, {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}