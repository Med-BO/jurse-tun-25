import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyNoteSpeakersService {
  apiLink = 'http://localhost:8000/api/keynotespeakers/';
  constructor(private http: HttpClient) { }
  
  getAllKeyNoteSpeakers() {
    return this.http.get(`${this.apiLink}all`);
  }
}
