import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }


  // Fetch all trips
  getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.baseUrl}/trips`);
  }

  // Add a trip
  addTrip(trip: any): Observable<any> {
    const headers = this.authService.getAuthHeaders(); // Get Authorization headers
    return this.http.post(`${this.baseUrl}/trips`, trip, { headers });
  }

  // Fetch a trip by code
  getTrip(code: string): Observable<any> {
    const headers = this.authService.getAuthHeaders(); // Get Authorization headers
    return this.http.get<Trip>(`${this.baseUrl}/trips/${code}`, { headers });
  }

  // Update a trip
  updateTrip(code: string, trip: any): Observable<any> {
    const headers = this.authService.getAuthHeaders(); // Get Authorization headers
    return this.http.put(`${this.baseUrl}/trips/${code}`, trip, { headers });
  }
}
