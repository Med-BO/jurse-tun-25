import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {
  apiLink = 'http://localhost:8000/api/sponsors/';
  constructor(private http: HttpClient) { }
  
  getAllSponsors() {
    return this.http.get(`${this.apiLink}all`);
  }
}
