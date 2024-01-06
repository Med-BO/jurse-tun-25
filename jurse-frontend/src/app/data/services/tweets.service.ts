import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  apiLink = 'http://localhost:8000/api/tweets/';
  constructor(private http: HttpClient) { }
  
  getAllTweets() {
    return this.http.get(`${this.apiLink}all`);
  }
}
