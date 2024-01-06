import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizersService {
  apiLink = 'http://localhost:8000/api/organizers/';
  constructor(private http: HttpClient) { }
  
  getAllOrganizers() {
    return this.http.get(`${this.apiLink}all`);
  }
}
