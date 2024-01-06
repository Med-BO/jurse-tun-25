import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialSessionsService {
  apiLink = 'http://localhost:8000/api/specialsessions/';
  constructor(private http: HttpClient) { }
  
  getAllSpecialSessions() {
    return this.http.get(`${this.apiLink}all`);
  }
}
